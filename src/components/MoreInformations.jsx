function MoreInformations() {
  return (
    <div className="bg-semiGray w-full p-8 flex flex-col">
      <p className="border-l-[3px] border-l-kongFoPanda pl-1">
        More Informations
      </p>
      <div className="flex items-center gap-9 mt-7">
        <span>Avatar Picture</span>
        <div className="flex gap-2">
          <img
            src="/img/girl.png"
            alt=""
            className="w-12 h-12 border-kongFoPanda border rounded-full"
          />
          <img src="/svg/add new one.svg" alt="" />
          <img src="/svg/trash.svg" alt="" />
        </div>
      </div>
      <p className="border-l-[3px] border-l-kongFoPanda pl-1 mt-14">
        About You
      </p>
      <div className="flex gap-9 mt-11">
        <span>About Me</span>
        <div className="flex gap-2">
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="bg-transparent outline-none border border-offWhite p-2"
          ></textarea>
          <img src="/svg/trash.svg" alt="" />
        </div>
      </div>
      <hr className="border-[#544D4D] mt-14" />
      <button className="bg-grayFr rounded-2xl w-fit px-3 py-2 text-sm flex gap-2 mt-14">
        Apply Changes <img src="/svg/arrow right.svg" alt="" />
      </button>
    </div>
  );
}
export default MoreInformations;
