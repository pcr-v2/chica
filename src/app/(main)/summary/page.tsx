import SummaryContainer from "@/app/(main)/summary/SummaryContainer";
import { getUnChecked } from "@/app/actions/summary/getUnCheckedAction";

export default async function Page({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const studentId =
    typeof searchParams?.studentId === "string"
      ? searchParams.studentId
      : undefined;
  const unCheckedList = await getUnChecked({ studentId: studentId ?? "" });

  return <SummaryContainer unCheckedList={unCheckedList} />;
}
