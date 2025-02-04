// routes/blog/[slug].tsx
import { Handlers, PageProps } from "$fresh/server.ts";
import { Layout } from "../../components/Layout.tsx";
import { getPost, urlFor } from "../../utils/sanity.ts";
import { renderPortableText } from "../../utils/portableText.tsx";

interface Author {
  name: string;
  image?: string; // URL is already resolved in the query
}

interface Post {
  title: string;
  publishedAt: string;
  body: any[]; // Portable Text blocks
  excerpt?: string;
  mainImage?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  author?: Author;
  categories?: Array<{ title: string }>;
}

export const handler: Handlers<Post | null> = {
  async GET(_, ctx) {
    const { slug } = ctx.params;
    const post = await getPost(slug);

    if (!post) {
      return ctx.renderNotFound();
    }

    return ctx.render(post);
  },
};

export default function BlogPostPage({ data: post }: PageProps<Post>) {
  if (!post) {
    return (
      <Layout title="Post Not Found">
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
              <p className="text-gray-600">
                The blog post you're looking for could not be found.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout title={post.title}>
      {/* Hero Section with Image */}
      {post.mainImage?.asset.url && (
        <section className="relative h-[32rem] bg-gray-900">
          <div className="absolute inset-0">
            <img
              src={post.mainImage.asset.url}
              alt={post.title}
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-6 text-gray-200">
                {post.author && (
                  <div className="flex items-center gap-2">
                    {post.author.image && (
                      <img
                        src={post.author.image}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    )}
                    <span>{post.author.name}</span>
                  </div>
                )}
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              {post.categories && post.categories.length > 0 && (
                <div className="flex gap-2 mt-4">
                  {post.categories.map((category) => (
                    <span
                      key={category.title}
                      className="bg-white/10 px-3 py-1 rounded-full text-sm"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* If no hero image, show a simpler header */}
      {!post.mainImage?.asset.url && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-6 text-gray-500">
                {post.author && (
                  <div className="flex items-center gap-2">
                    {post.author.image && (
                      <img
                        src={post.author.image}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    )}
                    <span>{post.author.name}</span>
                  </div>
                )}
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              {post.categories && post.categories.length > 0 && (
                <div className="flex gap-2 mt-4">
                  {post.categories.map((category) => (
                    <span
                      key={category.title}
                      className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="max-w-4xl mx-auto">
            {post.excerpt && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            )}
            {renderPortableText({ value: post.body })}
          </article>
        </div>
      </section>
    </Layout>
  );
}
