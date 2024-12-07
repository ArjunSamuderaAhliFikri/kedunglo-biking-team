const SkeletonCardEvent = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col justify-between items-center bg-transparent overflow-hidden rounded-md cursor-pointer transition-all border-2 border-slate-200 duration-150 hover:scale-105 hover:shadow-xl">
        <div className="w-full h-44 bg-slate-300 animate-pulse"></div>
        {/* <Image
          className="object-cover"
          width={450}
          height={350}
          src={"/images/bikes.jpg"}
          alt="image event"
        /> */}

        <div className="w-full flex flex-col justify-center items-start py-4 xl:px-3 px-4">
          <h2 className="w-44 h-4 bg-slate-300 rounded-sm animate-pulse"></h2>

          {/* wrapper detail */}
          <div className="flex flex-wrap items-center gap-6 xl:mt-2 mt-3">
            <div className="flex justify-start items-center gap-3">
              <div className="size-4 rounded-md bg-slate-300 animate-pulse"></div>
              <span className="bg-slate-300 w-14 h-2 rounded-sm animate-pulse"></span>
            </div>

            <div className="flex justify-start items-center gap-3">
              <div className="size-4 rounded-md bg-slate-300 animate-pulse"></div>
              <span className="bg-slate-300 w-14 h-2 rounded-sm animate-pulse"></span>
            </div>
          </div>

          {/* TODO */}
          <p className="bg-slate-300 w-28 h-1 rounded-sm animate-pulse mt-5"></p>
          <p className="bg-slate-300 w-44 h-1 rounded-sm animate-pulse mt-1"></p>
          <p className="bg-slate-300 w-24 h-1 rounded-sm animate-pulse mt-1"></p>
        </div>

        {/* <button className="w-[90%] text-center my-4 capitalize font-semibold text-slate-100 bg-slate-900 rounded-md px-1 py-2 duration-150 transition-all hover:bg-slate-500">
        ikut event
      </button> */}
      </div>
    </>
  );
};
export default SkeletonCardEvent;
