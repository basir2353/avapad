import {useState} from 'react'
import react from 'react'
import { Grid } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button'
import {theme} from '../../components/MUIthemeforHomePage.js'
import Typography from '@mui/material/Typography'
import styles from '../../styles/HomePage.module.css'
import Divider from '@mui/material/Divider';
import Upcomming from '../../components/ProjectComponents/upcomming.js'
import Active from '../../components/ProjectComponents/active.js'
import Ended from '../../components/ProjectComponents/ended.js'
export default function Index()
{
const [state,setstate]=useState('b1')    
const [b1active,setb1active]=useState('true');
const [b2active,setb2active]=useState('false');
const [b3active,setb3active]=useState('false');


function tooglebutton(e){
  if(e==='b1')
  {
    setstate('b1')
    setb1active('true')
    setb2active('false')
    setb3active('false')
  }
  if(e==='b2')
  {
    setstate('b2')
    setb2active('true')
    setb1active('false')
    setb3active('false')
  }
  if(e==='b3')
  {
    setstate('b3')
    setb3active('true')
    setb1active('false')
    setb2active('false')
  }
}

    return(
        <>
        <ThemeProvider theme={theme}>
        <Grid container className={styles.Container} sx={{}} >

        <Grid item xs={12} md={12}>

            <Grid container sx={{borderBottom:'3px solid rgba(250,250,250,0.1)',textAlign:'left',justifyContent:'left'}}>                
        <Grid item xs={4} md={1.3} sx={{display:'flex',justifyContent:'left',"&:hover":{cursor:'pointer'},}}>
          <Typography sx={{color:'white',opacity:'0.8'}} className={ b1active==='true'?styles.active:null} onClick={(()=>{tooglebutton('b1')})}>Upcomming</Typography>
          <Typography sx={{color:'white',opacity:'0.8'}} className={ b2active==='true'?styles.active:null} onClick={(()=>{tooglebutton('b2')})}>Active</Typography>
          <Typography sx={{color:'white',opacity:'0.8'}} className={ b3active==='true'?styles.active:null} onClick={(()=>{tooglebutton('b3')})}>Ended</Typography>
       
        </Grid>
        
        </Grid>
        </Grid>

            <Grid item xs={12} md={12} sx={{display:'flex',justifyContent:'center'}}>
                    {
                        state==='b1'?<Upcomming />:state==='b2'?<Active />:state==='b3'?<Ended />:null
                    }
            </Grid>

        </Grid>
        </ThemeProvider>
        </>
    )
}