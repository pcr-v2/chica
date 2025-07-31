import SummaryContainer from "@/app/(main)/summary/SummaryContainer";
import { getStudentSummary } from "@/app/actions/student/getStudentAction";
import { getUnChecked } from "@/app/actions/summary/getUnCheckedAction";

interface IProps {
  searchParams: {
    studentId?: string;
  };
}

export default async function page(props: IProps) {
  const { studentId } = props.searchParams;
  console.log("studentId", studentId);

  const unCheckedList = await getUnChecked({ studentId: studentId as string });
  return <SummaryContainer unCheckedList={unCheckedList} />;
}
