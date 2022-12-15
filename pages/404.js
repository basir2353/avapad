import { Button, Typography } from '@mui/material'
import { Box, margin } from '@mui/system'
import Link from 'next/link'
import React from 'react'

const style={
width:{xs:'90%',md:'600px'},
position:'absolute',
top:'50%',
left:'50%',
transform:'translate(-50%,-50%)',
margin:'20px auto',
color:'white',
textAlign:'center'
};

export default function ERROR() {
  return (
    <div>
        <Box sx={style}>
            <Box sx={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                <Box sx={{borderRight:'4px solid white',display:'flex',alignItems:'center',justifyContent:'center',padding:'40px'}}>
            <Typography sx={{fontSize:'35px',color:'#dc3545'}}>
                 404       
            </Typography>
            </Box>
            <Box sx={{padding:'30px'}}>
                <Typography sx={{fontSize:'45px',color:'rgb(180,180,180)'}}>
                    OOPSS
                </Typography>
                 <Typography sx={{fontSize:'25',color:'#dc3545'}}>
                    Page Does Not Exist
                </Typography>

            </Box>
            </Box>
            <Link href='/'><a><Button sx={{width:'90%','&:hover':{backgroundColor:'rgb(125,25,25,0.9)'},borderRadius:'20px',margin:'20px auto',backgroundColor:'#dc3545'}} variant='container'>Go To HomePage</Button></a></Link>
        </Box>
    </div>
  )
}
