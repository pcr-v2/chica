import { motion } from "framer-motion";
import * as React from "react";

interface Props {
  fillColor?: string;
  strokeColor?: string;
}

export default function SelectTeeth({
  fillColor = "#FAFAFA",
  strokeColor = "#D5D7DB",
}: Props) {
  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
    >
      <motion.path
        d="M36.7113 120C10.812 120 2.12438 77.9874 0.361542 44.8865C-0.465553 29.3561 9.06779 15.5424 23.1299 8.89923C45.8099 -1.81506 72.0641 -1.96497 94.8649 8.48961L96.7965 9.37529C110.779 15.7865 120.594 28.9862 119.625 44.3378C117.59 76.5744 107.135 120 84.6434 120C67.2624 120 60.7262 107.671 59.2155 99.7789C59.139 99.3797 58.4324 99.3403 58.3183 99.7305C54.2821 113.529 44.1605 120 36.7113 120Z"
        fill={fillColor}
        animate={{ fill: fillColor }}
        transition={{ duration: 0.3, ease: "linear" }}
      />
      <motion.path
        d="M40 96H80"
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinecap="round"
        animate={{ stroke: strokeColor }}
        transition={{ duration: 0.3, ease: "linear" }}
      />
    </motion.svg>
  );
}
