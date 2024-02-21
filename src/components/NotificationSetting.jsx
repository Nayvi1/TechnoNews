import ToggleBtn from "./ToggleBtn";

function NotificationSetting() {
  return (
    <div className="bg-semiGray w-full p-8 flex flex-col">
      <p className="border-l-[3px] border-l-kongFoPanda pl-1">
        Notification setting
      </p>
      <div className="mt-11 [&_div]:flex [&>div]:justify-between flex flex-col gap-12 [&>div]:border-b [&>div]:pb-4 [&>div]:border-b-grayFr">
        <div>
          <div>
            <p>Manage notifications for responses to your comments</p>
            <img src="/svg/g-arrow right.svg" alt="" />
          </div>
          <ToggleBtn />
        </div>
        <div>
          <div>
            <p>Manage notifications for responses to your comments</p>
            <img src="/svg/g-arrow right.svg" alt="" />
          </div>
          <ToggleBtn />
        </div>
        <div>
          <div>
            <p>Manage notifications for responses to your comments</p>
            <img src="/svg/g-arrow right.svg" alt="" />
          </div>
          <ToggleBtn />
        </div>
        <div>
          <div>
            <p>Manage notifications for responses to your comments</p>
            <img src="/svg/g-arrow right.svg" alt="" />
          </div>
          <ToggleBtn />
        </div>
      </div>
    </div>
  );
}
export default NotificationSetting;
