import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DenseTable({
  width,
  size,
  names,
  relatedArray
}: any) {

  function createData(name: any, ...relatedArray: any[]) {
    return { name, ...relatedArray };
  }

  let rows = names.map((name: any, index: any) => {
    return createData(name, relatedArray[index]);
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: width }} size={size} aria-label="a dense table">
        <TableBody>
          {rows.map((row: any) => <TableRow
            key={row.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <b>{row.name}</b>
            </TableCell>
            {console.log(relatedArray)}
              {relatedArray[0].map((value:number,index:number):JSX.Element=>{
                return <TableCell key={index}>{value}</TableCell>
              })}
          </TableRow>)}
        </TableBody>
      </Table>
      
    </TableContainer>
    
  );
}
