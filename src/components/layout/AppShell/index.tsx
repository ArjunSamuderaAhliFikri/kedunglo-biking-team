import { outfit } from "@/pages/fonts/outfit";
import SidebarLayout from "../Sidebar";
import { useRouter } from "next/router";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps): JSX.Element => {
  const hideBgKBT = ["/ListEventPage", "/ListEventPage/[DetailEvent]"];

  const { pathname } = useRouter();
  console.log(pathname);

  return (
    <div
      className={`relative ${
        hideBgKBT.includes(pathname)
          ? "bg-transparent"
          : "bg-[url(/images/kedunglo-biking-team.jpg)] bg-center bg-cover bg-no-repeat"
      } w-full h-[10.5dvh] ${outfit.className}`}
    >
      <TemplateLayout>
        {pathname != "/ListEventPage/[DetailEvent]" && <SidebarLayout />}
        {props.children}
      </TemplateLayout>
    </div>
  );
};

function TemplateLayout(props: AppShellProps): JSX.Element {
  const { pathname } = useRouter();
  return (
    <div
      className={`${
        pathname != "/ListEventPage/[DetailEvent]" &&
        "grid 2xl:grid-cols-app-grid-desktop grid-cols-app-grid-laptop gap-5 absolute w-[95%] h-[90dvh] top-1/2 left-1/2 -translate-x-1/2"
      }`}
    >
      {props.children}
    </div>
  );
}

export default AppShell;
