import { redirect } from "next/navigation";

export default function page() {
  throw redirect("/home");
}
