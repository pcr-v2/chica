import HomeContainer from "@/app/(main)/home/HomeContainer";
import { getMe } from "@/app/actions/auth/getMe";

export default async function page() {
  const me = await getMe();
  return <HomeContainer me={me} />;
}
