import { useRouter } from "next/router";

const DetailEvent = (): JSX.Element => {
  const { pathname } = useRouter();

  console.log(pathname);

  return (
    <>
      <div>hello dek!</div>
    </>
  );
};

export default DetailEvent;
