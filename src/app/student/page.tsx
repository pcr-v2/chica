"use client";

import { useParams } from "next/navigation";

import { SchoolAMock } from "./MockData";

export default function Student() {
  const params = useParams();

  console.log(params);

  return <div>asdf</div>;
}
