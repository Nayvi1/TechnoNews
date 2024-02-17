import Sticky from "react-stickynode";
import Navbar from "../components/Navbar";
export const Post = () => {
  return (
    <div className="[&>*]:px-5 [&>*]:sm:px-11 bg-semiBlack w-full">
      <Navbar />
      <div
        className="w-full flex justify-center bg-grayFr py-[48px] "
        style={{ direction: "rtl" }}
      >
        <div className="w-[80%] flex flex-col gap-[17px]">
          <p className="font-p-semiBold text-[36px] ">
            {" "}
            What is a CPU? Everything you need to know about processors
          </p>
          <div>
            <h4 className="text-lighter">lali ?</h4>
            {/* <img /> */}
          </div>
          <div>
            <h4 className="text-lighter">hadi akhlagh ?</h4>
            {/* <img/> */}
          </div>
        </div>
      </div>
      <div className="flex items-stretch h-[2000px] gap-[42px] px-[45px] bg-grayFr">
        <div className="flex-col bg-black w-[266px]">.</div>
        <div className="flex-col w-[976px]">
          <div className="w-full">
            <img src="/img/motherboard-big.png" className="w-full" />
            <div>
              <p>
                The Central Processing Unit (CPU) is the primary component of a
                computer that acts as its “control center.” The CPU, also
                referred to as the “central” or “main” processor, is a complex
                set of electronic circuitry that runs the machine’s operating
                system and apps. The CPU interprets, processes and executes
                instructions, most often from the hardware and software programs
                running on the device.
              </p>
              <br />
              <p>
                The CPU performs arithmetic, logic, and other operations to
                transform data input into more usable information output. While
                the CPU must contain at least one processing core, many contain
                multiple cores. A server with two hexa-core CPUs, for example,
                will have a total of 12 processors.
              </p>
              <h1 className="font-p-semiBold text-[36px]">
                What You Need to Know About a Central Processing Unit (CPU)?
              </h1>
              <p>
                Running multiple processor units simultaneously allows for
                multi-tasking and can dramatically improve performance. But
                while important, the number of cores and processors aren’t the
                only factors that need to be taken into consideration. To
                determine the best CPU for a project, developers typically focus
                on the specific applications that will be dependent on the CPU
                and identify the most important features based on those apps’
                requirements. Among the many things to consider are:
              </p>
              <ul className="list-disc px-[32px]">
                <li>How many cores are required</li>
                <li>What CPU speed is required</li>
                <li>
                  What size cache (temporary storage) is required for quick
                  retrieval
                </li>
                <li>
                  If there is processor compatibility with the motherboard
                  socket
                </li>
                <li>If an integrated GPU is required to support graphics</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-col  bg-red-400 w-[24px]">
          <div className="relative h-[50%] w-full overflow-hidden bg-slate-500">
            <Sticky enabled={true} top={50} bottomBoundary={1200}>
              <div className="">
                1 <br />
                1 <br />
                1 <br />
                1 <br />
                1 <br />
              </div>
            </Sticky>
          </div>
        </div>
      </div>
    </div>
  );
};
