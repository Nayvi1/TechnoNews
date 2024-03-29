import { Outlet } from "react-router-dom";
import LinkButton from "./LinkButton";

function AccountSetting() {
  return (
    <div className="flex flex-row-reverse justify-between gap-6 items-center">
      <div className="flex flex-col gap-16 min-w-[200px]">
        <LinkButton
          text="Change password"
          img="change password"
          to="changePassword"
        />
        <LinkButton
          text="User informations"
          img="person"
          to="userInformations"
        />
        <LinkButton
          text="More informations"
          img="threeDots"
          to="moreInformations"
        />
        <LinkButton
          text="Notifications setting"
          img="bell"
          to="notificationSetting"
        />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
export default AccountSetting;
