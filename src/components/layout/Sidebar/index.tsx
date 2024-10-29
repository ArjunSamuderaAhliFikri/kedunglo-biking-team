import Image from "next/image";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupIcon from "@mui/icons-material/Group";
import EventNoteIcon from "@mui/icons-material/EventNote";

const SidebarLayout = (): JSX.Element => {
  return (
    <>
      <aside className="overflow-y-auto bg-[#f5f5f5] rounded-2xl">
        <div className="relative w-full h-24 bg-gradient-to-b from-[#1E1E1E] from-50% to-[#000000]">
          <Image
            className="absolute -translate-x-1/2 rounded-full -bottom-7 left-1/2"
            src="/images/kedunglo-biking-team.jpg"
            alt="kedunglo-biking-team"
            width={90}
            height={90}
          />
        </div>

        {/* profile user */}
        <div className="h-[50dvh] 2xl:h-[60dvh] mt-14 2xl:mt-20 px-10 flex flex-col justify-start items-center gap-5">
          <Image
            className="rounded-full cursor-pointer"
            src={"/images/profile-user.jpg"}
            alt="profile user"
            width={75}
            height={75}
          />

          <div className="text-center capitalize">
            <h4 className="text-[#536878] mb-1 capitalize font-normal text-xs 2xl:text-sm">
              hello, medalers!
            </h4>
            <h1 className="text-[#2A3439] capitalize font-medium text-lg 2xl:text-xl">
              arjun samudera
            </h1>
          </div>

          <div className="2xl:w-[90%] p-2 2xl:p-0 size-24 2xl:h-24 bg-slate-400/25 rounded-lg flex flex-col justify-center items-center gap-2">
            <p className="text-sm font-normal capitalize text-slate-500">
              your tagged :
            </p>
            <h2 className="2xl:text-md font-bold uppercase text-slate-900">
              #LGOLDKBT
            </h2>
          </div>

          <ul className="capitalize font-semibold text-slate-700 mt-2 2xl:mt-10 text-lg flex flex-col justify-start items-start gap-5 2xl:gap-6 w-[90%]">
            <li className="transition-all duration-150 hover:text-slate-800 text-sm 2xl:text-md">
              <Link
                className="flex items-center justify-center gap-4"
                href={"/"}
              >
                <GroupIcon />
                list user
              </Link>
            </li>
            <li className="font-normal transition-all duration-150 hover:text-slate-800 text-slate-400 text-sm 2xl:text-md">
              <Link
                className="flex items-center justify-center gap-4"
                href={"/ListEventPage"}
              >
                <EventNoteIcon />
                list event
              </Link>
            </li>
          </ul>

          {/* logout button */}
          <Link
            className="flex items-center justify-center gap-3 px-4 py-2 2xl:px-8 2xl:py-3 mt-auto capitalize transition-all duration-150 rounded-md shadow-md text-sm 2xl:text-md bg-slate-100 text-slate-900 hover:bg-slate-600 hover:text-slate-100"
            href={"/"}
          >
            <LogoutIcon />
            logout
          </Link>
        </div>
      </aside>
    </>
  );
};

export default SidebarLayout;
