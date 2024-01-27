function LatestPosts() {
  return (
    <aside className="md:w-[30%]">
      <h2 className="mb-3 text-3xl">The latest content</h2>
      <div className="flex flex-col gap-2">
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
      <button className="w-full p-[10px] bg-semiGray rounded-full mt-4 font-p-semiBold text-sm flex justify-around">
        <span>See more content</span>
        <img src="./svg/arrow.svg" alt="" />
      </button>
    </aside>
  );
}

function Posts() {
  return (
    <div className="flex w-full pt-1 pb-1 bg-grayFr justify-between">
      <div className="flex flex-col justify-between w-10/12">
        <p className="text-center">Title Here</p>
        <div className="[&_span]:text-[10px] flex items-center justify-around [&_img]:mr-1 [&>div]:flex [&>div]:items-center">
          <div>
            <img
              src="./svg/threeDots.svg"
              className="cursor-pointer pr-4"
              alt=""
            />
            <img src="./svg/like.svg" alt="" />
            <span>28</span>
          </div>
          <div>
            <img src="./svg/calendar.svg" alt="" />
            <span>a day ago</span>
          </div>
        </div>
      </div>
      <img src="./img/chess.png" alt="" className="w-32" />
    </div>
  );
}

export default LatestPosts;
