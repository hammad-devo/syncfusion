import React, { useContext, useEffect, useRef, useState } from 'react'
import { Alert, Box, Button, Divider, FormControl, Grid, TextField, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import axios from 'axios'
import {postData} from '../callApi/backend_api'
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import AppContext from '../context/ContextApi';

import { signInWithGoogle,auth } from '../components/Auth'

const Login = () => {
  const {user,setUser}=useContext(AppContext)
  const navigate=useNavigate()
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [inputError,setInputError]=useState({
    email:null,
    password:null
  })
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    if(name==='password'){
      if(value.length>8){
        setInputError({...inputError,[name]:false})  
        }
    }
    else if(name==='email'){
      if(validateEmail(value))
        setInputError({...inputError,[name]:false})
    }
  }
  const checkError=(name,value)=>{   
    if(name==='password'){
      if(value.length<8){
      setInputError({...inputError,[name]:true})  
      }
      else{
      setInputError({...inputError,[name]:false})
      }
   }
   else if(name==='email'){
      if(validateEmail(value))
        setInputError({...inputError,[name]:false})
      else
        setInputError({...inputError,[name]:true})
    }
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  //login api
  const handleLogin=()=>{
    const formdata=new FormData()
    formdata.append('data',JSON.stringify(formData))
    setLoading(true)
    postData('/auth/login',formdata).then(res=>{
 
      if(res.data.status===200){
        setUser({
          isLoggedIn:true,
          username:res.data.data.username
        })
        navigate('/questions')
      }
      else{
        setError(res.data.message)
      }
      setLoading(false)
    })
  }

  //login with social accounts
  //linkedin
  const { linkedInLogin } = useLinkedIn({
    clientId: '787v2qcuvoj8q3',
    redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      axios.post(`https://www.linkedin.com/oauth/v2/accessToken?code=${code}&grant_type=authorization_code&client_id=${'787v2qcuvoj8q3'}&client_secret=2f3iPtVt2MVQ1OY1&redirect_uri=${`${window.location.origin}/linkedin`}`,{},{
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
    onError: (error) => {
      console.log(error);
    },
  });
  //google

  auth.onAuthStateChanged(user=>{
    if(user){
    const formdata=new FormData()
    formdata.append('data',JSON.stringify({email:user?.email,first_name:user?.displayName}))
    postData('/auth/google',formdata).then(res=>{
      if(res){
        if(res.data.status==200){
          console.log(res)
            setUser({
                isLoggedIn:true,
              })
             navigate('/questions')
        }
       } 
    })
  }
})


  //check if already logged in
  useEffect(()=>{
    console.log(user)
    if(user.isLoggedIn){
      navigate('/questions')
    }
  },[user])
  return (
    <Box flex={1} height={window.innerHeight - 104} padding={'0px 10px'}>
      <Grid container spacing={2} sx={{ height: '100%', width: window.innerWidth > 700 ? '75%' : '100%', margin: 'auto' }} >
        {window.innerWidth > 700 ?
          <Grid xl={5} lg={5} xs={0} md={4} sm={0} sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
            <img src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration2.svg" width={'100%'} height={'70%'} />
          </Grid> : null}
        <Grid xl={7} lg={7} md={7} xs={12} sm={12} justifyContent={'center'} display={'flex'} >
          <FormControl sx={styles.form}>
            <Box>
              {error?<Alert severity='error' onClose={() => {setError(null)}}>{error}</Alert>:null}
              <Typography sx={[styles.logintext, { margin: '10px 0px 0.35em' }]}>LOGIN</Typography>
              <Typography variant='h4'>Welcome Back</Typography>
              <Typography sx={styles.logintext}>Login to manage your account</Typography>
              <Box marginTop={'32px'}>
                <Typography variant='h6' fontSize={'0.875rem'}>Enter your email</Typography>
                <TextField name='email' error={inputError['email']} onFocus={inputError['email']!==false?()=>setInputError({...inputError,email:null}):null} onBlur={()=>checkError('email',formData['email'])} value={formData.email} onChange={handleChange} label='Email*' sx={styles.formfield} type='email' />
                {inputError['email']?<Typography marginLeft={'4px'} color={'red'} fontSize={'0.815rem'}>{formData.email.length>0? 'Invalid email*':'Email is required*'}</Typography>:null}
                <Box justifyContent={'space-between'} marginTop={'36px'} display={'flex'} flexWrap={'wrap-reverse'}>
                  <Typography variant='h6' fontSize={'0.875rem'}>Enter your password</Typography>
                  <Typography variant='h6' fontSize={'0.875rem'} color={'rgb(55, 125, 255)'} sx={{ cursor: 'pointer' }} onClick={()=>navigate('/resetpassword')}>Forgot your password?</Typography>
                </Box>
                <Box position={'relative'}>
                  <TextField name='password' error={inputError['password']} onFocus={inputError['password']!==false?()=>setInputError({...inputError,password:null}):null} onBlur={()=>checkError('password',formData['password'])} value={formData.password} onChange={handleChange} label='Password*' sx={styles.formfield} type={!passwordVisible ? 'password' : 'text'} />
                  {passwordVisible ? <VisibilityOffIcon sx={{ position: 'absolute', right: '3%', top: '45%', cursor: 'pointer' }} onClick={() => setPasswordVisible(!passwordVisible)} /> : <VisibilityIcon sx={{ position: 'absolute', right: '3%', top: '45%', cursor: 'pointer' }} onClick={() => setPasswordVisible(!passwordVisible)} />}
                </Box>
                {inputError['password']?<Typography marginLeft={'4px'} color={'red'} fontSize={'0.815rem'}>{formData.password.length<=0?'Password is required*':"Should be greater then 8*"}</Typography>:null}
              </Box>
              <Box justifyContent={'space-between'} marginTop={'36px'} display={'flex'} alignItems={'center'} flexWrap={'wrap'}>
                <Typography variant='h6' fontSize={'0.875rem'}>Don't have an account yet? <span style={{ color: 'rgb(55, 125, 255)', cursor: 'pointer' }} onClick={()=>navigate('/signup')}>Sign up here</span></Typography>
                <Button variant='contained' sx={styles.loginButton} disabled={(inputError['email']||inputError['password'])||(inputError['email']===null||inputError['password']===null)?true:false} onClick={handleLogin}>Login</Button>
              </Box>

              <Box display={'flex'} alignContent={'center'} alignItems={'center'} marginTop={'25px'} justifyContent={'space-between'}>
                <Divider sx={{ width: '40%' }} />
                <Typography sx={{ width: '20%', textAlign: 'center' }}>OR</Typography>
                <Divider sx={{ width: '40%' }} />
              </Box>
              <Grid container marginTop={'15px'} justifyContent={'space-between'}>
                <Grid xl={5} lg={5.5} xs={12} sm={12} md={12} marginTop={'10px'}>
                  <Button variant='outlined' onClick={()=>signInWithGoogle()} display={'flex'} sx={styles.authentication}>
                    <img src='assets/google.png' />
                    <Typography marginLeft={'10px'}>Login with Google</Typography>
                  </Button>
                </Grid>
                <Grid xl={5} lg={5.5} xs={12} sm={12} md={12} marginTop={'10px'}>
                  <Button onClick={()=>linkedInLogin()} variant='contained' display={'flex'} sx={[styles.authentication, { backgroundColor: '#1d6eb5', color: 'white' }]}>
                    <img src='assets/linkedin (1).png' width={'20px'} />
                    <Typography marginLeft={'10px'}>Login with LinkedIn</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </FormControl>
        </Grid>
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
    marginTop: '16px'
  },
  logintext: {
    fontSize: '1rem',
    fontWeight: '500',
    lineHeight: '1.5',
    fontFamily: 'Inter, sans-serif',
    color: '#677788'
  },
  loginButton: {
    backgroundColor: 'rgb(47, 106, 217)',
    textTransform: 'none',
    padding: '12px 17px ',
    width: window.innerWidth > 700 ? '20%' : '100%',
    marginTop: window.innerWidth > 700 ? '0px' : '10px'
  },
  authentication: {
    alignContent: 'center',
    padding: '15px 20px',
    width: '100%',
    textTransform: 'none',
  }
}

export default Login