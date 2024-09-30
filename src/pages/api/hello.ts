// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { dataMedalers } from "@/service/data-dummy";

type Data = {
  id: number;
  profile: {
    name: string;
    city: string;
    age: number;
    tagger: string;
    imageProfile: string;
  };
  average?: number;
  elevation?: number;
  isEdit: boolean;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(dataMedalers);
}
