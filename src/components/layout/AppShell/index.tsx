import { outfit } from "@/pages/fonts/outfit";
import SidebarLayout from "../Sidebar";
import { useRouter } from "next/router";
import TicketUserContextLayout from "@/context/ticketUserContext";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps): JSX.Element => {
  const hideBgKBT = ["/ListEventPage", "/ListEventPage/[DetailEvent]"];

  const { pathname } = useRouter();

  return (
    <div
      className={`relative ${
        hideBgKBT.includes(pathname) ? "bg-transparent" : "bg-slate-900"
      } w-full h-[10.5dvh] ${outfit.className}`}
    >
      <TemplateLayout>
        <TicketUserContextLayout>
          {pathname != "/ListEventPage/[DetailEvent]" && <SidebarLayout />}
          {props.children}
        </TicketUserContextLayout>
      </TemplateLayout>
    </div>
  );
};

// bg-[url(/images/kedunglo-biking-team.jpg)] bg-center bg-cover bg-no-repeat"

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
