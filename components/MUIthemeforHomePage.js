import {createTheme} from '@mui/material/styles';
export const theme=createTheme({
    palette:{
      common:{
        grey:"#D3D3D5"
      },
    primary:{
      main:'#0dcaf0',
    },
    secondry:{
        main:'#dc3545',
    },
    buttonColor:{
      main:'#fff'
    }
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    padding:'10px 25px', 
                    width:'fit-content',
                    fontWeight:'bold',
                    fontSize:'16px'
                },
            },
        },
    },
    typography:{
      p:{
        fontSize:'16px',
        textAlign:'left',
        margin:'5px auto',
        opacity:'0.95'
      },
      body1:{
        color:'white',
        textAlign:'left',
        opacity:0.8,
        padding:'2px 18px',
      },
      h1:{
        '@media (max-width:600px)':{
          fontSize:'180%',
          marginTop:'10% '
        },
        color:'white',
        fontSize:'250%',
        fontWeight:'700',
        position:'relative',
      },
      h2:{
          fontSize:'130%',
          fontWeight:'bold',
          opacity:'0.6',
          margin:'20px auto'
      },
      h3:{
            fontSize:'110%',
            color:'white',
            fontWeight:'bold',
            textAlign:'left'
      },
    },

  });
  