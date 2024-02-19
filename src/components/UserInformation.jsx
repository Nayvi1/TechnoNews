function UserInformation() {
  return (
    <div className="bg-semiGray w-full p-8 flex flex-col gap-10">
      <p className="border-l-[3px] border-l-kongFoPanda pl-1">
        User information
      </p>
      <div className="flex gap-16 flex-col  [&>input]:placeholder:text-[#676464] [&>input]:bg-transparent [&>input]:outline-none [&>input]:border-b [&>input]:border-[#544D4D]">
        <input type="text" placeholder="Name & Last name" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Birthday date" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="Email" />
      </div>
      <button className="bg-grayFr rounded-2xl w-fit px-3 py-2 text-sm flex gap-2">
        Edit something in your account <img src="/svg/arrow right.svg" alt="" />
      </button>
    </div>
  );
}
export default UserInformation;
