import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Post } from "./Pages/Post";
import ManageAccount from "./Pages/ManageAccount";
import AccountSetting from "./components/AccountSetting";
import Intrested from "./components/Intrested";
import Activities from "./components/Activities";
import Notifications from "./components/Notifications";

function App() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto overflow-hidden relative">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/manageAccount" element={<ManageAccount />}>
            <Route
              index
              element={<Navigate replace to="accountSetting" />}
            ></Route>
            <Route path="accountSetting" element={<AccountSetting />}></Route>
            <Route path="intrested" element={<Intrested />} />
            <Route path="activities" element={<Activities />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
