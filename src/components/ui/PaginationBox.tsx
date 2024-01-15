"use client";

import React, { useState, useEffect, useContext, ChangeEvent } from "react";

import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

import Container from "@mui/material/Container";
import { useRouter } from "next/navigation";

const PaginationBox = ({
  basePath,
  currentPage,
  count,
}: {
  basePath: string;
  currentPage: number;
  count: number;
}) => {
  const [input, setInput] = useState(0);
  const router = useRouter();

  const handleChange = (event: ChangeEvent<unknown>, page: number) => {

    if (!isNaN(page)) {
      let newUrl;

      if (basePath.trim() === "") {
        newUrl = `${page}`;
      } else {
        newUrl = `${basePath}/${page}`;
      }

      router.push(newUrl);
    }
  };

  return (
    <Container>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          display: "inline-flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
        }}
      >
        <Pagination
          variant="outlined"
          shape="rounded"
          size="large"
          showFirstButton
          showLastButton
          page={currentPage}
          count={count}
          defaultPage={currentPage}
          siblingCount={1}
          boundaryCount={1}
          onChange={handleChange}
        />
      </Stack>
    </Container>
  );
};

export default PaginationBox;
