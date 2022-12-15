import { Grid } from '@mui/material'
import React from 'react'
import {Box} from "@mui/material";
import ClaimerCard from '../../components/ClaimerComponents/ClaimerCard'
import styles from '../../styles/HomePage.module.css'


const index = () => {
    let array=[1,2,3];
  return (
    <>
               <Grid container sx={{width:{md:'75%',xs:'90%'},maxWidth:'1280px',justifyContent:'space-between',margin:'50px auto'}}>
                {
                    array.map((m,i)=>{
                        return <Grid key={i} item xs={12} md={5.7} sx={{margin:'25px 0px'}}> 
                            <ClaimerCard data={m} />
                </Grid>
                    })
                }
                
               </Grid>

            </>  
  )
}

export default index