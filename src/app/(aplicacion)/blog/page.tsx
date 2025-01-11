import { obtenerBlogs } from "@/actions/blog/obtenerBlog";
import BlogArticulos from "@/componentes/blog/BlogArticulos";

export default async function BlogPage() {
  const blogs = await obtenerBlogs();
  console.log(blogs);
  return (
    <div>
      <BlogArticulos articulos={blogs} />
    </div>
  );
}