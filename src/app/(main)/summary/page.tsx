import SummaryContainer from "@/app/(main)/summary/SummaryContainer";
import { getUnChecked } from "@/app/actions/summary/getUnCheckedAction";

interface ISearchParams {
  searchParams: Promise<{ studentId?: string }>;
}
export default async function page({ searchParams }: ISearchParams) {
  //  searchParams;

  const params = await searchParams;

  const unCheckedList = await getUnChecked({
    studentId: params.studentId as string,
  });
  return <SummaryContainer unCheckedList={unCheckedList} />;
}
