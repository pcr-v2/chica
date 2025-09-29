"use client";

import NetworkErrorPage from "@/app/network-error/page";

interface IProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError(props: IProps) {
  const { error, reset } = props;

  return <NetworkErrorPage />;
}
