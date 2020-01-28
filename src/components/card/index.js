import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

const PROPERTY = {
  imageUrl:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  baths: 2,
  title: "Modern home in city center",
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
          <h4 css={tw`font-semibold text-lg`}>{title}</h4>

          <div>
            {beds} beds &bull; {baths} baths
          </div>

          <div>{formattedPrice} / wk</div>

          <div>
            {rating}/5 stars (based on {reviewCount} reviews)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
