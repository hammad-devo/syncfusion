import React, { useEffect, useRef, useState } from 'react'
import { Alert, Backdrop, Box, Button, CircularProgress, Divider, FormControl, Grid, Paper, TextField, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { postData, updateData } from '../callApi/backend_api';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
const Updatepassword = () => {
  const [passwordVisible,setPasswordVisible]=useState(false)
  const navigate=useNavigate()
  const {token}=useParams()
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)
  const [success,setSuccess]=useState(null)
  const [user_id,setUserId]=useState(null)
  const [inputError,setInputError]=useState({
    password:null,
    confirm:null
  })
  const [formData, setFormData] = useState({
    password: '',
    confirm:''
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
    else if(name==='confirm'){
      if(formData['password']===value){
        setInputError({...inputError,[name]:false})  
      }
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
   else if(name==='confirm'){
    if(formData['password']===value){
      setInputError({...inputError,[name]:false})  
    }
    else{
      setInputError({...inputError,[name]:true}) 
    }
   }
  }

   //update password api
   const handleUpdate=()=>{
    const formdata=new FormData()
    formdata.append('data',JSON.stringify({...formData,token:token}))
    setLoading(true)
    updateData('/auth/changePassword',formdata).then(res=>{
      if(res.data.status===200){
        setSuccess('Reset link sent to you email, click on it to reset.')
      }
      else{
        setError(res.data.message)
      }
      setLoading(false)
    })
  }
  useEffect(()=>{
    if(token){
      const formdata=new FormData()
      formdata.append('data',JSON.stringify({token}))
      postData('/auth/verifyOTP',formdata).then(res=>{
        if(res.data.status===200){
          setLoading(false)
        }
        else{
          setLoading(false)
          setError('Link expired!')
        }
      })
    }
  },[])
  return (
    <Box flex={1}  height={window.innerHeight-104} padding={'0px 10px'}>
      <Grid container spacing={2} sx={{ height: '100%', width: window.innerWidth>700?'75%':'100%', margin: 'auto' }} >
    
        <Grid xl={7} lg={7} md={7} xs={12} sm={12} justifyContent={'center'} display={'flex'} >
          <FormControl sx={styles.form}>
            <Box>   
             
              <Typography sx={[styles.logintext,{margin:'10px 0px 0.35em'}]}>RECOVER ACCOUNT</Typography>
              <Typography variant='h4'>Change Password</Typography>
              <Typography sx={styles.logintext}>Update password and continue</Typography>
              <Box marginTop={'32px'}>
                <Typography variant='h6' fontSize={'0.875rem'}>Enter your password</Typography> 
                <Box position={'relative'}>
                <TextField name='password' error={inputError['password']} onFocus={inputError['password']!==false?()=>setInputError({...inputError,password:null}):null} onBlur={()=>checkError('password',formData['password'])} value={formData.password} onChange={handleChange} label='Password*' sx={styles.formfield} type={!passwordVisible ? 'password' : 'text'} />
                  {passwordVisible ? <VisibilityOffIcon sx={{ position: 'absolute', right: '3%', top: '45%', cursor: 'pointer' }} onClick={() => setPasswordVisible(!passwordVisible)} /> : <VisibilityIcon sx={{ position: 'absolute', right: '3%', top: '45%', cursor: 'pointer' }} onClick={() => setPasswordVisible(!passwordVisible)} />}
                </Box>
                {inputError['password']?<Typography marginLeft={'4px'} color={'red'} fontSize={'0.815rem'}>{formData.password.length<=0?'Password is required*':"Should be greater then 8*"}</Typography>:null}
                <Typography variant='h6' marginTop={'30px'} fontSize={'0.875rem'}>Confirm your password</Typography> 
                <Box position={'relative'}>
                  <TextField name='confirm' error={inputError['confirm']} onFocus={inputError['confirm']!==false?()=>setInputError({...inputError,confirm:null}):null} onBlur={()=>checkError('confirm',formData['confirm'])} value={formData.confirm} onChange={handleChange} label='Confirm password*' sx={styles.formfield} type={'password'}/>
                  {inputError['confirm']?<Typography marginLeft={'4px'} color={'red'} fontSize={'0.815rem'}>Passwords should be same*</Typography>:null}
                </Box>
              </Box>
              <Box justifyContent={'space-between'} marginTop={'36px'} display={'flex'} alignItems={'center'} flexWrap={'wrap'}>
               <Button variant='contained' sx={styles.loginButton} onClick={handleUpdate} disabled={(inputError['password']===false&&inputError['confirm']===false)?false:true}>Update Password</Button>
              </Box>          
            </Box>
          </FormControl>
        </Grid>
        {window.innerWidth>700?
       <Grid xl={5} lg={5} xs={0} md={4} sm={0} sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
          <img src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration2.svg" width={'100%'} height={'70%'} />
        </Grid>:null}
      </Grid>
      {success?<Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <Paper elevation={3} sx={{padding:'3% 5%',position:'relative'}} >
            <CheckCircleOutlineIcon sx={styles.success}/>
            <Typography variant='h4' fontWeight={'bold'} marginTop={'13%'}>Password Updated</Typography>
            <Button variant='contained' sx={[styles.loginButton,{marginTop:'5%'}]} onClick={()=>navigate('/')}>Go to login</Button>
        </Paper>
      </Backdrop>:null}
      {error?<Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <Paper elevation={3} sx={{padding:'3% 5%',position:'relative'}} >
            <HighlightOffIcon sx={[styles.success,{color:'red'}]}/>
            <Typography variant='h4' fontWeight={'bold'} marginTop={'13%'}>{error}</Typography>
            <Button variant='contained' sx={[styles.loginButton,{marginTop:'5%'}]} onClick={()=>navigate('/resetpassword')}>Send reset link</Button>
        </Paper>
      </Backdrop>:null}
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
  },
  success:{
    position:'absolute',
    top:'-12%',
    fontSize:'5vw',
    left:'40%',
    color:'#1144b7'
  }
}

export default Updatepassword