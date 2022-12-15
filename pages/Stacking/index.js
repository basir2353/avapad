import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React  from 'react'
import {useState} from 'react'
import styles from '../../styles/HomePage.module.css'
import {obj3,obj4} from '../../components/objdata';
import ClaimerInput from '../../components/ClaimerInput'
import ClaimerUnstakeInput from '../../components/claimerunstakeinput'
export default function Index() {

  const [state,setState]=useState(obj3)
  const [tooglebutton,settooglebutton]=useState('true');
  const [tooglebuttontoken,settooglebuttontoken]=useState('true');
  const [showComponent,setshowComponent]=useState('Stake');

  function toogleB(e)
  {
    if(e==='b1')
    {
      setshowComponent('Stake');
      settooglebutton('true')
    }
    if(e==='b2')
    {
      setshowComponent('Unstake');
      settooglebutton('false')
    }
    if(e==='b3')
    {
      setState(obj3)
      settooglebuttontoken('true');
    }
    if(e==='b4')
    {
      setState(obj4)
      settooglebuttontoken('false');
    }
  }
  return (
    <div>
      <Grid container className={styles.stackingContainer} >
        
        <Grid item xs={12} md={3} sx={{borderLeft:'2px solid rgba(0,0,0,0.2)'}}>
            <Box className={styles.StackingCard}>
              <Typography  variant='h5' >Staked</Typography>
              <Typography pt="1.5rem" variant='h5' >0</Typography>
            </Box>
            <Box  className={styles.StackingCard}>
              <Typography variant='h5' >Rewards</Typography>
              <Typography pt="1.5rem" variant='h5' >0</Typography>
              <Button className={styles.leftsideButton} variant='contained'>Harvest</Button>
            </Box>
        </Grid>
        
        <Grid item xs={12} md={9} sx={{display:'flex',flexWrap:'wrap',}}>
              <Grid item xs={12} md={3} sx={{cursor:'pointer',padding:'20px'}}>

                <Box className={styles.rightsideBox} >
                  <Typography mr='2.5rem' pb='0.5rem' variant='p' className={tooglebutton==='true'?styles.active:null} onClick={(()=>{toogleB('b1')})}>
                        Stake
                  </Typography>
                 <Typography variant='p' className={tooglebutton==='false'?styles.active:null} onClick={(()=>{toogleB('b2')})}>
                        Unstake
                  </Typography>
                </Box>

              </Grid>
              <Grid item xs={12} md={9} >
                      <Box className={styles.middleboxes}>
                                <Box  className={styles.innermiddlebox}  sx={{width:{xs:'100%',md:'230px'},margin:{xs:'20px',md:'5px'},cursor:'pointer'}}>
                                                <Typography variant='h6' className={tooglebuttontoken==='true'?styles.activeB:null} onClick={(()=>{toogleB('b3')})}>
                                                  STAKE XAKITA
                                                </Typography>
                                                 <Typography variant='h6' className={tooglebuttontoken==='false'?styles.activeB:null} onClick={(()=>{toogleB('b4')})}>
                                                  STAKE AKITAX
                                                </Typography>
                                </Box>
                                <Box className={styles.innermiddlebox} sx={{width:{xs:'100%',md:'230px'},margin:{xs:'20px',md:'5px'}}}>
                                                <Typography variant='h7'>
                                                  Total {state.title} Stake
                                                </Typography>
                                                 <Typography pt='0.5rem' variant='h5' sx={{color:'#dc3545'}}>
                                                  {state.value}
                                                </Typography>
                                  
                                </Box>
                                <Box className={styles.innermiddlebox} sx={{width:{xs:'100%',md:'230px'},margin:{xs:'20px',md:'5px'}}}>
                                                <Typography variant='h7'>
                                                  APY
                                                </Typography>
                                                 <Typography pt='0.5rem' variant='h5' sx={{color:'#dc3545'}}>
                                                  {state.APY}
                                                </Typography>
                                  
                                </Box>
                      </Box>
              </Grid>
              <Grid item xs={12} md={12} sx={{textAlign:'center',fontWeight:'bold',color:'white',margin:{xs:'25px',md:'5% auto'}}}>
                    <Typography variant='h5'>
                    {showComponent} Your {state.title}
                    </Typography>
                    <Box>
                      {
                        showComponent==='Stake'?<ClaimerInput/>:<ClaimerUnstakeInput />
                      }
                      
                      
                    </Box>
              </Grid>
        </Grid>
        
      </Grid>
    </div>
  )
}
