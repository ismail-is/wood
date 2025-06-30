import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import dynamic from "next/dynamic";

const ProjectGridIsotope = dynamic(
  () => import("@/src/components/isotope/ProjectGridIsotope"),
  {
    ssr: false,
  }
);
const Gallery = () => {
  return (
    <Layout  header={3} footer={1}>
      <PageBanner pageName={"Gallery"} />
      {/*====== Start Gallery section ======*/}
      <ProjectGridIsotope />
      {/*====== End Gallery section ======*/}
      {/* <Partners /> */}
    </Layout>
  );
};
export default Gallery;
