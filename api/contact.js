export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    console.log("Received data:", { name, email, message });
    res.status(200).json({ message: `Thank you for your interest, ${name}` });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
