import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    const { name } = req.body;

    console.log(`Thank you for your interest, ${name}`);

    res.status(200).json({ message: `Thank you for your interest, ${name}` });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
