import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import React from "react";

type TableBodyProps = {
  currentType: string;
  whatIsBgColour: number;
  profile: {
    name: string;
    city: string;
    age: number;
    tagger: string;
    imageProfile: string;
  };

  average: number;
  elevation: number;
  isEdit: boolean;
};

const TableBodyFragment = (props: TableBodyProps): JSX.Element => {
  return (
    <tr
      className={`${
        props.whatIsBgColour == 1
          ? "bg-gradient-to-l from-[#FFD700] to-[#FF5800] to-95%"
          : props.whatIsBgColour == 2
          ? "bg-gradient-to-l from-[#557C93] to-[#08203E] to-95%"
          : props.whatIsBgColour > 3
          ? props.whatIsBgColour % 2 == 0
            ? "bg-slate-400"
            : "bg-[#f5f5f5]"
          : "bg-gradient-to-l from-[#D17C3A] to-[#83491C] to-95%"
      } mt-5 border-t-slate-50 border`}
    >
      <td
        className={`text-center font-normal lg:font-semibold ${
          props.whatIsBgColour > 3 && props.whatIsBgColour % 2 == 1
            ? "text-slate-600"
            : "text-[#f5f5f5]"
        } text-sm lg:text-lg p-2`}
      >
        {props.whatIsBgColour}
      </td>

      <td className="p-3 flex justify-start items-center gap-3 lg:gap-5 text-left lg:w-fit w-56">
        <Image
          className="rounded-full scale-90 lg:scale-100"
          src={props.profile.imageProfile}
          alt={props.profile.name}
          width={40}
          height={40}
        />
        <div className="flex flex-col justify-center items-start lg:gap-[2px] gap-1">
          <h2
            className={`font-normal text-sm lg:font-semibold ${
              props.whatIsBgColour > 3 && props.whatIsBgColour % 2 == 1
                ? "text-slate-600"
                : "text-[#f5f5f5]"
            }  capitalize`}
          >
            {props.profile.name}
          </h2>
          <h4
            className={`text-xs ${
              props.whatIsBgColour > 3 && props.whatIsBgColour % 2 == 1
                ? "text-slate-400"
                : "text-[#d9d9d9]"
            }  uppercase font-normal`}
          >
            # {props.profile.tagger}
          </h4>
        </div>
      </td>

      <td
        className={`font-semibold ${
          props.whatIsBgColour > 3 && props.whatIsBgColour % 2 == 1
            ? "text-slate-700"
            : "text-slate-200"
        } p-2 text-center text-sm lg:text-normal`}
      >
        {props.currentType == "man-distance" ||
        props.currentType == "woman-distance"
          ? `${props.average} Km`
          : `${props.elevation} M`}
      </td>

      <td
        className={`uppercase font-semibold ${
          props.whatIsBgColour > 3 && props.whatIsBgColour % 2 == 1
            ? "text-slate-600"
            : "text-[#f5f5f5]"
        } p-2 text-center text-xs lg:text-normal`}
      >
        {props.profile.city}
      </td>

      <td className="px-4">
        <button
          className="bg-orange-600 px-2 py-2 w-full rounded-md text-slate-100 capitalize font-normal lg:font-semibold transition-all duration-200 hover:bg-orange-800"
          type="button"
        >
          edit
        </button>
        {/* <div className="absolute top-0 left-0 2xl:translate-x-3/4 translate-x-1/4 translate-y-[45%]">
          <button className="bg-yellow-600 capitalize rounded-md text-slate-100 font-semibold 2xl:size-10 size-9">
            <BorderColorIcon />
          </button>
          <button className="bg-red-600 capitalize rounded-md ml-3 text-slate-100 font-semibold 2xl:size-10 size-9">
            <DeleteIcon />
          </button>
        </div> */}
      </td>
    </tr>
  );
};

type TableRowProps = {
  setBackground: number;
  children: React.ReactNode;
};

function TableRow(props: TableRowProps): JSX.Element {
  if (props.setBackground == 1) {
    return (
      <tr className="bg-gradient-to-l from-[#FFD700] to-[#FF5800] to-95%">
        {props.children}{" "}
      </tr>
    );
  } else if (props.setBackground == 2) {
    return (
      <tr className="bg-gradient-to-l from-[#557C93] to-[#08203E] to-95%">
        {props.children}{" "}
      </tr>
    );
  } else if (props.setBackground > 3) {
    if (props.setBackground % 2 == 0) {
      return <tr className="bg-slate-300">{props.children} </tr>;
    } else {
      return <tr className="bg-[#f5f5f5]">{props.children}</tr>;
    }
  } else {
    return (
      <tr className="bg-gradient-to-l from-[#D17C3A] to-[#83491C] to-95%">
        {props.children}{" "}
      </tr>
    );
  }
  // return props.setBackground == 1 ? (
  //   <tr className="bg-gradient-to-l from-[#FFD700] to-[#FF5800] to-95%">
  //     {props.children}
  //   </tr>
  // ) : props.setBackground == 2 ? (
  //   <tr className="bg-gradient-to-l from-[#557C93] to-[#08203E] to-95%">
  //     {props.children}
  //   </tr>
  // ) : props.setBackground > 3 ? (
  //   props.setBackground % 2 == 0 ? (
  //     <tr className="bg-slate-400">{props.children}</tr>
  //   ) : (
  //     <tr className="bg-[#f5f5f5]">{props.children}</tr>
  //   )
  // ) : (
  //   <tr className="bg-gradient-to-l from-[#D17C3A] to-[#83491C] to-95%">
  //     {props.children}
  //   </tr>
  // );
}

export default TableBodyFragment;
