export const revalidate = 420;

interface Post {
  title: string;
  content: string;
  slug: string;
}

//// Static generation: good for a lot of data not change often

// export async function generateStaticParams() {
//   const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
//     (res) => res.json()
//   );
//
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  const post: Post = posts.find((post) => post.slug === params.slug)!;

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
