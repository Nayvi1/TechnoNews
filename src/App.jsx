import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Post } from "./Pages/Post";
import ManageAccount from "./Pages/ManageAccount";
import AccountSetting from "./components/AccountSetting";
import Intrested from "./components/Intrested";
import Activities from "./components/Activities";
import Notifications from "./components/Notifications";
import ChangePassword from "./components/ChangePassword";
import UserInformation from "./components/UserInformation";
import MoreInformations from "./components/MoreInformations";
import NotificationSetting from "./components/NotificationSetting";

function App() {
  return (
    <div className="bg-grayFr">
      <div className="max-w-[1440px] mx-auto overflow-hidden relative">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/manageAccount" element={<ManageAccount />}>
            <Route index element={<Navigate replace to="accountSetting" />} />
            <Route path="accountSetting" element={<AccountSetting />}>
              <Route index element={<Navigate replace to="changePassword" />} />
              <Route path="changePassword" element={<ChangePassword />} />
              <Route path="userInformations" element={<UserInformation />} />
              <Route path="moreInformations" element={<MoreInformations />} />
              <Route
                path="notificationSetting"
                element={<NotificationSetting />}
              />
            </Route>
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
