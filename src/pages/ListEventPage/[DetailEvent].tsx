import { useRouter } from "next/router";
import { fetchDetailData } from "@/service/fetchDetailData";
import { useEffect, useState } from "react";
import Image from "next/image";

const DetailEvent = (): JSX.Element => {
  const [dataDetailEvent, setDataDetailEvent] = useState<any>({});
  const { query } = useRouter();

  useEffect(() => {
    async function handleFilterData() {
      const fetchingData = await fetch("/api/event");
      const response = await fetchingData.json();

      const result = response.find((data: any) => data.id == query.DetailEvent);

      setDataDetailEvent(result);
    }

    handleFilterData();
  }, [query]);

  return (
    <>
      <section className="w-full h-52 bg-slate-400 absolute">
        <div className="container w-full h-full relative bg-emerald-400 px-4">
          <div className="flex absolute left-1/2 -bottom-40 -translate-x-1/2  w-[85%] bg-slate-100 rounded-sm overflow-hidden">
            <Image
              src={"/images/bikes.jpg"}
              alt="hero image"
              width={450}
              height={300}
            />

            <div className="px-7 py-8">
              <h1 className="text-slate-700 font-semibold text-3xl capitalize">
                medal safar
              </h1>

              <p className="text-slate-500 font-normal text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailEvent;
