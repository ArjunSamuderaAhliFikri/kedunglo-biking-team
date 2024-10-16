import { createContext, useState } from "react";
type LayoutContextProps = {
  children: React.ReactNode;
};

// memanfaatkan 'global state / context' untuk membangun fitur 'mengikuti event untuk user'
export const TicketUserContext = createContext<any | null>(null);

// membangun sebuah react komponen layout untuk mengelola 'state / variabel tiket untuk user mengikuti event'
const TicketUserContextLayout = (props: LayoutContextProps): JSX.Element => {
  // karena setiap user hanya memiliki 1 kesempatan saja dalam mengikuti event KBT pada jangka waktu tertentu
  // maka state akan dibuat dengan nilai awal 1
  const [ticketUser, setTicketUser] = useState<number>(1);

  return (
    <>
      <TicketUserContext.Provider value={{ ticketUser, setTicketUser }}>
        {props.children}
      </TicketUserContext.Provider>
    </>
  );
};

export default TicketUserContextLayout;
