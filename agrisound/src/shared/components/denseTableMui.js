import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DenseTable({ width, size, names, relatedArray }) {
  console.log(relatedArray[0]);

  function createData(name, ...relatedArray) {
    return { name, ...relatedArray };
  }

  let rows = names.map((name, index) => {
    return createData(name, relatedArray[index]);
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: width }} size={size} aria-label="a dense table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <b>{row.name}</b>
              </TableCell>
              <TableCell >{relatedArray[0]}</TableCell>
              <TableCell >{relatedArray[1]}</TableCell>
              <TableCell >{relatedArray[2]}</TableCell>
              {relatedArray[2].map(({ tempHigh, tempLow }, index)=>{<TableCell >{tempHigh/tempLow}</TableCell>})}
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
