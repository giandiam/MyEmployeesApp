import React, { useEffect } from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import { Grid, Paper, Button } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export async function getServerSideProps() { 
  try {
    const res = await fetch(`http://localhost:3001/employee`, {method: 'GET'});
    const data = await res.json();
    if(!data)
    return {
      notFound: true,
    }
    return {
      props:{
        data,
      },
    }}catch(e) {
        console.log(e);
        const error = true
        return {
          props:{
            error,
          },
        }
      }   
}

export default function Employee(props){
  console.log('eppppp');
  let router = useRouter();

  // useEffect(() => {

  // })
  if(notFound){
    router.push('/');
  }
  else{
    const logout =  async () =>{
      try {
          router.push('/');
      }catch(e) {
            console.log(e);
            const error = true
            return {
              props:{
                error,
              },
            }
          }
    }
    
  
    const paperStyle={padding:20,height:'70vh',width:380, margin:"20px auto", backgroundColor:'#333333'};
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#333333',
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
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
  
    return (
      <>
        <Head>
            <title>My Employees</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
              <h2 style={{color:'white', fontFamily: 'cursive'}}>Employee</h2>
              <Button onClick={logout}><LogoutRoundedIcon style={{color:'#662929'}}/></Button>
            </Grid>
            <TableContainer component={Paper} style={{maxHeight: 350}}>
              <Table sx={{ backgroundColor: '#acacac'}} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Employees</StyledTableCell>
                    <StyledTableCell align="left">Status</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.data.map((obj) => (
                    <StyledTableRow key={obj.id}>
                      <StyledTableCell component="th" scope="row" style={{color: '#333333'}}>
                        {obj.username}
                      </StyledTableCell>
                      <StyledTableCell align="left" style={{color: obj.is_active ? 'green' : '#662929'}}>
                        {obj.is_active ? 'Active' : 'Inactive'}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </>
    )
  }
}
