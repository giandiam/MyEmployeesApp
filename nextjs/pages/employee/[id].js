import React, { useEffect } from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import Cookies from 'js-cookie';
import { Grid, Paper, Button } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export async function getServerSideProps(context) { 
  try {
    const res = await fetch(`http://localhost:3000/employee/${context.params.id}`, {
      method: 'GET',
      credentials:'include'
    });
    const data = await res.json();
    const id = context.params.id;
    if(!data)
    return {
      notFound: true,
    }
    return {
      props:{
        data,
        id,
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
  const router = useRouter();

  const logout =  async () =>{
    try {
      const res = await fetch('http://localhost:3000/logout', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({id: props.id}),       
        });
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
              <h2 style={{color:'white', fontFamily: 'cursive'}}>{props.data.username}</h2>
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
                  {props.data.coEmployees.map((obj) => (
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
  // }
}
