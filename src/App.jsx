import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="w-full pl-5 pr-5 bg-semiBlack">
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
