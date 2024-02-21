import iconMemory from "./assets/icon-memory.svg";
import iconReaction from "./assets/icon-reaction.svg";
import iconVerbal from "./assets/icon-verbal.svg";
import iconVisual from "./assets/icon-visual.svg";

export default function App() {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="flex bg-white shadow-2xl max-w-[30rem] mx-auto my-[9rem] rounded-3xl max-[500px]:flex-col max-[500px]:max-w-[300px] max-[500px]:my-[0.5rem]">
        <section className="rounded-3xl text-white p-6 text-center bg-gradient-to-b from-background1 to-background2">
          <h1 className="opacity-80 mb-3 text-slate-200 font-semibold">
            Your Result
          </h1>
          <div className="bg-gradient-to-b from-circle1 to-circle2 flex flex-col justify-center items-center mb-3 rounded-full w-fit px-9 py-6 mx-auto">
            <span className="text-5xl font-semibold">76</span>
            <span className="opacity-45">of 100</span>
          </div>
          <h1 className="font-semibold text-xl mb-3">Great</h1>
          <p className="text-center text-sm opacity-80 text-slate-200">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </section>
        <section className="p-6">
          <h1 className="font-semibold text-DarkGrayBlue mb-5">Summary</h1>
          <div className="min-[501px]:w-[12rem] flex flex-col gap-4 text-sm">
            <div className="flex items-center justify-between bg-lightRed p-1 rounded">
              <span className="flex items-center text-lightRedText">
                <img src={iconReaction} className="mr-2 size-[1rem]" />
                Reaction
              </span>
              <span className="text-DarkGrayBlue">
                <b>80</b> / 100
              </span>
            </div>
            <div className="flex items-center justify-between bg-orangeyYellow p-1 rounded">
              <span className="flex items-center text-orangeyYellowText">
                <img src={iconMemory} className="mr-2 size-[1rem]" />
                Memory
              </span>
              <span className="text-DarkGrayBlue">
                <b>92</b> / 100
              </span>
            </div>
            <div className="flex items-center justify-between bg-greenTeal p-1 rounded">
              <span className="flex items-center text-greenTealText">
                <img src={iconVerbal} className="mr-2 size-[1rem]" />
                Verbal
              </span>
              <span className="text-DarkGrayBlue">
                <b>61</b> / 100
              </span>
            </div>
            <div className="flex items-center justify-between bg-cobaltBlue p-1 rounded mb-2">
              <span className="flex items-center text-cobaltBlueTxt">
                <img src={iconVisual} className="mr-2 size-[1rem]" />
                Visual
              </span>
              <span className="text-DarkGrayBlue">
                <b>72</b> / 100
              </span>
            </div>
            <button
              className="bg-DarkGrayBlue rounded-full p-[6px] text-white text-sm hover:bg-gradient-to-r from-background1 via-circle1 to-background2"
              type="button"
            >
              Continue
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
