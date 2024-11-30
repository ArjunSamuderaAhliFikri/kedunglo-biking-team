import TableBodyFragment from "@/components/fragments/TableBody";
import { useEffect, useState } from "react";
import axios from "axios";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Image from "next/image";
type DataMedalers = {
  id: number;
  profile: {
    name: string;
    city: string;
    age: number;
    gender: string;
    tagger: string;
    imageProfile: string;
  };
  average: number;
  elevation: number;
  isEdit: boolean;
}[];

const DashboardPage = (): JSX.Element => {
  // data medalers is by default
  const [dataMedalers, setDataMedalers] = useState<DataMedalers>([]);
  const [currentRecords, setCurrentRecords] = useState<any[]>([]);
  const [currentType, setCurrentType] = useState<string>("");

  // fungsi ini untuk menangani proses penyaringan data sesuai permintaan user
  function filteringDataBy(type: string, data: any[]) {
    if (type == "man-distance") {
      return data
        .filter((data) => data.profile.gender == "man")
        .sort((dataA, dataB) => dataB.average - dataA.average);
    } else if (type == "man-elevation") {
      return data
        .filter((data) => data.profile.gender == "man")
        .sort((dataA, dataB) => dataB.elevation - dataA.elevation);
    } else if (type == "woman-distance") {
      return data
        .filter((data) => data.profile.gender == "woman")
        .sort((dataA, dataB) => dataB.average - dataA.average);
    } else if (type == "woman-elevation") {
      return data
        .filter((data) => data.profile.gender == "woman")
        .sort((dataA, dataB) => dataB.elevation - dataA.elevation);
    }
  }

  // fungsi untuk memproses data yang nanti nya akan ditampilkan untuk user
  async function setDataBy(type: string) {
    const fetchData = await fetch("/api/hello");
    const showData = await fetchData.json();

    const result: any[] | undefined = filteringDataBy(type, showData);
    setCurrentType(type);
    setCurrentRecords(result);
  }

  useEffect(() => {
    const handleFetchDataMedalers = async (): Promise<void> => {
      axios
        .get("/api/hello")
        .then((response) => {
          const showDataByDefault = response.data.sort(
            (dataA, dataB) => dataB.elevation - dataA.elevation
          );
          setDataMedalers(response.data);
          setCurrentRecords(showDataByDefault);
        })
        .catch(() => {
          alert("Error!");
        });
    };

    handleFetchDataMedalers();
  }, []);

  return (
    <>
      <main className="container relative">
        <div className="relative p-2">
          <div className="text-slate-100 absolute -top-3 right-10 text-xl">
            <div className="relative w-fit cursor-pointer">
              <span className="absolute -top-2 -right-2 size-6 rounded-full bg-red-500 overflow-hidden flex justify-center items-center font-semibold text-xs">
                +5
              </span>
              <NotificationsIcon />
            </div>
          </div>
          <ul className="lg:w-fit flex justify-between items-center bg-gray-800 p-3 rounded-bl-lg rounded-br-lg absolute lg:left-[57%] 2xl:left-[70%] lg:top-10 lg:rounded-lg -top-8 w-full left-0 lg:gap-7">
            <li
              onClick={() => setDataBy("man-distance")}
              className="text-slate-100 cursor-pointer group flex flex-col items-center justify-center gap-3 scale-90"
            >
              <Image
                className="fill-slate-100 group-hover:fill-slate-400"
                src={"/svg/distance-biking.svg"}
                alt="distance biking icon"
                width={30}
                height={30}
              />
              <span className="capitalize font-normal text-xs group-hover:text-slate-400 text-center">
                man distance
              </span>
            </li>
            <li
              onClick={() => setDataBy("woman-distance")}
              className="text-slate-100 cursor-pointer group flex flex-col items-center justify-center gap-3 scale-90"
            >
              <Image
                className="fill-slate-100 group-hover:fill-slate-400"
                src={"/svg/distance-biking.svg"}
                alt="distance biking icon"
                width={30}
                height={30}
              />
              <span className="capitalize font-normal text-xs group-hover:text-slate-400 text-center">
                woman distance
              </span>
            </li>
            <li
              onClick={() => setDataBy("man-elevation")}
              className="text-slate-100 cursor-pointer group flex flex-col items-center justify-center gap-3 scale-90"
            >
              <Image
                className="fill-slate-100 group-hover:fill-slate-400"
                src={"/svg/elevation-biking.svg"}
                alt="elevation biking icon"
                width={30}
                height={30}
              />
              <span className="capitalize font-normal text-xs group-hover:text-slate-400 text-center">
                man elevation
              </span>
            </li>
            <li
              onClick={() => setDataBy("woman-elevation")}
              className="text-slate-100 cursor-pointer group flex flex-col items-center justify-center gap-3 scale-90"
            >
              <Image
                className="fill-slate-100 group-hover:fill-slate-400"
                src={"/svg/elevation-biking.svg"}
                alt="elevation biking icon"
                width={30}
                height={30}
              />
              <span className="capitalize font-normal text-xs group-hover:text-slate-400 text-center">
                woman elevation
              </span>
            </li>
          </ul>
        </div>

        <section id="main-dashboard" className="py-5 mt-12 max-h-[100px]">
          <h1 className="hidden lg:block text-[#323232] font-semibold text-2xl capitalize mt-1">
            dashboard
          </h1>
          <div
            id="wrapper-table"
            className="mt-4 max-h-[60dvh] 2xl:max-h-[68dvh] overflow-y-auto overflow-x-auto"
          >
            <table className="w-full border-collapse rounded-t-md">
              <thead>
                <tr>
                  <th className="2xl:p-4 p-3 rounded-tl-lg bg-[#323232] sticky top-0 z-20 font-normal capitalize text-center">
                    no
                  </th>
                  <th className="2xl:p-4 p-3 bg-[#323232] sticky top-0 z-20 font-normal capitalize text-left">
                    medaler
                  </th>
                  {currentType == "man-distance" ||
                  currentType == "woman-distance" ? (
                    <th className="2xl:p-4 p-3 bg-[#323232] sticky top-0 z-20 font-normal capitalize text-center">
                      distance
                    </th>
                  ) : currentType == "man-elevation" ||
                    currentType == "woman-elevation" ? (
                    <th className="2xl:p-4 p-3 bg-[#323232] sticky top-0 z-20 font-normal capitalize text-center">
                      elevation
                    </th>
                  ) : (
                    <th className="2xl:p-4 p-3 bg-[#323232] sticky top-0 z-20 font-normal capitalize text-center">
                      elevation
                    </th>
                  )}

                  <th className="2xl:p-4 p-3 bg-[#323232] sticky top-0 z-20 font-normal capitalize text-center">
                    kota
                  </th>
                  <th className="2xl:p-4 p-3 px-5  rounded-tr-lg bg-[#323232] sticky top-0 z-20 font-normal capitalize text-center">
                    actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {currentRecords.length > 0 &&
                  currentRecords.map((data, index) => (
                    <TableBodyFragment
                      currentType={currentType}
                      key={data.id}
                      whatIsBgColour={index + 1}
                      profile={data.profile}
                      average={data.average}
                      elevation={data.elevation}
                      isEdit={data.isEdit}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </section>
        <div className="absolute right-0 flex items-center justify-center gap-5 bottom-0 2xl:bottom-3 text-slate-100"></div>
      </main>
    </>
  );
};

export default DashboardPage;
