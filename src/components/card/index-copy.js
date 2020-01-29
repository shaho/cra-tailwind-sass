import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

const PROPERTY = {
  imageUrl:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  baths: 2,
  title: "Modern executive home in the heart of historic Los Angles",
  priceInCents: 190000,
  formattedPrice: "$1,900.00",
  reviewCount: 34,
  rating: 4,
};

const Card = () => {
  const {
    imageUrl,
    imageAlt,
    beds,
    baths,
    title,
    formattedPrice,
    reviewCount,
    rating,
  } = PROPERTY;
  return (
    <div
      css={tw`bg-gray-200 min-h-screen p-8 flex items-center justify-center`}
    >
      <div css={tw`bg-white border rounded-lg overflow-hidden`}>
        <img src={imageUrl} alt={imageAlt} />

        <div css={tw`p-6`}>
          <div css={tw`flex items-baseline`}>
            <span
              css={tw`inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide`}
            >
              New
            </span>
            <div
              css={tw`ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide`}
            >
              {beds} beds &bull; {baths} baths
            </div>
          </div>

          <h4 css={tw`mt-1 font-semibold text-lg leading-tight truncate`}>
            {title}
          </h4>

          <div css={tw`mt-1`}>
            {formattedPrice}
            <span css={tw`text-gray-600 text-sm`}> / wk</span>
          </div>

          <div css={tw`mt-2 flex items-center`}>
            {[...Array(5).keys()].map((i) => {
              return (
                <svg
                  key={i}
                  css={
                    i < rating
                      ? tw`h-4 w-4 fill-current text-teal-500`
                      : tw`h-4 w-4 fill-current text-gray-300`
                  }
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.133 20.333c-1.147.628-2.488-.387-2.269-1.718l.739-4.488-3.13-3.178c-.927-.943-.415-2.585.867-2.78l4.324-.654 1.934-4.083a1.536 1.536 0 0 1 2.804 0l1.934 4.083 4.324.655c1.282.194 1.794 1.836.866 2.78l-3.129 3.177.739 4.488c.219 1.331-1.122 2.346-2.269 1.718L12 18.214l-3.867 2.119z"
                    fillRule="evenodd"
                  />
                </svg>
              );
            })}

            <span css={tw`text-gray-600 text-sm ml-2`}>
              {reviewCount} reviews
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
