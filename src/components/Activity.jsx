/* eslint-disable react/prop-types */
function Activity({ img = "", number, text = "" }) {
  return (
    <div className="flex flex-col w-40 h-40 rounded-md bg-semiGray items-center py-4">
      <img src={`/svg/${img}.svg`} alt="" />
      <p className="text-lg">{number}</p>
      <p className="text-lg font-p-extraLight text-center">{text}</p>
    </div>
  );
}
export default Activity;
