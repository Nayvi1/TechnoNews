import Activity from "./Activity";

function Activities() {
  return (
    <div className="flex items-center flex-col gap-16">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-p-semiBold">Activities</h2>
        <p className="text-2xl font-p-extraLight">All of your activities!</p>
      </div>
      <div className="flex gap-12 items-center">
        <Activity img="a-calander" text="Days you were with us" number="12" />
        <Activity img="a-comment" text="Comments" number="0" />
        <Activity img="a-like" text="Likes" number="0" />
        <Activity img="a-book" text="Blogs you have read" number="0" />
        <Activity img="a-people" text="Followers" number="0" />
      </div>
    </div>
  );
}
export default Activities;
