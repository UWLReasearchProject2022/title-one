import React from "react";
import { PageTemplate, Platforms, Categories } from "components";
import {
  CoverContainer,
  CoverImage,
  CoverSearchContainer,
  CoverText,
  CoverSearch,
} from "./Home.styles";
import { BASE_URL } from "utils/config";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/search");
  };

  return (
    <PageTemplate>
      <CoverContainer>
        <CoverImage src={`${BASE_URL}/assets/images/gt7_cover.png`} />
        <CoverSearchContainer onSubmit={onSubmit}>
          <CoverText color="primary">Find your next game.</CoverText>
          <CoverSearch
            placeholder="Have something in mind?"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon htmlColor="black" />
                </InputAdornment>
              ),
              style: {
                height: "2rem",
                fontSize: "14px",
                color: "black",
                borderRadius: "25rem",
                backgroundColor: "#CCCCCC",
              },
            }}
          />
        </CoverSearchContainer>
      </CoverContainer>
      <Platforms />
      <Categories />
    </PageTemplate>
  );
};
