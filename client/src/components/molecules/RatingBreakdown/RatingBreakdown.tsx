import React from "react";
import { Ratings } from "types";
import { Container, Text, LinearRating } from "./RatingBreakdown.styles";

type Props = {
  ratings: Ratings;
};

export const RatingBreakdown: React.FunctionComponent<Props> = ({
  ratings,
}) => {
  return (
    <Container>
      {(Object.keys(ratings) as (keyof Ratings)[]).map(
        (key) =>
          key !== "overall" && (
            <>
              <Text>{`${key.charAt(0).toUpperCase() + key.slice(1)} - ${ratings[
                key
              ].toFixed(1)}`}</Text>
              <LinearRating
                variant="determinate"
                value={(ratings[key] / 10) * 100}
              />
            </>
          ),
      )}
    </Container>
  );
};
