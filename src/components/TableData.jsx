import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link, Typography } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ****3719",
    "$312.44"
  ),
  createData(
    "16 Mar, 2019",
    "Paul McCartney",
    "London, Uk",
    "VISA****2574",
    "$866.99"
  ),
  createData(
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC****1253",
    "$100.81"
  ),
  createData(
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX****2000",
    "$654.39"
  ),
  createData(
    "16 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA***5919",
    "212.79"
  ),
];

export default function TableData() {
  return (
    <TableContainer className="p-3">
      <Typography
        variant="h6"
        fontWeight="600"
        align="start"
        color="primary"
        style={{ marginBottom: ".5rem" }}
      >
        Recent Orders
      </Typography>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "600" }}>Date</TableCell>
            <TableCell align="start" style={{ fontWeight: "600" }}>
              Name
            </TableCell>
            <TableCell align="start" style={{ fontWeight: "600" }}>
              Ship To
            </TableCell>
            <TableCell align="start" style={{ fontWeight: "600" }}>
              Payment Method
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "600" }}>
              Sale method
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="start">{row.calories}</TableCell>
              <TableCell align="start">{row.fat}</TableCell>
              <TableCell align="start">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div style={{ marginTop: ".5rem", cursor: "pointer" }}>
        <Link className="flex">See more orders</Link>
      </div>
    </TableContainer>
  );
}
