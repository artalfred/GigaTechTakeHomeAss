import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Grid, Link, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableData from "./TableData";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Charts() {
  return (
    <Grid container spacing={3} mt={10}>
      {/* CHARTS */}
      <Grid item xs={6} md={8}>
        <Item style={{ padding: "1rem" }}>
          <Typography
            variant="h6"
            fontWeight="600"
            align="start"
            color="primary"
          >
            Today
          </Typography>
          <div style={{ marginTop: "-4rem", marginLeft: "2rem" }}>
            <LineChart
              xAxis={[
                {
                  data: [0, 3, 6, 9, 12, 15], // Adjusted x-axis data to match the series length
                },
              ]}
              yAxis={[
                {
                  data: [0, 600, 1200, 1800, 2400],
                },
              ]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={700}
              height={300}
            />
          </div>
        </Item>
      </Grid>

      {/* DEPOSITS */}
      <Grid item xs={6} md={4}>
        <Item style={{ padding: "1rem", height: "100%", position: "relative" }}>
          <Typography
            variant="h6"
            fontWeight="600"
            align="start"
            color="primary"
          >
            Recent Deposits
          </Typography>
          <Typography
            mt={1}
            variant="h4"
            fontWeight="400"
            align="start"
            color="#000000"
          >
            $3,024.00
          </Typography>
          <Typography
            mt={1}
            variant="body2"
            fontWeight="400"
            align="start"
            color="#999"
          >
            on march 15, 2019
          </Typography>
          <div style={{ position: "absolute", bottom: "14px" }}>
            <Link className="flex" style={{ cursor: "pointer" }}>
              View balance
            </Link>
          </div>
        </Item>
      </Grid>

      {/* TABLE */}
      <Grid item xs={6} md={12}>
        <Item>
          <TableData />
        </Item>
      </Grid>
    </Grid>
  );
}
