import React, { useContext, useEffect, useRef, useState } from 'react'
import { Alert, Box, Button, Divider, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomeSelect from '../components/CustomeSelect';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/ContextApi';
const skills=['Adobe photoshop','Adbobe xd','Figma','Adobe illustrator','Adobe premiere pro','Adobe After effects']
const hobbies=['Writting','Soccer','Reading','Travelling','Cooking','Chess','Photography','Chess']
const Questions = () => {
    const {user}=useContext(AppContext)
    const navigate=useNavigate()
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [step, setStep] = useState(1)
    const [selectedSkills,setSelectedSkills]=useState([])
    const [selectedHobby,setSelectedHobby]=useState([])
    const [other,setOther]=useState('')
    const [category,setCategory]=useState('')
    const [lookingType,setLookingType]=useState('work')
const addOtherHobby=(e)=>{
    if(e.key==='Enter'){
        setSelectedHobby([...selectedHobby,other])
        setOther('')
    }
}
const finish=()=>{
    console.log(`Looking for ${lookingType}`)
    console.log(`Skills ${selectedSkills.map(s=>{return s})}`)
    console.log(`Category ${category}`)
    console.log(`Interests ${selectedHobby.map(s=>{return s})}`)
    navigate('/skillsdatabase')
}
  //check if already logged in
  useEffect(()=>{
    if(!user.isLoggedIn){
      navigate('/')
    }
  },[user])
    return (
        <Box flex={1} height={window.innerHeight - 104} padding={'0px 10px'}>
            <Grid container spacing={2} sx={{ height: '100%', width: window.innerWidth > 700 ? '75%' : '100%', margin: 'auto' }} >
                <Grid xl={7} lg={7} md={7} xs={12} sm={12} justifyContent={'center'} display={'flex'} >
                    <FormControl sx={styles.form}>
                        <Box>
                            <Box display={'flex'} justifyContent={'space-between'}>
                                <Box display={'flex'} sx={{ cursor: 'pointer', marginLeft: '-10px' }}>
                                    <ArrowBackIcon color='primary' />
                                    <Typography color={'primary'} marginLeft={'10px'}>Back to home</Typography>
                                </Box>
                                <Typography color={'#939495'}>{`step ${step}/4`}</Typography>
                            </Box>
                            {step!==3?<Typography sx={[styles.logintext, { margin: '10px 0px 0em' }]}>{step===1?'HI,':step===2?"Perfect,":step===4?'Great,':null}</Typography>:null}
                            <Typography variant='h4'>{step===1?'Tell us more about you':step===2?'We are here to help you':step===3?'What kind of projects you’re most interested in':step===4?'We are going so well':null}</Typography>
                            {step===2?<Typography sx={styles.logintext1}>Please enter your Information, so we find the best match work for you in no time</Typography>:null}
                            <Box marginTop={'32px'}>
                                {step===1?
                                <Box>
                                    <Typography variant='h6' marginTop={'30px'} fontSize={'0.875rem'}>I am looking for</Typography>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        fullWidth
                                        sx={styles.formfield}
                                        value={lookingType}
                                        onChange={(e)=>setLookingType(e.target.value)}
                                    >
                                        <MenuItem value={'work'}>Work</MenuItem>
                                        <MenuItem value={'hire'}>Hire</MenuItem>
                                    </Select>
                                </Box>:
                                step===2?
                                <Box>
                                    <Typography variant='h6' marginTop={'30px'} fontSize={'0.875rem'}>What Skillset do you have?</Typography>
                                    <CustomeSelect data={skills} selectedData={selectedSkills} setSelected={setSelectedSkills}/>
                                </Box>:
                                step===3?
                                <Box>
                                    <Typography variant='h6' marginTop={'30px'} fontSize={'0.875rem'}>Please Choose Category that fits you</Typography>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        fullWidth
                                        sx={styles.formfield}
                                        value={category}
                                        onChange={(e)=>setCategory(e.target.value)}
                                    >
                                        <MenuItem value={'data science'}>Data Science</MenuItem>
                                        <MenuItem value={'machine learning'}>Machine Learning</MenuItem>
                                        <MenuItem value={'ui/ux design'}>UI/UX Design</MenuItem>
                                        <MenuItem value={'web development'}>Web development</MenuItem>
                                        <MenuItem value={'information security analyst'}>Information Secuirty Analyst</MenuItem>
                                        <MenuItem value={'software engineer'}>Software Engineer</MenuItem>  
                                    </Select>
                                </Box>:
                                <Box>
                                    <Typography variant='h6' marginTop={'30px'} fontSize={'0.875rem'}>Knowing your interests might be a good thing for us.</Typography>
                                    <CustomeSelect data={hobbies} selectedData={selectedHobby} setSelected={setSelectedHobby}/>
                                    <TextField sx={styles.formfield} value={other} onChange={(e)=>setOther(e.target.value)} onKeyDown={(e)=>addOtherHobby(e)} label='Other'/>
                                </Box>
                                }                              
                            </Box>
                            <Box justifyContent={'flex-end'} marginTop={'36px'} display={'flex'} alignItems={'center'} flexWrap={'wrap'}>
                                <Box display={'flex'} justifyContent={'flex-end'} width={window.innerWidth > 700 ? '40%' : '100%'}>
                                    {step>1?<Button variant='outlined' sx={[styles.loginButton, { background: 'none',marginRight:'10px' }]} onClick={()=>{setStep(step-1)}}>Prev</Button>:null}
                                    <Button variant='contained' sx={styles.loginButton} disabled={(step===1&&lookingType==='')||(step===2&&selectedSkills.length<=0)||(step===3&&category==='')||(step===4&&selectedHobby.length<=0)?true:false} onClick={step<=3?()=>setStep(step+1):()=>finish()}>{step===4?'Finish':'Next'}</Button>
                                </Box>
                            </Box>
                        </Box>
                    </FormControl>
                </Grid>
                {window.innerWidth > 700 ?
                    <Grid xl={5} lg={5} xs={0} md={4} sm={0} sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                        <img src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration4.svg" width={'100%'} height={'70%'} />
                    </Grid> : null}
            </Grid>
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
        padding: '0px 10px',
    },
    formfield: {
        width: '100%',
        margin: 'auto',
        marginTop: '16px'
    },
    logintext: {
        fontSize: '2.4rem',
        fontWeight: '500',
        lineHeight: '1.5',
        fontFamily: 'Inter, sans-serif',
        color: '#0048cd',

    },
    logintext1: {
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
        width: '48%',
        marginTop: window.innerWidth > 700 ? '0px' : '10px'
    },
    authentication: {
        alignContent: 'center',
        padding: '15px 20px',
        width: '100%',
        textTransform: 'none',
    }
}
export default Questions