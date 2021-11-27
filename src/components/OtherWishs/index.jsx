import React,{useState, useEffect, Component} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './style.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      color: "white",
      fontSize: 18,
    },
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: "rgba(255, 255, 255, 0.6)",
      fontSize: 16,
       color: "rgb(0,0,0)",
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


class OtherWishs extends Component{
    constructor(props) {
        super(props);
        this.state = {wishs: []};
       
    }

    componentDidMount() {
        fetch('https://vanoceb.azurewebsites.net/ostatni-prani')
            .then(response => response.json())
            .then(data => this.setState({wishs: data}));
    }

  render(){
    const {wishs} = this.state;
    return(
<div className="other_withs_container">  
<h1 className="prani_ostatnich_title">PŘÁNÍ OSTATNÍCH</h1>
<TableContainer>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Přání</StyledTableCell>
            <StyledTableCell align="right" size="small" >Pro koho</StyledTableCell>
            <StyledTableCell align="right" size="small" >Navrhnuto</StyledTableCell>
            <StyledTableCell align="right" size="small" >Kupující</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {wishs.map((row) => (
            <StyledTableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.nazevPrani}
              </StyledTableCell>
              <StyledTableCell align="right" size="small" >{row.jmenoProKoho}</StyledTableCell>
              <StyledTableCell align="right" size="small" >{row.jmenoNavrhl}</StyledTableCell>
              <StyledTableCell align="right" size="small" >{row.jmenoKupuje}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
    )
    }
}
export default OtherWishs;
