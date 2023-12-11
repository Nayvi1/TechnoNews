import BlogsSlider from "../components/BlogsSlider";
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
    </>
  );
}
export default Home;
