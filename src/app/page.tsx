import { ConnectionToDatabase } from "@/lib/mongoose";

export default function Home() {
  const connect = ConnectionToDatabase();
  return <div>Hello</div>;
}
