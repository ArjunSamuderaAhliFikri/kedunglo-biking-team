import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { user } from "@/service/user";
import { TicketUserContext } from "@/context/ticketUserContext";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
    imageProfile: string;
  }[];
};

type ParticipanProfile = {
  [x: string]: any;
  name: string;
  age: number;
  email: string;
  numberPhone: number;
  statusMedalers: string;
  imageProfile: string;
};

const DetailEvent = (): JSX.Element => {
  // state
  const [dataDetailEvent, setDataDetailEvent] = useState<
    DataDetailEvent | null | undefined
  >();
  const [imageProfile, setImageProfile] = useState<ParticipanProfile>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { query } = useRouter();

  // context
  const { ticketUser, setTicketUser } = useContext(TicketUserContext);

  // event handler
  function handleFollowingEvent(): void {
    // kita ambil data peserta yang lama, kemudian akan kita manipulasi dengan menambahkan data baru (yaitu user itu sendiri)
    const addNewParticipan = dataDetailEvent?.participans.slice();
    // kita akan mutasi / ubah data 'participans' yang berupa array dengan menggunakan method 'push()' untuk mengisi data baru
    addNewParticipan?.push(user);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setDataDetailEvent({ ...dataDetailEvent, participans: addNewParticipan });
      setTicketUser(ticketUser - 1);
    }, 1000);
  }

  // useEffect
  useEffect(() => {
    const getDataProfile = dataDetailEvent?.participans.slice(
      0,
      Math.ceil((dataDetailEvent?.participans.length * 1) / 2)
    );

    setImageProfile(getDataProfile);
  }, [dataDetailEvent]);

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
          <section className="flex h-screen flex-col gap-y-52 bg-slate-200 overflow-auto">
            <div className="flex justify-center bg-slate-800 w-full py-16 2xl:h-44 relative mb-28 2xl:mb-36 2xl:py-5">
              <div className="flex xl:flex-row flex-col bg-slate-100 w-11/12 xl:w-10/12 2xl:w-7/12 absolute top-14 h-[325px] 2xl:h-[350px] mx-auto rounded-md overflow-hidden shadow-md">
                <Image
                  className="h-24 object-cover xl:h-full"
                  src={"/images/bikes.jpg"}
                  alt={dataDetailEvent.title}
                  width={475}
                  height={455}
                />

                <div className="xl:p-7 p-5">
                  <div className="tracking-normal xl:w-3/4 w-full">
                    <h1 className="text-slate-800 font-semibold xl:text-2xl text-lg capitalize">
                      {dataDetailEvent.title}
                    </h1>

                    <p className="text-slate-500 font-normal capitalize xl:mt-2 mt-1 xl:text-sm text-xs">
                      {dataDetailEvent.description}
                    </p>
                  </div>

                  <div className="flex xl:justify-start justify-between items-center mt-5 gap-3 text-slate-700">
                    <div className="flex justify-center items-center w-fit gap-4 rounded-md p-1">
                      <ul className="flex w-full">
                        {imageProfile != undefined &&
                          imageProfile.map(
                            (
                              data: { imageProfile: string | StaticImport },
                              id: number
                            ) => (
                              <>
                                <li className="flex justify-center items-center size-8">
                                  <Image
                                    className={`rounded-full`}
                                    src={data.imageProfile}
                                    alt="profile participan"
                                    width={100}
                                    height={100}
                                  />
                                </li>
                              </>
                            )
                          )}
                      </ul>

                      <h2 className="text-xs font-semibold text-slate-600">
                        {dataDetailEvent.participans != undefined &&
                          `${dataDetailEvent.participans.length} participan`}
                      </h2>
                    </div>

                    <div className="flex items-center gap-4 rounded-md p-3 text-slate-900 bg-slate-300">
                      <CalendarTodayIcon />
                      <span className="text-sm font-semibold">
                        {dataDetailEvent.date}
                      </span>
                    </div>
                  </div>
                  <button
                    disabled={loading || ticketUser == 0}
                    onClick={handleFollowingEvent}
                    className="text-slate-100 bg-slate-900 px-6 py-2 rounded-md capitalize text-md absolute xl:bottom-5 bottom-2 lg:w-fit w-11/12 right-1/2 lg:translate-x-0  translate-x-1/2 xl:right-8 transition-all hover:bg-slate-700 hover:text-slate-400 disabled:bg-slate-600 disabled:text-slate-500"
                    type="button"
                  >
                    {loading
                      ? "Loading"
                      : ticketUser == 0
                      ? "anda sudah mengikuti satu event"
                      : "ikuti event"}
                  </button>
                </div>
              </div>
            </div>
            <div className="container flex justify-center py-8">
              <table className="bg-slate-900 table-auto rounded-md xl:w-3/4 w-11/12 shadow-lg max-h-[500px] overflow-y-auto">
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
                <tbody className="bg-slate-200 text-slate-600 font-semibold capitalize h-5 overflow-y-auto">
                  {dataDetailEvent.participans != undefined &&
                    dataDetailEvent.participans.map(
                      (data: ParticipanProfile, id: number) => (
                        <>
                          <tr
                            className="border-b-2 bg-slate-100 border-slate-300"
                            key={id}
                          >
                            <td className="xl:py-4 p-2 text-center">
                              {id + 1}
                            </td>
                            <td className="py-4 flex gap-5 items-center p-2 text-left">
                              <Image
                                className="rounded-full"
                                alt="profil user"
                                src={data.imageProfile}
                                width={35}
                                height={35}
                              />
                              <div className="flex flex-col">
                                <h1 className="xl:text-md text-xs font-semibold">
                                  {data.name.length >= 20
                                    ? `${data.name.substring(0, 20)}..`
                                    : data.name}
                                </h1>
                                <span className="text-xs font-normal lg:font-semibold text-slate-500 uppercase">
                                  #lgoldkbt
                                </span>
                              </div>
                            </td>
                            <td className="lg:py-4 py-0 lg:p-2 p-3 text-xs lg:text-lg text-center uppercase">
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
