
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
import Link from 'next/link'
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'rgb(50,50,50)',
  boxShadow: 24,
  p: 4,
  color:'white',
  width:{xs:'90%',md:'500px'},
};


export default function ResponsiveHeader() {

  
 const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'transparent'}}>
        <Toolbar sx={{display:'flex',flexWrap:'wrap'}}>
         
         <Link href='/Projects'><a><Button className={styles.Navbutton1}>Projects</Button></a></Link>    
         <Link href='/Stacking'><a>  <Button className={styles.Navbutton1}>Stacking</Button></a></Link>    
        <Link href='/Claimers'><a>   <Button className={styles.Navbutton1}>Claimers</Button></a></Link>    
        <Link href='/'><a>  <Button onClick={handleOpen} className={styles.Button1} sx={{marginRight:'7%',width:'200px'}} color="inherit">Connect Wallet</Button></a></Link>    
         
        </Toolbar>
      </AppBar>
    </Box>
<Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            SELECT A WALLET
          </Typography>
          <Box sx={{marginTop:'25px'}}>
            <Link href='/metamask.com'><a><Box sx={{display:'flex',justifyContent:'space-between',backgroundColor:'#dc3545',padding:'10px 20px'}}>
              <Typography>
                Install MetaMask
              </Typography>
              <Image src='/metamask.webp' alt="ko" width={25} height={25} />
            </Box>
            </a></Link>
          </Box>

                 <Box sx={{margin:'20px 0px'}}>
            <Link href='https://metamask.io'><a><Box sx={{display:'flex',justifyContent:'space-between',backgroundColor:'#dc3545',padding:'10px 20px'}}>
              <Typography>
                Wallet Connect
              </Typography>
              <Image src='/wallet-connect.svg' alt="ko" width={25} height={25} />
            </Box>
            </a></Link>
          </Box>

        </Box>
      </Modal>

</>
  )
}
