import Image from "next/image";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupIcon from "@mui/icons-material/Group";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { useRef, useState } from "react";

const SidebarLayout = (): JSX.Element => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  const slideSidebarRef = useRef<HTMLUListElement | null>(null);

  // event handler
  const handleSlideSidebar = (): void => {
    slideSidebarRef.current?.classList.toggle("translate-x-52");

    // like a toggle
    setIsShowMenu((previosState: boolean) => !previosState);
  };

  return (
    <>
      <aside className="relative lg:static overflow-hidden bg-[#f5f5f5] rounded-2xl lg:h-[90dvh] h-52">
        <div className="flex justify-between items-center p-4 lg:hidden">
          <div className="">
            <h1 className="text-slate-900 capitalize font-semibold text-xl">
              Dashboard <br />{" "}
              <span className="text-slate-900 text-sm capitalize font-normal">
                kedunglo biking team
              </span>
            </h1>
          </div>

          {/* hamburger menu section */}
          <div>
            <div
              onClick={() => handleSlideSidebar()}
              className="flex flex-col justify-between items-center bg-transparent h-5 w-8 cursor-pointer"
            >
              <span
                className={`${
                  isShowMenu && "-rotate-45 -translate-y-[5.5px]"
                } origin-top-right w-full h-1 bg-slate-900 rounded-lg transition-all duration-300`}
              ></span>
              <span
                className={`${
                  isShowMenu && "scale-0"
                } w-full h-1 bg-slate-900 rounded-lg transition-all duration-300`}
              ></span>
              <span
                className={`${
                  isShowMenu && "rotate-45"
                } origin-bottom-right w-full h-1 bg-slate-900 rounded-lg transition-all duration-300`}
              ></span>
            </div>
          </div>
        </div>

        <div className="lg:block hidden relative w-full h-24 bg-gradient-to-b from-[#1E1E1E] from-50% to-[#000000]">
          <Image
            className="absolute -translate-x-1/2 rounded-full -bottom-7 left-1/2"
            src="/images/kedunglo-biking-team.jpg"
            alt="kedunglo-biking-team"
            width={90}
            height={90}
          />
        </div>
        {/* profile user */}
        <div
          className={`${
            isShowMenu ? "w-1/2" : "w-full"
          } lg:w-full h-[50dvh] 2xl:h-[60dvh] mt-0 2xl:mt-20 lg:px-10 flex flex-col justify-start items-center gap-5 transition-all duration-300`}
        >
          <div className="flex lg:flex-col lg:mt-12 justify-start items-center lg:gap-5 gap-2">
            <Image
              className={`${
                isShowMenu ? "scale-[0.62]" : "scale-75"
              } rounded-full cursor-pointer lg:scale-100 transition-all duration-300`}
              src={"/images/profile-user.jpg"}
              alt="profile user"
              width={70}
              height={70}
            />

            <div className="text-left lg:text-center capitalize">
              <h4 className="text-[#536878] lg:mb-1 capitalize font-normal text-xs 2xl:text-sm">
                hello, medalers!
              </h4>
              <h1 className="text-[#2A3439] capitalize font-medium text-sm lg:text-lg 2xl:text-xl">
                arjun samudera
              </h1>
            </div>
          </div>

          <div className="2xl:w-[90%] lg:w-full p-2 2xl:p-0 size-24 2xl:h-24 bg-slate-400/25 rounded-lg lg:flex hidden flex-col justify-center items-center gap-2">
            <p className="text-sm font-normal capitalize text-slate-500">
              your tagged :
            </p>
            <h2 className="2xl:text-md font-bold uppercase text-slate-900">
              #LGOLDKBT
            </h2>
          </div>

          <ul
            ref={slideSidebarRef}
            className="lg:static lg:translate-x-0 translate-x-52 absolute top-20 right-5 w-fit capitalize font-semibold text-slate-700 mt-2 2xl:mt-10 text-lg flex flex-col justify-start items-start gap-5 2xl:gap-6 lg:w-[90%] transition-all duration-300"
          >
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
