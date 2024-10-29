// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { dataEvents } from "@/service/data-events";

type Data = {
  id: number;
  title: string;
  qtyParticipan: number;
  date: string;
  description: string;
  participans: {
    name: string;
    age: number;
    email: string;
    numberPhone: number;
    statusMedalers: string;
    imageProfile: string;
  }[];
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(dataEvents);
}
