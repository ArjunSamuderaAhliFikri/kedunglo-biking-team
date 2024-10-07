import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { user } from "@/service/user";

type DataDetailEvent = {
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

type ParticipanProfile = {
  name: string;
  age: number;
  email: string;
  numberPhone: number;
  statusMedalers: string;
};

const DetailEvent = (): JSX.Element => {
  const [dataDetailEvent, setDataDetailEvent] = useState<
    DataDetailEvent | null | undefined
  >({});
  const { query } = useRouter();

  function handleFollowingEvent(): void {
    // const addMedalers = dataDetailEvent?.participans.map((data))
    // setDataDetailEvent({...dataDetailEvent, })
    // todo
    return;
  }

  useEffect(() => {
    async function handleFilterData() {
      const fetchingData = await fetch("/api/event");
      const response = await fetchingData.json();

      const result = response.find((data: any) => data.id == query.DetailEvent);

      setTimeout(() => {
        setDataDetailEvent(result);
      }, 1000);
    }

    handleFilterData();
  }, [query]);

  return (
    <>
      {dataDetailEvent != undefined && (
        <>
          <section className="flex h-screen flex-col gap-y-52 bg-slate-200">
            <div className="flex justify-center bg-slate-800 w-full h-44 relative mb-36 py-5">
              <div className="flex bg-slate-100 w-[65%] absolute top-20 h-[350px] mx-auto rounded-md overflow-hidden shadow-md">
                <Image
                  src={"/images/bikes.jpg"}
                  alt={dataDetailEvent.title}
                  width={475}
                  height={455}
                />

                <div className="p-7">
                  <div className="tracking-normal w-3/4">
                    <h1 className="text-slate-800 font-semibold text-2xl capitalize">
                      {dataDetailEvent.title}
                    </h1>

                    <p className="text-slate-500 font-normal capitalize mt-2 text-sm">
                      {dataDetailEvent.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-start mt-5 gap-3 text-slate-700">
                    <div className="flex items-center w-fit rounded-md p-1">
                      <ul className="flex w-fit">
                        <li className="flex justify-center items-center relative h-10 w-10">
                          <Image
                            className="rounded-full absolute"
                            src={"/images/profile-student.jpg"}
                            alt="profile participan"
                            width={35}
                            height={35}
                          />
                        </li>
                        <li className="flex justify-center items-center relative h-10 w-10">
                          <Image
                            className="rounded-full absolute z-10 -left-6"
                            src={"/images/profile-user.jpg"}
                            alt="profile participan"
                            width={35}
                            height={35}
                          />
                        </li>
                        <li className="flex justify-center items-center relative h-10 w-10">
                          <Image
                            className="rounded-full absolute z-20 -left-12"
                            src={"/images/profile-student.jpg"}
                            alt="profile participan"
                            width={35}
                            height={35}
                          />
                        </li>
                        <li className="flex justify-center items-center relative h-10 w-10">
                          <Image
                            className="rounded-full absolute z-30 -left-[70px]"
                            src={"/images/profile-user.jpg"}
                            alt="profile participan"
                            width={35}
                            height={35}
                          />
                        </li>
                        <li className="flex justify-center items-center relative h-10 w-10">
                          <Image
                            className="rounded-full absolute z-40 -left-[90px]"
                            src={"/images/profile-user.jpg"}
                            alt="profile participan"
                            width={35}
                            height={35}
                          />
                        </li>
                      </ul>
                      <h2 className="-translate-x-20 text-sm font-semibold text-slate-600">
                        {dataDetailEvent.participans != undefined &&
                          dataDetailEvent.participans.length}{" "}
                        participan
                      </h2>
                    </div>

                    <div className="flex items-center gap-4 rounded-md p-3">
                      <CalendarTodayIcon />
                      <span className="text-sm font-semibold text-slate-600">
                        {dataDetailEvent.date}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleFollowingEvent}
                    className="text-slate-100 bg-slate-900 px-6 py-2 rounded-md capitalize text-md absolute bottom-5 right-8 transition-all hover:bg-slate-700 hover:text-slate-400"
                    type="button"
                  >
                    ikuti event
                  </button>
                </div>
              </div>
            </div>
            <div className="container flex justify-center">
              <table className="bg-slate-900 table-auto rounded-md w-3/4 shadow-lg">
                <thead className="border-b-2 border-slate-700">
                  <tr>
                    <th className="p-3 capitalize font-semibold text-slate-200">
                      no
                    </th>
                    <th className="p-3 capitalize font-semibold text-left text-slate-200">
                      medalers
                    </th>
                    <th className="p-3 capitalize font-semibold text-center text-slate-200">
                      city
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-slate-200 text-slate-600 font-semibold capitalize">
                  {dataDetailEvent.participans != undefined &&
                    dataDetailEvent.participans.map(
                      (data: ParticipanProfile, id: number) => (
                        <>
                          <tr className="border-b-2 border-slate-300">
                            <td className="py-4 p-2 text-center">{id + 1}</td>
                            <td className="py-4 flex gap-5 items-center p-2 text-left">
                              <Image
                                className="rounded-full"
                                alt="profil user"
                                src={"/images/profile-user.jpg"}
                                width={35}
                                height={35}
                              />
                              <div className="flex flex-col">
                                <h1 className="text-md">{data.name}</h1>
                                <span className="text-xs text-slate-500 uppercase">
                                  #lgoldkbt
                                </span>
                              </div>
                            </td>
                            <td className="py-4 p-2 text-center uppercase">
                              kota kediri
                            </td>
                          </tr>
                        </>
                      )
                    )}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default DetailEvent;
