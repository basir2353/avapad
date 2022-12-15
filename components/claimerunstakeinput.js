import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import styles from '../styles/HomePage.module.css'
import Modal from '@mui/material/Modal';
import Link from 'next/link'
import Image from 'next/image'
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

export default function ClaimerUnstakeInput() {

const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
    return (
    <div>
        <Box className={styles.ClaimerInputBox} sx={{width:{md:'450px',xs:'90%'}}}>
            <Box className={styles.claimerinnerBox}>
                <Box>
                   <label htmlFor='input'>Amount</label>
                   
                   <input className={styles.input} type='number' id='input' />
            </Box>

            <Box>
                <Button className={styles.leftsideButton}>MAX</Button>
            </Box>
                <Box>
                <Typography variant='h5' color="#dc3545">0</Typography>
            </Box>
            </Box>
        
            <Box>
                <Button onClick={handleOpen} className={styles.leftsideButton}>Connect Wallet</Button>
            </Box>
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
              <Image src='/metamask.webp' alt="image" width={25} height={25} />
            </Box>
            </a></Link>
          </Box>

                 <Box sx={{margin:'20px 0px'}}>
            <Link href='https://metamask.io'><a><Box sx={{display:'flex',justifyContent:'space-between',backgroundColor:'#dc3545',padding:'10px 20px'}}>
              <Typography>
                Wallet Connect
              </Typography>
              <Image src='/wallet-connect.svg' alt="image" width={25} height={25} />
            </Box>
            </a></Link>
          </Box>

        </Box>
      </Modal>


    </div>
  )
}
