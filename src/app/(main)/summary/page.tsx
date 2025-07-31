import SummaryContainer from "@/app/(main)/summary/SummaryContainer";
import { getUnChecked } from "@/app/actions/summary/getUnCheckedAction";

interface Props {
  searchParams: {
    studentId?: string;
  };
}
export default async function page({ searchParams }: Props) {
  const { studentId } = searchParams;
  console.log("studentId", studentId);

  const unCheckedList = await getUnChecked({ studentId: studentId as string });
  return <SummaryContainer unCheckedList={unCheckedList} />;
}
