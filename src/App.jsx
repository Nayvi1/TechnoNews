import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Post } from "./Pages/Post";

function App() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto [&>*]:px-5 [&>*]:sm:px-11  overflow-hidden relative">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
