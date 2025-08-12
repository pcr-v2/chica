import SummaryContainer from "@/app/(main)/summary/SummaryContainer";
import { getStudentInfo } from "@/app/actions/student/getStudentInfoAction";
import { getUnChecked } from "@/app/actions/summary/getUnCheckedAction";

interface ISearchParams {
  searchParams: Promise<{ studentId?: string }>;
}
export default async function page({ searchParams }: ISearchParams) {
  const params = await searchParams;

  const unCheckedList = await getUnChecked({
    studentId: params.studentId as string,
  });

  const student = await getStudentInfo({
    studentId: params.studentId as string,
  });

  return (
    <SummaryContainer unCheckedList={unCheckedList} student={student?.data} />
  );
}
