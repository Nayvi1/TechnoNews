import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Post } from "./Pages/Post";
import ManageAccount from "./Pages/ManageAccount";
import AccountSetting from "./components/AccountSetting";

function App() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto overflow-hidden relative">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/manageAccount" element={<ManageAccount />}>
            <Route
              path="accountSetting"
              index
              element={<AccountSetting />}
            ></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
