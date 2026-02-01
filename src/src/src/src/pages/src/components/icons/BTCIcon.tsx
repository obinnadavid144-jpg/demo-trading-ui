import React from "react";

export default function BTCIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#F7931A" />
      <path
        d="M20 14C20 12.3431 18.6569 11 17 11H15V13H16C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15H15V17H16C16.5523 17 17 17.4477 17 18C17 18.5523 16.5523 19 16 19H15V21H17C18.6569 21 20 19.6569 20 18V14Z"
        fill="white"
      />
    </svg>
  );
}
