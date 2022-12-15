
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../styles/Header.module.css'
import ResponsiveHeader from './responsiveHeader.js'
import { Fade } from "react-awesome-reveal";
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'rgb(50,50,50)',
  boxShadow: 24,
  p: 4,
  color:'white',
};


export default function Header() {
 const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [state,setstate]=React.useState('false')
   function showModel(e)
  {
    setshowmodel('true')
  }
  function ShowHeader()
  {
 
   
    if(state==='false')
    {
      setstate('true')
    }
    else if(state==='true')
    {
      setstate('false')
    }
   
  
    
  }
  
  return (
    <>
    <Box sx={{width:{md:'85%',xs:'100%',lg:'85%',xl:'1280px'},margin:'3px auto', }}>
      <AppBar position="static" sx={{backgroundColor:'transparent'}}>
        <Toolbar sx={{}}>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div style={{padding:'0'}}>
              <Link href='/'><a>
              <Image height={60} width={230} src='/logo.png' alt='logo'  />
             </a></Link>
            
            </div>
           </Typography>
      <Link href='/Projects'><a><Typography className={styles.Navbutton} >Projects</Typography></a></Link>     
      <Link href='/Stacking'><a><Typography className={styles.Navbutton}>Staking</Typography></a></Link>     
      <Link href='/Claimers'><a><Typography className={styles.Navbutton}>Claimers</Typography></a></Link>     
      <Typography className={styles.Connect} sx={{marginRight:'0',width:'150px'}} onClick={handleOpen} color="inherit">Connect Wallet</Typography>   
          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{display:{xs:'flex',md:'none'}, mr: 2 }}
            onClick={(()=>{ShowHeader()})}
          >
            <MenuIcon  sx={{color:'maroon'}} />
          </IconButton>

        </Toolbar>
      </AppBar>
     
    </Box>
    <Grid container sx={{display:{md:'none',xs:'block'}}}>
   {(state==='true'&&window.innerWidth<900)? <Fade>
 <ResponsiveHeader/>
</Fade>:null}
</Grid>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            SELECT A WALLET
          </Typography>
          <Box sx={{marginTop:'25px'}}>
            <Link href='https://metamask.io'><a><Box sx={{display:'flex',justifyContent:'space-between',backgroundColor:'#dc3545',padding:'10px 20px'}}>
              <Typography>
                Install MetaMask
              </Typography>
              <Image src='/metamask.webp' alt="web" width={25} height={25} />
            </Box>
            </a></Link>
          </Box>

                 <Box sx={{margin:'20px 0px'}}>
            <Link href='/metamask.com'><a><Box sx={{display:'flex',justifyContent:'space-between',backgroundColor:'#dc3545',padding:'10px 20px'}}>
              <Typography>
                Wallet Connect
              </Typography>
              <Image src='/wallet-connect.svg' alt="image" width={25} height={25} />
            </Box>
            </a></Link>
          </Box>

        </Box>
      </Modal>

</>
  )
}
