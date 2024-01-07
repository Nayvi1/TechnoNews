import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="w-full [&>*]:px-5 [&>*]:sm:px-11 bg-semiBlack overflow-hidden relative">
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
