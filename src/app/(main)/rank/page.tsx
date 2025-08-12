import RankContainer from "@/app/(main)/rank/RankContainer";
import { getMe } from "@/app/actions/auth/getMe";

export default async function page() {
  const me = await getMe();

  return <RankContainer me={me} />;
}
