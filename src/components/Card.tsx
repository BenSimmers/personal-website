import React from "react";

interface CardProps<T> {
  item: T;
  renderTitle: (item: T) => React.ReactNode;
  renderDescription: (item: T) => React.ReactNode;
  renderLink: (item: T) => React.ReactNode;
}

const Card = <T,>({
  item,
  renderTitle,
  renderDescription,
  renderLink,
}: CardProps<T>) => {
  return (
    <li>
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-6 w-6 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <div className="ml-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {renderTitle(item)}
          </h3>
          <p className="text-base leading-6 text-gray-500">
            {renderDescription(item)}
          </p>
          {renderLink(item)}
          <div className="mb-10" />
        </div>
      </div>
    </li>
  );
};

export default Card;
