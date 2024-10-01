import TableBodyFragment from "@/components/fragments/TableBody";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelectedGender } from "@/hooks/useSelectedGender";
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

  const selectedMan = useSelectedGender();
  const selectedWoman = useSelectedGender();

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
          <div className="absolute right-0 flex items-center justify-around gap-5 h-20 px-2 py-4 rounded-md bg-slate-900 -bottom-15">
            <button
              onClick={() => setDataBy("man-distance")}
              className="px-4 py-3 rounded-md bg-slate-700 text-slate-100"
            >
              man distance
            </button>
            <button
              onClick={() => setDataBy("woman-distance")}
              className="px-4 py-3 rounded-md bg-slate-700 text-slate-100"
            >
              woman distance
            </button>
            <button
              onClick={() => setDataBy("man-elevation")}
              className="px-4 py-3 rounded-md bg-slate-700 text-slate-100"
            >
              man elevation
            </button>
            <button
              onClick={() => setDataBy("woman-elevation")}
              className="px-4 py-3 rounded-md bg-slate-700 text-slate-100"
            >
              woman elevation
            </button>
          </div>
        </div>

        <section id="main-dashboard" className="py-5 mt-12 max-h-[100px]">
          <h1 className="text-[#323232] font-semibold text-2xl capitalize mt-1">
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
