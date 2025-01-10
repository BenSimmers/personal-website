import React from "react";
import { Link } from "react-router-dom";

export interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card: React.FunctionComponent<CardProps> = ({
  title,
  description,
  link,
}) => (
  <Link to={link}>
    <div className="border-2 border-gray-500 p-4 rounded-md bg-slate-100 hover:bg-slate-200 w-full min-h-full flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
      <a
        href={link}
        className="text-sm text-blue-500 hover:underline self-start"
      >
        View
      </a>
    </div>
  </Link>
);

export default Card;
