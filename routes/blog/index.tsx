// routes/blog/index.tsx
import { Handlers, PageProps } from "$fresh/server.ts";
import { Layout } from "../../components/Layout.tsx";
import { getAllPosts } from "../../utils/sanity.ts";

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  mainImage?: {
    asset: {
      url: string;
    };
  };
  excerpt?: string;
  author?: {
    name: string;
    image?: string;
  };
}

export const handler: Handlers<Post[]> = {
  async GET(_, ctx) {
    const posts = await getAllPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage({ data: posts }: PageProps<Post[]>) {
  return (
    <Layout title="Blog">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-gray-600">
              Tanker og indsigter om AI, teknologi og læring
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {!posts || posts.length === 0
              ? (
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Ups! Her er tomt som en madpakke uden leverpostej! 🥪
                  </h2>
                  <p className="text-xl text-gray-600">
                    Bare rolig, vi arbejder på sagen!
                  </p>
                </div>
              )
              : (
                <div className="grid gap-8">
                  {posts.map((post) => (
                    <article
                      key={post._id}
                      className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col gap-4">
                        {post.mainImage && (
                          <img
                            src={post.mainImage.asset.url}
                            alt={post.title}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        )}
                        <div>
                          <h2 className="text-2xl font-semibold mb-2">
                            <a
                              href={`/blog/${post.slug.current}`}
                              className="hover:text-blue-600 transition-colors"
                            >
                              {post.title}
                            </a>
                          </h2>
                          {post.excerpt && (
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          )}
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            {post.author && (
                              <div className="flex items-center gap-2">
                                {post.author.image && (
                                  <img
                                    src={post.author.image}
                                    alt={post.author.name}
                                    className="w-6 h-6 rounded-full"
                                  />
                                )}
                                <span>{post.author.name}</span>
                              </div>
                            )}
                            <time dateTime={post.publishedAt}>
                              {new Date(post.publishedAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                },
                              )}
                            </time>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
