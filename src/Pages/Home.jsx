import BlogsSlider from "../components/BlogsSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestPosts from "../components/LatestPosts";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <BlogsSlider />
      <LatestPosts />
      <BlogsSlider />
      <BlogsSlider grayBg title="Best technews blogs" />
      <Footer></Footer>
    </>
  );
}
export default Home;
