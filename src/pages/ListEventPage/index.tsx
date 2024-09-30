import Image from "next/image";
import Link from "next/link";

const ListEventPage = (): JSX.Element => {
  return (
    <>
      <div className="bg-slate-100 p-8 h-[90dvh] overflow-y-auto">
        <HeaderEventPage />

        <div className="flex flex-wrap w-full justify-start items-center gap-10 px-10 py-12">
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
        </div>
      </div>
    </>
  );
};

function CardEvent(): JSX.Element {
  return (
    <div className="w-[300px] flex flex-col justify-between items-center bg-slate-200 overflow-hidden rounded-md shadow-md">
      <div className="w-full h-40 overflow-hidden">
        <Image
          width={350}
          height={350}
          src={"/images/kedunglo-biking-team.jpg"}
          alt="image event"
        />
      </div>

      <div className="px-5 py-4">
        <h2 className="capitalize font-bold text-xl text-slate-800">
          medal safar 2025
        </h2>
        <p className="text-slate-600 capitalize text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          hic rerum iste, omnis vero quibusdam!
        </p>
      </div>

      <Link
        className="w-[90%] text-center my-4 capitalize font-semibold text-slate-100 bg-slate-900 rounded-md px-1 py-2 duration-150 transition-all hover:bg-slate-500"
        href="/ListEventPage/DetailEvent"
      >
        ikut event
      </Link>
    </div>
  );
}

function HeaderEventPage(): JSX.Element {
  return (
    <div className=" sticky top-1 left-1">
      <h1 className="capitalize text-slate-800 font-semibold text-3xl">
        list event
      </h1>
      <p className="text-slate-600 capitalize font-normal text-md">
        kedunglo biking team
      </p>
    </div>
  );
}

export default ListEventPage;
