import { Outlet } from "react-router-dom";
import LinkButton from "../components/LinkButton";
import Footer from "../components/Footer";

function ManageAccount() {
  return (
    <div className="bg-semiBlack [&>*]:px-5 [&>*]:sm:px-11">
      <img src="/img/headeridk.png" alt="" className="!px-0" />
      <div className="flex justify-between py-3">
        <div className="flex gap-6 items-center">
          <LinkButton
            text="Account settings"
            width="w-auto"
            img="person"
            to="accountSetting"
          />
          <LinkButton
            text="Intrested ones"
            width="w-auto"
            img="star"
            to="intrested"
          />
          <LinkButton
            text="activities"
            width="w-auto"
            img="arrow white"
            to="activities"
          />
          <LinkButton
            text="notifications"
            width="w-auto"
            img="bell"
            to="notifications"
          />
        </div>
        <img src="/img/girl.png" alt="" className="w-16 h-16" />
      </div>
      <div className="bg-[#292c2d] py-28">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default ManageAccount;
