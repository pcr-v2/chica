"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Grade, SchoolAMock } from "../MockData";

export default function StudentGrade() {
  const params = useParams();

  const [studentData, setStudentData] = useState<Grade>();

  useEffect(() => {
    if (params.grade != "") {
      setStudentData(SchoolAMock[Number(params.grade)]);
    }
  }, [params]);

  console.log(studentData);

  //   console.log(params);

  //   const SchoolA: School = {
  //     1: {
  //       1: [
  //         {
  //           id: 1,
  //           name: "a studnet",
  //           gender: "male",
  //           isBrushed: false,
  //           height:'123cm',
  //           weight:'25kg'
  //         },
  //       ],
  //       2: [
  //         {
  //           id: 1,
  //           name: "a studnet",
  //           gender: "male",
  //           isBrushed: false,
  //           height:'123cm',
  //           weight:'25kg'
  //         },
  //       ],
  //     },
  //   };

  return <div>{params.grade} 학년 </div>;
}
