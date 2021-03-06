function BlogPost({ post }) {
   return (
      <div>
         <h1>{post.title}</h1>
         <h2>id: {post.post}</h2>
      </div>
   );
}

// This function gets called at build time
export async function getStaticPaths() {
   const posts = ["1", "2", "3"];

   // Get the paths we want to pre-render based on posts
   const paths = posts.map((post) => ({
      params: { post: post.toString() },
   }));

   // We'll pre-render only these paths at build time.
   // { fallback: false } means other routes should 404.
   return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
   // params contains the post `id`.
   // If the route is like /posts/1, then params.id is 1
   const post = { title: "postTitle", post: params.post };

   // Pass post data to the page via props
   return { props: { post } };
}

export default BlogPost;
