import React, { useState } from "react";
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
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/search?value=${searchValue}`);
  };

  const onSearchChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSearchValue(event.target.value);
  };

  return (
    <PageTemplate>
      <CoverContainer>
        <CoverImage src={`${BASE_URL}/assets/images/gt7_cover.png`} />
        <CoverSearchContainer onSubmit={onSubmit}>
          <CoverText color="primary">Find your next game.</CoverText>
          <CoverSearch
            value={searchValue}
            onChange={onSearchChange}
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
