import {useEffect, useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import cookie from "cookie";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ListingTable(props) {
  const {rows} = props
  const [loggedIn, setLoggedIn] = useState(false)

  const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };

  useEffect(()=>{
    if(checkAuth()){
      setLoggedIn(true)
    }
  }, [])

  if(loggedIn) {
    return(
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Descriptions</TableCell>
            <TableCell align="right">Locations</TableCell>
            <TableCell align="right">Operating Hours</TableCell>
            <TableCell align="right">Delete</TableCell>
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
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.operating_hours}</TableCell>
              <TableCell align="right"><DeleteIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Descriptions</TableCell>
            <TableCell align="right">Locations</TableCell>
            <TableCell align="right">Operating Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                {row.name}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.operating_hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
