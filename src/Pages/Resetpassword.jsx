import React, { useContext, useEffect, useRef, useState } from 'react'
import { Alert, Box, Button, Divider, FormControl, Grid, TextField, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { postData } from '../callApi/backend_api';
import Loading from '../components/Loading';
import AppContext from '../context/ContextApi';
const Resetpassword = () => {
  const {user}=useContext(AppContext)
  const navigate=useNavigate()
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
  const [success,setSuccess]=useState(null)
  const [inputError,setInputError]=useState({
    email:null,
  })
  const [formData, setFormData] = useState({
    email: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
      if(validateEmail(value))
        setInputError({...inputError,[name]:false})
  }
  const checkError=(name,value)=>{    
      if(validateEmail(value))
        setInputError({...inputError,[name]:false})
      else
        setInputError({...inputError,[name]:true})
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
   //login api
   const handleReset=()=>{
    const formdata=new FormData()
    formdata.append('data',JSON.stringify(formData))
    setLoading(true)
    postData('/auth/forgetPassword',formdata).then(res=>{
      
      if(res.data.status===200){
        setSuccess('Reset link sent to you email, click on it to reset.')
      }
      else{
        setError(res.data.message)
      }
      setLoading(false)
    })
  }

 //check if already logged in
 useEffect(()=>{
  if(user.isLoggedIn){
    navigate('/questions')
  }
},[user])
  return (
    <Box flex={1}  height={window.innerHeight-104} padding={'0px 10px'}>
      <Grid container spacing={2} sx={{ height: '100%', width: window.innerWidth>700?'75%':'100%', margin: 'auto' }} >
      
        <Grid xl={7} lg={7} md={7} xs={12} sm={12} justifyContent={'center'} display={'flex'} >
          <FormControl sx={styles.form}>
            <Box>   
              {success?<Alert severity='success' onClose={()=>{setSuccess(null)}}>Reset link has been sent to your email</Alert>:null}
              {error?<Alert severity='error' onClose={() => {setError(null)}}>{error}</Alert>:null}
              <Typography sx={[styles.logintext,{margin:'10px 0px 0.35em'}]}>RECOVER ACCOUNT</Typography>
              <Typography variant='h4'>Forgot your password?</Typography>
              <Typography sx={styles.logintext}>Enter your email address below and we'll get you back on track</Typography>
              <Box marginTop={'32px'}>
                <Typography variant='h6' fontSize={'0.875rem'}>Enter your email</Typography>
                <TextField name='email' error={inputError['email']} onFocus={inputError['email']!==false?()=>setInputError({...inputError,email:null}):null} onBlur={()=>checkError('email',formData['email'])} value={formData.email} onChange={handleChange} label='Email*' sx={styles.formfield} type='email' />
                {inputError['email']?<Typography marginLeft={'4px'} color={'red'} fontSize={'0.815rem'}>{formData.email.length>0? 'Invalid email*':'Email is required*'}</Typography>:null}
              </Box>
              <Grid container justifyContent={'space-between'} marginTop={'36px'} alignItems={'center'} >
                <Grid xs={12} sm={4} lg={3} xl={3}>
                  <Button  variant='outlined' sx={[styles.loginButton,{backgroundColor:'transparent'}]} onClick={()=>navigate('/')}>Back to login</Button>
                </Grid>
                <Grid  xs={12} sm={4} lg={3} xl={3}>
                  <Button variant='contained' sx={styles.loginButton} disabled={inputError['email']||inputError['email']===null} onClick={handleReset}>Send reset link</Button>
                </Grid>
              </Grid>     
            </Box>
          </FormControl>
        </Grid>
        {window.innerWidth>700?
       <Grid xl={5} lg={5} xs={0} md={4} sm={0} sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
          <img src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration3.svg" width={'100%'} height={'70%'} />
        </Grid>:null}
      </Grid>
      
      <Loading open={loading} setOpen={setLoading}/>
    </Box>
  )
}

const styles = {
  left: {
    backgroundImage: "url('https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration2.svg')",
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderTopLeftRadius: '5%',
    borderBottomLeftRadius: '5%'
  },
  form: {
    justifyContent: 'center',
    width: '90%',
    height: '100%',
    padding: '0px 10px'
  },
  formfield: {
    width: '100%',
    margin: 'auto',
    marginTop:'16px'
  },
  logintext:{
    fontSize:'1rem',
    fontWeight:'500',
    lineHeight:'1.5',
    fontFamily:'Inter, sans-serif',
    color:'#677788'
  },
  loginButton:{
    backgroundColor:'rgb(47, 106, 217)',
    textTransform:'none',
    padding:'12px 17px ',
    width:'100%',
    marginTop:window.innerWidth>700?'0px':'10px'
  },
  authentication:{
    alignContent:'center',
    padding:'15px 20px',
    width:'100%',
    textTransform:'none',
  }
}

export default Resetpassword