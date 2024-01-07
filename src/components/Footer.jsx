/* eslint-disable react/prop-types */
function Footer() {
  return (
    <footer className="pt-14 pb-14 bg-semiBlack flex flex-col gap-16">
      <div
        className="flex [&_a]:text-xs [&_p]:text-xs [&_a]:font-p-extraLight [&_p]:font-p-extraLight 
      [&>div]:w-1/2 [&>div]:gap-5 [&>div]:flex [&>div]:flex-col"
      >
        <div>
          <h4>More</h4>
          <div className="flex flex-col gap-2">
            <a href="">Our App</a>
            <a href="">Our Website</a>
            <a href="">Our support</a>
          </div>
        </div>
        <div>
          <h4>About</h4>
          <p>
            Stay ahead with Techno News - your source for the latest in
            technology.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <SocialMedia text="Instagram" logo="instagram" />
        <SocialMedia text="X (twitter)" logo="x" />
        <SocialMedia text="Youtube" logo="youtube" />
      </div>
      <h5 className="text-center">©Copyright, All rights reserved.</h5>
    </footer>
  );
}

function SocialMedia({ text = "Untitled", logo = "" }) {
  return (
    <div className="bg-semiGray rounded-[50px] p-[10px] flex gap-1">
      <span className="text-xs font-p-extraLight">{text}</span>
      <img src={`./svg/${logo}.svg`} alt="" />
    </div>
  );
}

export default Footer;
