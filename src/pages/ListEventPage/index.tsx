import Image from "next/image";
import Link from "next/link";
import GroupsIcon from "@mui/icons-material/Groups";
import EventIcon from "@mui/icons-material/Event";

const ListEventPage = (): JSX.Element => {
  return (
    <>
      <div className="container bg-slate-100 py-4 h-[90dvh] overflow-y-auto">
        <div className="relative flex justify-center w-full h-[375px] rounded-md">
          <div className="absolute w-1/2 h-full bg-gradient-to-r from-slate-800  via-slate-700/75 via-[80%] to-transparent to-[100%] top-0 left-0">
            {/* wrapper hero text */}
            <div className="ml-32 mt-28">
              <h1 className="text-slate-200 font-semibold text-2xl capitalize leading-8">
                selamat datang medalers <br />{" "}
                <span className="text-4xl capitalize">
                  kedunglo biking team
                </span>
              </h1>
              <p className="font-normal text-slate-300 capitalize text-xs mt-2">
                pantau terus event KBT hanya ada disini!
              </p>
              <button
                className="bg-blue-600 text-slate-200 text-normal capitalize px-4 py-2 rounded-md mt-5 text-center transition-all duration-200 hover:bg-blue-900"
                type="button"
              >
                ikut event sekarang!
              </button>
            </div>
          </div>
          <Image
            className="object-cover w-fill"
            width={1500}
            height={500}
            src="/images/bikes.jpg"
            alt="hero image"
          />

          {/* form search */}
          <div className="absolute z-50 w-1/2 -bottom-8 left-1/2 -translate-x-1/2 bg-slate-100 p-4 rounded-md shadow-md">
            <input
              className="placeholder:text-slate-500 text-slate-500 bg-slate-200 px-3 py-2 w-full rounded-md shadow placeholder:font-normal outline-none"
              type="text"
              placeholder="cari event..."
            />
          </div>
        </div>
        {/* <HeaderEventPage /> */}

        <div className="grid grid-cols-3 px-24 mt-14 w-full gap-5 py-12">
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
    <div className="flex flex-col justify-between items-center bg-slate-200 overflow-hidden rounded-md shadow-xl">
      <Image
        className="object-cover"
        width={450}
        height={350}
        src={"/images/bikes.jpg"}
        alt="image event"
      />

      <div className="px-5 py-4">
        <h2 className="capitalize font-bold text-xl text-slate-800">
          medal safar 2025
        </h2>

        {/* wrapper detail */}
        <div className="flex items-center gap-6 mt-1">
          <div className="flex justify-start items-center gap-3">
            <GroupsIcon className="fill-slate-800 text-3xl" />
            <span className="text-slate-800 text-sm font-semibold">102</span>
          </div>

          <div className="flex justify-start items-center gap-3">
            <EventIcon className="fill-slate-800 text-xl" />
            <span className="text-slate-800 text-sm font-semibold">
              27-04-2026
            </span>
          </div>
        </div>

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
