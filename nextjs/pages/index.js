import React, { useState } from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import { signIn, signOut, useSession } from "next-auth/react";
import { Grid,Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export async function getServerSideProps() {
  try {
    const res = await fetch(`http://localhost:3001`, {method: 'GET'});
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

export default function Home(props){
  const [username, setUsername] = useState('');
  const router = useRouter();

  if(props.error){
    router.replace('/employees/error');
  }

  const usernameCheck =  async () =>{
    try {
      const usernameIdentity = props.data.map((obj) => obj.first_name === username);
      if (usernameIdentity.includes(true)) {
        const userData = {
          username: username
        }
        const res = await fetch(`http://localhost:3001/`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        
        });
        const data = await res.json();
        router.push('/employee');
      }
      else {
        console.log('User doesn\' t exist!');
      }
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

  const paperStyle={padding :20,height:'70vh',width:380, margin:"20px auto"};
  const avatarStyle={backgroundColor:'#662929'};
  const btnstyle={margin:'20px 0',backgroundColor:'#662929'};

  return (
      <>
      <Head>
          <title>My Employees</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid>
          <Paper elevation={10} style={paperStyle}>
              <Grid align='center'>
                  <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                  <h2 style={{color:'#662929',fontFamily: 'cursive'}}>Sign In</h2>
              </Grid>
              <TextField label='Username' placeholder='Enter username' fullWidth onChange={event => setUsername(event.target.value)} required/>
              <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
              <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={usernameCheck}>Sign in</Button>
              <Typography align='center' color='textSecondary'>or</Typography>
              <Button type='submit' variant="contained" style={{margin:'20px 0',color:'#662929',backgroundColor:'white'}} onClick={() => signIn()} fullWidth>Google</Button>
              <Typography align='center' marginTop={13} style={{color:'#662929',fontFamily: 'cursive'}}> Do you have an account?
                   <Link href="/signup" >
                      Sign Up 
                  </Link>
              </Typography>
          </Paper>
      </Grid>
      </>
  )
}