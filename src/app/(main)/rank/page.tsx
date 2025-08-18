import RankContainer from "@/app/(main)/rank/RankContainer";
import { getMe } from "@/app/actions/auth/getMe";
import SigninContainer from "@/app/signin/SigninContainer";

export default async function page() {
  const me = await getMe();

  if (me.code !== "SUCCESS") {
    return <SigninContainer />;
  }

  return <RankContainer me={me} />;
}
