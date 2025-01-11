import { getBlogList } from "@/actions/blog/getBlogList";
import BlogList from "@/componentes/blog/BlogList";


export const dynamic = "force-dynamic"; // Asegura que la acción no use caché
const Page = async () => {
  const blogs = await getBlogList();
  return <BlogList blogs={blogs} />;
};

export default Page;
