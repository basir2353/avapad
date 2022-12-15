import react from 'react'
import Typography from '@mui/material/Typography'
import { ThemeProvider ,createTheme} from '@mui/material/styles';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider';

const theme=createTheme({
    palette:{
        mode:'dark',
        primary:{
            main:'#dc3545'
        }
      
    },
 
    typography:{
        
            h5:{
                color:'#dc3545',
                fontWeight:'bold',
                margin:'10px'
            },
            h6:{
                margin:'10px auto'
            },

    },
    components:
    {
        MuiButton:{
            styleOverrides:{
                root:{
                    fontSize:'16px',
                    margin:'20px auto',
                }
            }
        }
    }
})

export default function Card(props){
    return(
        <ThemeProvider theme={theme}>
                <Grid container sx={{textAlign:'center',width:{xs:'90%',md:'30%'},margin:'20px auto',backgroundColor:'#1f1f21',padding:'10px'}} className='card'>
                    <Grid item xs={12} md={12} sx={{margin:'20px auto'}}>
                    <Typography variant='h5' component='div'>
                        Tier 1
                    </Typography>
                    <Divider sx={{width:'80%',margin:'0px auto',color:'white'}} />
                    <Typography component='div' variant='h6'>
                        Staking Requirements
                    </Typography>
                    <Typography component='div' variant='h3'>
                        {props.data.value}
                    </Typography>
                    <Typography component='div' variant='h6'>
                        1 Guranteed Allocation
                    </Typography>
                    <Typography component='div' variant='p'>
                        Pool Weight
                    </Typography>
                    <Typography component='div' variant='p'>
                        {props.data.percentage}
                    </Typography>
                    <Divider sx={{width:'80%',margin:'0px auto',color:'white'}} />
                    <Button variant='contained' color='primary'> LEARN MORE </Button>
                    </Grid>
                </Grid>
        </ThemeProvider>
    );
}