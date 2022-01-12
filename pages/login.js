import React from 'react';
import Head from 'next/head';
import { Grid,Paper, Avatar, TextField, Button, Typography, Link, Checkbox, FormControlLabel } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

function login() {
    const paperStyle={padding :20,height:'70vh',width:380, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const signIn =  async () =>{
    try {
				const res = await fetch('/api/auth/login', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
				});
		}
		catch (e) {
			console.error(e);
			showNotification(
				'error',
				'Σφάλμα πρόσβασης',
				'Σφάλμα συστήματος. Επικοινωνήστε με τον διαχειριστή'
			);
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
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={signIn}>Sign in</Button>
                <Typography align='center' color='textSecondary'>or</Typography>
                <Button type='submit' variant="contained" style={{margin:'8px 0',backgroundColor:'#dd4b39'}} fullWidth>Google</Button>
                <Typography align='center' marginTop={13}> Do you have an account?
                     <Link href="/signup" >
                        Sign Up 
                    </Link>
                </Typography>
            </Paper>
        </Grid>
        </>
    )
}

export default login
