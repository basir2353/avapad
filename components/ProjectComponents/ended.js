import {useState} from 'react'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button'
import {theme} from '../MUIthemeforHomePage.js'

export default function Ended(){
    return(
        <>
        <ThemeProvider theme={theme}>
        <Grid container  sx={{margin:'100px auto'}}>
            <Typography variant='p' sx={{textAlign:'center'}}>
                    No Project Currently Close
            </Typography>
        </Grid>
        </ThemeProvider>
        </>
    )
        

}