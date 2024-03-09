import { VscLinkExternal } from "react-icons/vsc";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col p-2 mx-auto w-full max-w-7xl gap-4 ">
      <div className="flex min-h-60 bg-black/90 p-4 flex-col items-center justify-center relative rounded-xl">
        <div className="glowBox -z-50 "></div>
        <h1 className="text-5xl font-bold">
          Hey, I&apos;m Onur, a FRONTEND ENGINEER.
        </h1>
        <p className="opacity-70">
          I enjoy creating visually stunning websites with user-centric,
          delightful experiences.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 ">
        <div className=" bg-amber-400 min-h-60 flex-[4] rounded-xl  p-4 min-w-[320px] relative text-black">
          <a
            href="https://onui-component-lib.vercel.app/"
            target="_blank"
            className="absolute top-2 right-2 bg-white/50 p-3 rounded-full hover:bg-white/90 transition-colors"
          >
            <VscLinkExternal className="text-black" />
          </a>
          <h1 className="text-5xl font-bold font-mono">on.ui</h1>
          <p className="opacity-70">
            My React + Tailwind component library. Reusable, customizable, open
            source.
          </p>
        </div>
        <div className=" bg-gray-400 min-h-60 flex-[6] rounded-xl min-w-[320px] p-4 relative text-black">
          <h1 className="text-5xl font-bold font-mono">Work in progress...</h1>
        </div>
      </div>
    </main>
  );
}
