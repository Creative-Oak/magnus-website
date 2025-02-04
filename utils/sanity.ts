// utils/sanity.ts
import { createClient } from "https://esm.sh/@sanity/client@6.27.2";
import imageUrlBuilder from "https://esm.sh/@sanity/image-url@1.1.0";
import type { SanityImageSource } from "https://esm.sh/@sanity/image-url@1.1.0/lib/types/types";

if (!Deno.env.get("SANITY_PROJECT_ID")) {
  throw new Error("Missing SANITY_PROJECT_ID in environment");
}

export const client = createClient({
  projectId: Deno.env.get("SANITY_PROJECT_ID"),
  dataset: Deno.env.get("SANITY_DATASET") || "production",
  apiVersion: "2024-02-04",
  useCdn: true,
});

// Helper function to build image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Helper function to get all posts
export async function getAllPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      "author": author->{name, "image": image.asset->url},
      "categories": categories[]->{title},
      mainImage {
        asset-> {
          _id,
          url
        }
      }
    }
  `);
}

// Helper function to get a single post by slug
export async function getPost(slug: string) {
  return await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      slug,
      publishedAt,
      excerpt,
      body,
      "author": author->{name, "image": image.asset->url},
      "categories": categories[]->{title},
      mainImage {
        asset-> {
          _id,
          url
        }
      }
    }
  `,
    { slug },
  );
}
