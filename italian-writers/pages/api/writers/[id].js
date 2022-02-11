import { writers } from "../../../data";

export default function handler(req, res) {
  const {id} = req.query;

  const writer = writers.find(writer => writer.id === Number(id))
  res.status(200).json(writer)
}