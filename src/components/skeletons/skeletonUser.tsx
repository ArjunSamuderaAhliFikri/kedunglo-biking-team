const SkeletonUser = (): JSX.Element => {
  return (
    <tr className="bg-slate-200">
      <td className="w-fit">
        <div className="size-7 rounded-md bg-slate-400 mx-auto animate-pulse"></div>
      </td>

      <td className="p-3 flex justify-start items-center gap-3 lg:gap-5 text-left lg:w-fit w-56">
        <div className="size-8 bg-slate-400 rounded-full animate-pulse"></div>
        <div className="flex flex-col justify-center items-start gap-1 w-fit">
          <div className="lg:w-36 w-32 h-3 bg-slate-400 rounded-sm animate-pulse"></div>
          <h4 className="bg-slate-400 h-2 lg:w-20 w-16 animate-pulse"></h4>
        </div>
      </td>

      <td className="lg:px-0 px-2">
        <div className="mx-auto lg:w-20 w-16 h-3 bg-slate-400 rounded-sm animate-pulse"></div>
      </td>

      <td className="lg:px-0 px-2">
        <div className="mx-auto lg:w-20 w-16 h-3 bg-slate-400 rounded-sm animate-pulse"></div>
      </td>

      <td className="lg:px-0 px-2">
        <div className="mx-auto lg:w-20 w-16 h-4 bg-slate-400 rounded-sm animate-pulse"></div>
      </td>
    </tr>
  );
};

export default SkeletonUser;
