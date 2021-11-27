import React,{Component} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';
import './style.css';
import { Link } from 'react-router-dom';

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


class Wishlist extends Component{
    constructor(props) {
        super(props);
        this.state = {wishs: []};
       
    }

    componentDidMount() {
        fetch('https://vanoceb.azurewebsites.net/moje-prani')
            .then(response => response.json())
            .then(data => this.setState({wishs: data}));
    }

    async remove(id) {
      await fetch(`https://vanoceb.azurewebsites.net/smazat-prani?id=${id}`, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      }).then(() => {
          let updateWishes = [...this.state.wishes].filter(i => i.id !== id);
          this.setState({wishes: updateWishes});
      });
  }



   render(){
    const {wishs} = this.state;

       
       return(
<div className="other_withs_container">  
<h1 className="me_ostatnich_title">MÉ PŘÁNÍ</h1>
<TableContainer>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Přání</StyledTableCell>
            <StyledTableCell align="right" size="small" >Smazat</StyledTableCell>
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
              <StyledTableCell align="right" size="small" >
                 <button className="btn btn-light"  onClick={() => this.remove(row.id)} ><FontAwesomeIcon icon={faTrashAlt} /></button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    <div className="nove_prani">
     <button type="button" className="btn btn-light"> <Link to="/newWish">Nové přání</Link></button>
    </div>

</div>
)}
}

export default Wishlist;
