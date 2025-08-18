import HomeContainer from "@/app/(main)/home/HomeContainer";
import { getMe } from "@/app/actions/auth/getMe";
import SigninContainer from "@/app/signin/SigninContainer";

export default async function page() {
  const me = await getMe();
  // console.log("me", me);

  if (me.code !== "SUCCESS") {
    return <SigninContainer />;
  }

  return <HomeContainer me={me} />;
}
