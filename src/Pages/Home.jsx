import BlogsSlider from "../components/BlogsSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IsMobile from "../components/IsMobile";
import LatestPosts from "../components/LatestPosts";
import Navbar from "../components/Navbar";
import TopList from "../components/TopList";
import useMobile from "../hooks/useMobile";

function Home() {
  const MD = 768;
  const isMobile = useMobile();

  return (
    <>
      <Navbar />
      <Header />
      <BlogsSlider
        tabs={
          isMobile
            ? { Blogs: "blog", Videos: "weebs" }
            : {
                Recommended: "hi",
                Hardware: "hard",
                KeyBoard: "keys",
                News: "nigga",
              }
        }
      />
      <div className="w-full md:flex md:flex-row-reverse mt-6 gap-7">
        <LatestPosts />
        <IsMobile minWidth={MD} nonMobile={<TopList />} />
      </div>
      <BlogsSlider
        tabs={
          isMobile
            ? { Blogs: "blog", Videos: "weebs" }
            : {
                Recommended: "hi",
                Hardware: "hard",
                KeyBoard: "keys",
                News: "nigga",
              }
        }
      />
      <BlogsSlider
        grayBg
        title="Best technews blogs"
        tabs={
          isMobile
            ? { Blogs: "blog", Videos: "weebs" }
            : {
                Recommended: "hi",
                Hardware: "hard",
                KeyBoard: "keys",
                News: "nigga",
              }
        }
      />

      <Footer />
    </>
  );
}
export default Home;
