import SummaryContainer from "@/app/(main)/summary/SummaryContainer";
import { getUnChecked } from "@/app/actions/summary/getUnCheckedAction";

interface PageProps {
  searchParams?: {
    studentId?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const studentId = searchParams?.studentId;
  const unCheckedList = await getUnChecked({ studentId: studentId ?? "" });

  return <SummaryContainer unCheckedList={unCheckedList} />;
}
