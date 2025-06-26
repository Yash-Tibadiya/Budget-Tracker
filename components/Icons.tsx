import { SVGProps } from "react";

export const SvgPiggyBank = (_props_: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke h-11 w-11 stroke-amber-500 stroke-[1.5]"
    >
      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"></path>
      <path d="M2 9v1c0 1.1.9 2 2 2h1"></path>
      <path d="M16 11h0"></path>
    </svg>
  );
};

export const SvgArrow = (_props_: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="w-8 h-8 justify-end group-hover:rotate-90 text-gray-50 ease-linear duration-300 rounded-full p-2 rotate-45"
      viewBox="0 0 16 19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
        className="fill-gray-800 group-hover:fill-white transition-colors duration-700"
      ></path>
    </svg>
  );
};

