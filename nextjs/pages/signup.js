import React, { useState } from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import { Grid,Paper, Avatar, TextField, Button, Typography, Link, Box } from '@material-ui/core';
//import Box from '@material-ui/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default function Signup() {
    const paperStyle={padding :20,height:'80vh',width:380, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#662929'}
    const btnstyle={margin:'20px 0',backgroundColor:'#662929'}

    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const addUser =  async () =>{

        try {
          if (password === passwordConfirm) {
            const userData = {
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName
            }
            const res = await fetch(`${process.env.URL}/signup`, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),            
            });

            const data = await res.json();
            const id = data[0].id;

            router.push('/employee/' + id);
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
                    <h2 style={{color:'#662929', fontFamily: 'cursive'}}>Sign up</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth onChange={event => setUsername(event.target.value)} required/>
                <Box
                   sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <TextField label='First name' placeholder='Enter first name' fullWidth onChange={event => setFirstName(event.target.value)} required/>
                  <TextField label='Last name' placeholder='Enter last name' fullWidth onChange={event => setLastName(event.target.value)} required/>
                </Box>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth onChange={event => setPassword(event.target.value)} required/>
                <TextField label='Confirm Password' placeholder='Enter password' type='password' fullWidth onChange={event => setPasswordConfirm(event.target.value)} required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={addUser}>Sign up</Button>
                <Typography align='center' color='textSecondary'>or</Typography>
                <Button type='submit' variant="contained" style={{margin:'20px 0',color:'#662929',backgroundColor:'white'}} fullWidth>Google</Button>
                <Typography align='center' marginTop={13} style={{color:'#662929',fontFamily: 'cursive'}}> Do you have an account?
                     <Link href="/" >
                        Sign in 
                    </Link>
                </Typography>
            </Paper>
        </Grid>
        </>
    )
}
