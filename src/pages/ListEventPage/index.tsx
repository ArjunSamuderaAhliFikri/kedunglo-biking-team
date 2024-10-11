import Image from "next/image";
import Link from "next/link";
import GroupsIcon from "@mui/icons-material/Groups";
import EventIcon from "@mui/icons-material/Event";
import { useEffect, useState } from "react";

type DataEvents = {
  id: number;
  title: string;
  qtyParticipan: number;
  date: string;
  description: string;
  participans: {
    name: string;
    age: number;
    email: string;
    numberPhone: number;
    statusMedalers: string;
  }[];
}[];

const ListEventPage = (): JSX.Element => {
  const [listEvent, setListEvent] = useState<DataEvents>([]);
  const [ticket, setTicket] = useState<string | null>("");

  useEffect(() => {
    const fetchingDataEvents = async () => {
      const fetchingData = await fetch("/api/event");
      const responseData = await fetchingData.json();

      setListEvent(responseData);
    };

    fetchingDataEvents();
  }, []);

  useEffect(() => {
    // TODOOOOOO
    localStorage.setItem("ticketPoint", "1");
    // const getTicket = localStorage.getItem("ticket");
    // setTicket(getTicket);
  }, []);

  return (
    <>
      <div className="container py-4 h-[90dvh] overflow-y-auto">
        <div className="relative flex justify-center w-full lg:h-[325px] h-[375px] rounded-md">
          <div className="absolute w-1/2 h-full bg-gradient-to-r from-slate-800  via-slate-700/75 via-[80%] to-transparent to-[100%] top-0 left-0">
            {/* wrapper hero text */}
            <div className="lg:ml-20 lg:mt-20 ml-32 mt-28">
              <h1 className="text-slate-200 font-semibold lg:text-xl text-2xl capitalize leading-8">
                selamat datang medalers <br />{" "}
                <span className="lg:text-3xl text-4xl capitalize">
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
            className="object-cover"
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
            {/* <div className="mt-4 w-3/4 mx-auto">
              <ul className="flex justify-around items-center">
                <li className="text-slate-800 bg-slate-200 p-2 rounded-md">
                  latest
                </li>
                <li className="text-slate-800 bg-slate-200 p-2 rounded-md">
                  old
                </li>
                <li className="text-slate-800 bg-slate-200 p-2 rounded-md">
                  nearest
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        {/* <HeaderEventPage /> */}
        <div className="relative">
          <div className="absolute left-14">
            <h1 className="capitalize font-semibold text-2xl text-slate-800">
              events
            </h1>
          </div>
          <div className="grid grid-cols-3 lg:px-14 px-24 mt-14 w-full gap-7 lg:py-16 py-12">
            {listEvent.map((data) => {
              return (
                <CardEvent
                  id={data.id}
                  title={data.title}
                  qtyParticipan={data.qtyParticipan}
                  date={data.date}
                  description={data.description}
                  participans={data.participans}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

type CardEventProps = {
  id: number;
  title: string;
  qtyParticipan: number;
  date: string;
  description: string;
  participans: {
    name: string;
    age: number;
    email: string;
    numberPhone: number;
    statusMedalers: string;
  }[];
};

function CardEvent(props: CardEventProps): JSX.Element {
  return (
    <Link
      href={`ListEventPage/${props.id}`}
      className="flex flex-col justify-between items-center bg-transparent overflow-hidden rounded-md cursor-pointer transition-all duration-150 hover:scale-105 hover:shadow-xl"
    >
      <Image
        className="object-cover"
        width={450}
        height={350}
        src={"/images/bikes.jpg"}
        alt="image event"
      />

      <div className="w-full flex flex-col justify-center items-start py-4 px-2">
        <h2 className="capitalize font-bold text-xl text-slate-800">
          {props.title}
        </h2>

        {/* wrapper detail */}
        <div className="flex flex-wrap items-center gap-6 mt-1">
          <div className="flex justify-start items-center gap-3">
            <GroupsIcon className="fill-slate-800 text-3xl" />
            <span className="text-slate-800 text-sm font-semibold">
              {props.qtyParticipan}
            </span>
          </div>

          <div className="flex justify-start items-center gap-3">
            <EventIcon className="fill-slate-800 text-xl" />
            <span className="text-slate-800 text-sm font-semibold">
              {props.date}
            </span>
          </div>
        </div>

        {/* TODO */}
        {/* <p className="text-slate-600 capitalize text-sm mt-2">
          {props.description}
        </p> */}
      </div>

      {/* <button className="w-[90%] text-center my-4 capitalize font-semibold text-slate-100 bg-slate-900 rounded-md px-1 py-2 duration-150 transition-all hover:bg-slate-500">
        ikut event
      </button> */}
    </Link>
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
