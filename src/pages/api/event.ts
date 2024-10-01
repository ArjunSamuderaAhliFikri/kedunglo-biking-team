// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    id: 1,
    title: "Medal Safar",
    qtyParticipan: 100,
    date: "17-04-2026",
    description:
      "lorem sit amert dolor hello word lorem whow to shake and then anything usually testing is posibbly undefined and program",
    participans: [
      {
        name: "Arjun Samudera Ahli Fikri",
        age: 18,
        city: "Kota Kediri",
        email: "arjunsaf717@gmail.com",
        numberPhone: 1234344343,
        statusMedalers: "LGOLDKBT",
      },
    ],
  });
}
