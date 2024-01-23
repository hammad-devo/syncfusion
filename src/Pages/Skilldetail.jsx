import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Divider, Grid, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chart from '../components/SkillChart';
import SkillChart from '../components/SkillChart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/ContextApi';
const Skillsdetails= () => {
    const navigate=useNavigate()
    const {user}=useContext(AppContext)
    useEffect(()=>{
        if(!user.isLoggedIn){
          navigate('/')
        }
      },[user]) 
    return (
        <Grid container justifyContent={'center'}>
            <Grid xs={12} xl={10} lg={10} >
                    <Paper elevation={3} sx={{width:"100%",padding:'7% 2%'}} >
                        <Typography variant='h2' fontWeight={'bold'} fontFamily={'cursive'} color={'#0d4cab'} width={'100%'} textAlign={'center'}>
                            Compass Skills Database & Suggest
                        </Typography>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Typography variant='h5' fontWeight={'bold'} fontFamily={'cursive'} width={'20%'} textAlign={'center'}>
                            Graphic Designing  
                        </Typography>
                        <ArrowRightAltIcon sx={{fontSize:'32px'}}/>
                        <Typography variant='h5' fontWeight={'bold'} fontFamily={'cursive'} width={'20%'} textAlign={'center'}>
                            PhotoShop Editing  
                        </Typography>
                        </Box>
                        
                        
                    </Paper>
                   
                    <Box marginTop={'30px'} width={'100%'}>
                        <Box>
                        <Typography variant='h4' fontWeight={'bold'}>
                            Who are we
                        </Typography>
                        <Typography variant='h6' color={'#6e6e6e'}>
                         We believe lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae enim lacinia semper. Cras nulla lectus, porttitor vitae urna iaculis, malesuada tincidunt lectus. Proin nec tellus sit amet massa auctor imperdiet id vitae diam. Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.
                        </Typography>
                        </Box>
                        <Box marginTop={'20px'}>
                        <Typography variant='h4' fontWeight={'bold'}>
                        What we’re looking for
                        </Typography>
                        <Typography variant='h6' color={'#6e6e6e'}>
                        Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.
                        </Typography>
                        </Box>
                        <Box marginTop={'15px'}>
                            <Box display={'flex'} alignItems={"center"}>
                                <CheckCircleIcon sx={{fontSize:'31px',color:'#0d4cab'}}/>
                                <Typography color={'#6e6e6e'} variant='h6' marginTop={'3px'} marginLeft={'10px'}>
                                    Our sign up is dead simple. We only require your basic company information
                                </Typography>
                            </Box>
                            <Box display={'flex'} alignItems={"center"}>
                                <CheckCircleIcon sx={{fontSize:'31px',color:'#0d4cab'}}/>
                                <Typography color={'#6e6e6e'} variant='h6' marginTop={'3px'} marginLeft={'10px'}>
                                We support bulk uploading via SQL, integrations with most data storage products
                                </Typography>
                            </Box>
                            <Box display={'flex'} alignItems={"center"}>
                                <CheckCircleIcon sx={{fontSize:'31px',color:'#0d4cab'}}/>
                                <Typography color={'#6e6e6e'} variant='h6' marginTop={'3px'} marginLeft={'10px'}>
                                Simply select where you'd like to transfer your data
                                </Typography>
                            </Box>
                            <Box display={'flex'} alignItems={"center"}>
                                <CheckCircleIcon sx={{fontSize:'31px',color:'#0d4cab'}}/>
                                <Typography color={'#6e6e6e'}variant='h6' marginTop={'3px'} marginLeft={'10px'}>
                                Our sign up is dead simple. We only require your basic company information
                                </Typography>
                            </Box>
                            <Box display={'flex'} alignItems={"center"}>
                                <CheckCircleIcon sx={{fontSize:'31px',color:'#0d4cab'}}/>
                                <Typography color={'#6e6e6e'} variant='h6' marginTop={'3px'} marginLeft={'10px'}>
                                We support bulk uploading via SQL, integrations with most data storage products
                                </Typography>
                            </Box>
                        </Box>
                        <Box marginTop={'20px'}>
                        <Typography variant='h4' fontWeight={'bold'}>
                        Why to apply
                        </Typography>
                        <Typography variant='h6' color={'#6e6e6e'}>
                        We believe lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae enim lacinia semper. Cras nulla lectus, porttitor vitae urna iaculis, malesuada tincidunt lectus. Proin nec tellus sit amet massa auctor imperdiet id vitae diam. Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.
                        </Typography>
                        </Box>
                    </Box>
                    
            </Grid>
        </Grid>
    )
}

const styles = {
  
}
export default Skillsdetails