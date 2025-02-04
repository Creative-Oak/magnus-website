// utils/portableText.tsx
import { JSX } from "preact";
import { useMemo } from "preact/hooks";
import { urlFor } from "./sanity.ts";
import type { SanityImageSource } from "https://esm.sh/@sanity/image-url@1.1.0/lib/types/types";

interface MarkDef {
  _key: string;
  _type: string;
}

interface LinkMarkDef extends MarkDef {
  _type: "link";
  href: string;
}

interface Span {
  _key: string;
  _type: "span";
  text: string;
  marks: string[];
  markDefs?: MarkDef[];
}

interface TextBlock {
  _type: "block";
  _key: string;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  children: Span[];
  listItem?: "bullet";
  markDefs?: (MarkDef | LinkMarkDef)[];
}

interface SanityImage {
  _type: "image";
  _key: string;
  asset: SanityImageSource;
  alt?: string;
  caption?: string;
}

type PortableTextBlock = TextBlock | SanityImage;

interface PortableTextProps {
  value: PortableTextBlock[];
}

export function renderPortableText(
  { value }: PortableTextProps,
): JSX.Element[] {
  const renderBlock = (block: PortableTextBlock): JSX.Element | null => {
    switch (block._type) {
      case "block": {
        if (block.style === "blockquote") {
          return (
            <blockquote
              key={block._key}
              className="border-l-4 border-gray-300 pl-4 my-8 italic text-gray-700"
            >
              {block.children?.map((child) => renderSpan(child))}
            </blockquote>
          );
        }

        // Handle different heading styles
        const headingStyles: Record<string, string> = {
          h1: "text-4xl font-bold mt-12 mb-6",
          h2: "text-3xl font-bold mt-10 mb-4",
          h3: "text-2xl font-bold mt-8 mb-4",
          h4: "text-xl font-bold mt-6 mb-3",
        };

        if (block.style && block.style in headingStyles) {
          const Tag = block.style as keyof JSX.IntrinsicElements;
          return (
            <Tag key={block._key} className={headingStyles[block.style]}>
              {block.children?.map((child) => renderSpan(child))}
            </Tag>
          );
        }

        // Handle lists
        if (block.listItem === "bullet") {
          return (
            <li key={block._key} className="ml-4">
              {block.children?.map((child) => renderSpan(child))}
            </li>
          );
        }

        // Default paragraph
        return (
          <p key={block._key} className="mb-6 text-gray-800 leading-relaxed">
            {block.children?.map((child) =>
              renderSpan(child)
            )}
          </p>
        );
      }

      case "image": {
        const imageUrl = urlFor(block.asset).width(800).url();

        return (
          <figure key={block._key} className="mb-6 mt-12">
            <img
              src={imageUrl}
              alt={block.alt || "Blog post image"}
              className="w-full rounded-lg shadow-lg"
            />
            {block.caption && (
              <figcaption className="mt-4 text-center text-sm text-gray-600">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );
      }

      default:
        return null;
    }
  };

  const renderSpan = (span: Span): JSX.Element | string => {
    if (!span.marks || span.marks.length === 0) {
      return span.text;
    }

    return span.marks.reduce((acc: JSX.Element | string, mark: string) => {
      // Find link annotation if it exists
      const linkMark = span.markDefs?.find(
        (def): def is LinkMarkDef => def._type === "link" && def._key === mark,
      );

      if (linkMark) {
        return (
          <a
            href={linkMark.href}
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {acc}
          </a>
        );
      }

      // Handle other marks (bold, italic)
      switch (mark) {
        case "strong":
          return <strong>{acc}</strong>;
        case "em":
          return <em>{acc}</em>;
        default:
          return acc;
      }
    }, span.text);
  };

  return useMemo(() => {
    const result: JSX.Element[] = [];
    let currentList: TextBlock[] = [];

    value.forEach((block, index) => {
      if (block._type === "block" && block.listItem === "bullet") {
        currentList.push(block as TextBlock);

        // If this is the last item or the next item isn't a list item,
        // render the accumulated list
        if (
          index === value.length - 1 ||
          value[index + 1]._type !== "block" ||
          (value[index + 1] as TextBlock).listItem !== "bullet"
        ) {
          result.push(
            <ul key={block._key} className="list-disc my-6 ml-6 space-y-2">
              {currentList.map((item) => renderBlock(item))}
            </ul>,
          );
          currentList = [];
        }
      } else {
        if (currentList.length > 0) {
          result.push(
            <ul
              key={`list-${block._key}`}
              className="list-disc my-6 ml-6 space-y-2"
            >
              {currentList.map((item) => renderBlock(item))}
            </ul>,
          );
          currentList = [];
        }
        const rendered = renderBlock(block);
        if (rendered) {
          result.push(rendered);
        }
      }
    });

    return result;
  }, [value]);
}
