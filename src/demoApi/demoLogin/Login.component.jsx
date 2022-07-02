import { Grid, Button, Paper, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const LoginDemo = () => {
    return (
        <Container>
            <Paper sx={{ padding: "20px" }} elevation={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography align="center" variant="h3">
                            Login
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            label="User Name"
                            fullWidth
                            size="small"
                            color="primary"
                        ></TextField>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            size="small"
                            color="secondary"
                        ></TextField>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Button variant="contained" sx={{ marginRight: "10px" }}>
                            Login
                        </Button>
                        <Button variant="outlined">Register</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default LoginDemo