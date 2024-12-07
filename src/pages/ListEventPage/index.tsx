import Image from "next/image";
import Link from "next/link";
import GroupsIcon from "@mui/icons-material/Groups";
import EventIcon from "@mui/icons-material/Event";
import SearchIcon from "@mui/icons-material/Search";
import { FormEvent, useEffect, useRef, useState } from "react";
import SkeletonCardEvent from "@/components/skeletons/skeletonCardEvent";

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
  // state
  const [listEvent, setListEvent] = useState<DataEvents>([]);
  const [test, setTest] = useState<DataEvents>([]);
  const [searchText, setSearchText] = useState<string>("");

  // ref
  const searchElementRef = useRef<any>();

  // event handler
  const handleSearchSomeEvent = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSearchText(searchElementRef.current.value);
  };

  const handleChangeInput = (event: string): void => {
    if (event == "") {
      setTest([...listEvent]);
    }
  };

  // useEffect
  useEffect(() => {
    const filteringListEvent = listEvent.slice();
    if (!searchText) {
      setTest(filteringListEvent);
    }

    const searchSomeEvent = filteringListEvent.filter((data) =>
      data.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setTest(searchSomeEvent);
  }, [searchText]);

  useEffect(() => {
    const fetchingDataEvents = async () => {
      const fetchingData = await fetch("/api/event");
      const responseData = await fetchingData.json();

      setListEvent(responseData);
      setTest(responseData);
    };

    fetchingDataEvents();
  }, []);

  return (
    <>
      <div className="container py-4 h-[90dvh] overflow-y-auto">
        <div className="relative flex justify-center w-full lg:h-[325px] h-[375px] rounded-md">
          <div className="absolute w-1/2 h-full bg-gradient-to-r from-slate-800 from-[50%] xl:from[0%] via-slate-700/75 xl:via-[80%] to-transparent xl:to-[100%] top-0 left-0">
            {/* wrapper hero text */}
            <div className="lg:ml-20 lg:mt-20 xl:ml-32 xl:mt-20 ml-10 mt-12 xl:w-fit w-full">
              <h1 className="text-slate-200 font-semibold lg:text-xl text-sm capitalize xl:leading-8">
                selamat datang medalers <br />{" "}
                <span className="lg:text-3xl xl:text-4xl text-lg capitalize text-shadow">
                  kedunglo biking team
                </span>
              </h1>
              <p className="font-normal text-slate-300 capitalize text-xs mt-2">
                pantau terus event KBT hanya ada disini!
              </p>
              <button
                className="bg-blue-600 text-slate-200 xl:text-md capitalize xl:px-4 py-2 px-1 rounded-md mt-5 text-center transition-all duration-200 hover:bg-blue-900 xl:w-36 w-32 h-10 text-xs"
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
          <form
            onSubmit={(event) => handleSearchSomeEvent(event)}
            className="flex absolute z-50 xl:w-1/2 w-11/12 -bottom-8 left-1/2 -translate-x-1/2 bg-slate-100 p-4 rounded-md shadow-md"
          >
            <input
              onChange={(event) => handleChangeInput(event.target.value)}
              ref={searchElementRef}
              className="placeholder:text-slate-500 text-slate-500 bg-slate-200 px-3 py-2 w-full rounded-tl-md rounded-bl-md placeholder:font-normal outline-none"
              type="text"
              placeholder="cari event..."
            />
            <button
              className="text-slate-900 outline-none bg-slate-200 size-10 rounded-tr-md rounded-br-md overflow-hidden hover:bg-slate-300"
              type="submit"
            >
              <SearchIcon />
            </button>
          </form>
        </div>
        {/* <HeaderEventPage /> */}
        <div className="relative">
          <div className="absolute xl:left-14 left-6">
            <h1 className="capitalize font-semibold text-2xl text-slate-800">
              events
            </h1>
          </div>
          <div className="grid xl:grid-cols-3 grid-cols-1 lg:px-14 xl:px-24 px-5 mt-14 w-full xl:gap-7 gap-10 lg:py-16 py-12">
            {test.length > 0 ? (
              test.map((data) => {
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
              })
            ) : (
              <>
                <SkeletonCardEvent />
                <SkeletonCardEvent />
                <SkeletonCardEvent />
              </>
            )}
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
      className="flex flex-col justify-between items-center bg-transparent overflow-hidden rounded-md cursor-pointer transition-all border-2 border-slate-200 duration-150 hover:scale-105 hover:shadow-xl"
    >
      <Image
        className="object-cover"
        width={450}
        height={350}
        src={"/images/bikes.jpg"}
        alt="image event"
      />

      <div className="w-full flex flex-col justify-center items-start py-4 xl:px-3 px-4">
        <h2 className="capitalize xl:font-bold xl:text-xl text-md font-semibold text-slate-800">
          {props.title}
        </h2>

        {/* wrapper detail */}
        <div className="flex flex-wrap items-center gap-6 xl:mt-2 mt-3">
          <div className="flex justify-start items-center gap-3">
            <GroupsIcon className="fill-slate-800 xl:text-3xl text-xl" />
            <span className="text-slate-800 text-sm font-semibold">
              {props.qtyParticipan}
            </span>
          </div>

          <div className="flex justify-start items-center gap-3">
            <EventIcon className="fill-slate-800 xl:text-xl text-lg" />
            <span className="text-slate-800 text-sm font-semibold">
              {props.date}
            </span>
          </div>
        </div>

        {/* TODO */}
        <p className="text-slate-600 capitalize xl:text-sm text-xs mt-2">
          {props.description.substring(
            0,
            Math.round(props.description.length / 2)
          )}
          ..
        </p>
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
