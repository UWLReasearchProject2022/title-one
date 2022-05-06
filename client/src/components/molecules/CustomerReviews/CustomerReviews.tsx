import React from "react";
import { TabComponentProps, ReviewSortAlgorithm } from "types";
import { useReviews } from "queries";
import { Loading, Error, RatingBreakdown, SortBy } from "components";
import {
  Container,
  ReviewsContainer,
  OverviewContainer,
  BreakdownContainer,
  CommentsContainer,
  UserDetails,
  UserText,
  RatingText,
  OverallRating,
  CommentContainer,
  CommentsText,
  StyledDivider,
  RatingContainer,
  DatesContainer,
  DateText,
  Header,
  Text,
} from "./CustomerReviews.styles";
import AccountIcon from "@mui/icons-material/AccountCircleSharp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { reviewSort, getSortAlgorithm } from "utils/sorting";

export const CustomerReviews: React.FunctionComponent<TabComponentProps> = ({
  product,
  reviewsSortBy,
  reviewsSetSortBy,
}) => {
  const { reviews, isLoading, error } = useReviews(product.id);

  const sortReviews = () => {
    return reviews?.sort(
      getSortAlgorithm(reviewSort, reviewsSortBy) as ReviewSortAlgorithm,
    );
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : reviews && !error && reviews?.length !== 0 ? (
        <Container>
          <Header>
            <Text>
              After purchasing a game, please add a review via your order
              history
            </Text>
            <SortBy
              sorts={reviewSort}
              sortBy={reviewsSortBy}
              setSortBy={reviewsSetSortBy}
            />
          </Header>
          {sortReviews()?.map((review, index) => (
            <div key={index}>
              <StyledDivider />
              <ReviewsContainer key={index}>
                <OverviewContainer>
                  <UserDetails>
                    <AccountIcon fontSize="large" />
                    <UserText>{review.name}</UserText>
                  </UserDetails>
                  <RatingContainer>
                    <OverallRating
                      readOnly
                      precision={0.5}
                      value={review.ratings.overall / 2}
                    />
                    <RatingText>{`${review.ratings.overall} out of 10`}</RatingText>
                  </RatingContainer>
                </OverviewContainer>
                <BreakdownContainer>
                  <RatingBreakdown ratings={review.ratings} />
                </BreakdownContainer>
                <CommentsContainer>
                  <CommentContainer>
                    <AddIcon htmlColor="#00B412" />
                    <CommentsText>{review.comments.positive}</CommentsText>
                  </CommentContainer>
                  <CommentContainer>
                    <RemoveIcon htmlColor="#C12A2A" />
                    <CommentsText>{review.comments.negative}</CommentsText>
                  </CommentContainer>
                </CommentsContainer>
                <DatesContainer>
                  <DateText
                    style={{ padding: 0 }}
                  >{`Date of review: ${review.date}`}</DateText>
                  <DateText>{`Date of purchase: ${review.date}`}</DateText>
                </DatesContainer>
              </ReviewsContainer>
            </div>
          ))}
        </Container>
      ) : (
        <Error message="Failed to load customer reviews" />
      )}
    </>
  );
};
