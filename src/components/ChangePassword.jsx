function ChangePassword() {
  return (
    <div className="flex items-center">
      <div>
        <img src="/img/changePassword.png" alt="" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-4xl font-p-semiBold">Change Password</h2>
        <form
          action=""
          className="mt-10 flex flex-col max-w-[350px] [&>label>input]:h-10 [&>label>input]:bg-transparent [&>label>input]:outline-none 
          [&>label>input]:border [&>label>input]:border-offWhite [&>label>input]:pl-4 
          [&>label>input]:placeholder:text-[#676464] [&>label]:flex [&>label]:flex-col 
          [&>label]:font-p-extraLight [&>label]:gap-2 gap-4"
        >
          <label htmlFor="">
            Recent Password
            <input type="text" placeholder="Your last password" />
          </label>
          <label htmlFor="">
            New Password
            <input type="text" placeholder="Password" />
          </label>
          <label htmlFor="">
            Confirm New Password
            <input type="text" placeholder="Confirm password" />
          </label>

          <div className="flex mt-6">
            <button className="w-full bg-white text-black text-sm font-p-semiBold h-10 rounded-md">
              Close
            </button>
            <button className="w-full bg-kongFoPanda text-sm font-p-semiBold h-10 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ChangePassword;
