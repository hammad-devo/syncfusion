import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Divider, Grid, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chart from '../components/SkillChart';
import SkillChart from '../components/SkillChart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/ContextApi';
const SkillDatabse = () => {
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
                    </Paper>
                    <Box marginTop={'30px'} width={'100%'}>
                        <Typography variant='h4' textAlign={'center'} fontWeight={'bold'}>
                            Suggested Skills
                        </Typography>
                        <Grid  container justifyContent={'flex-start'} columnGap={2}>
                            <Grid marginTop={'20px'} lg={3.9} xl={3.9} xs={5.8} sm={5} md={5}>
                                <Paper onClick={()=>navigate('/jobs')} className='transformParent' sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 14px',cursor:'pointer'}} elevation={3}>
                                    <Box>
                                        <Typography variant='h6' fontWeight={'bold'} color={'darkblue'}>UI/UX designer</Typography>
                                        <Typography color={'#666666'}>Build ui/ux for us and earn</Typography>
                                    </Box>
                                    <ArrowForwardIosIcon color='#0c6af7' className='transformChild'/>
                                </Paper>
                            </Grid>
                            <Grid marginTop={'20px'} lg={3.9} xl={3.9} xs={5.8} sm={5} md={4.4}>
                                <Paper onClick={()=>navigate('/jobs')} className='transformParent' sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 14px',cursor:'pointer'}} elevation={3}>
                                    <Box>
                                        <Typography variant='h6' fontWeight={'bold'} color={'darkblue'}>Photoshop expert</Typography>
                                        <Typography color={'#666666'}>Retouch photos and earn</Typography>
                                    </Box>
                                    <ArrowForwardIosIcon color='#0c6af7' className='transformChild'/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box marginTop={'30px'} width={'100%'}>
                        <Typography variant='h4' textAlign={'center'} fontWeight={'bold'}>
                            Skills Database
                        </Typography>
                        <Grid  container justifyContent={'flex-start'} columnGap={2}>
                            <Grid marginTop={'20px'} lg={3.9} xl={3.9} xs={5.8} sm={5} md={5}>
                                <Paper onClick={()=>navigate('/jobs')} className='transformParent' sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 14px',cursor:'pointer'}} elevation={3}>
                                    <Box>
                                        <Typography variant='h6' fontWeight={'bold'} color={'darkblue'}>UI/UX designer</Typography>
                                        <Typography color={'#666666'}>Build ui/ux for us and earn</Typography>
                                    </Box>
                                    <ArrowForwardIosIcon color='#0c6af7' className='transformChild'/>
                                </Paper>
                            </Grid>
                            <Grid marginTop={'20px'} lg={3.9} xl={3.9} xs={5.8} sm={5} md={4.4}>
                                <Paper onClick={()=>navigate('/jobs')} className='transformParent' sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 14px',cursor:'pointer'}} elevation={3}>
                                    <Box>
                                        <Typography variant='h6' fontWeight={'bold'} color={'darkblue'}>Photoshop expert</Typography>
                                        <Typography color={'#666666'}>Retouch photos and earn</Typography>
                                    </Box>
                                    <ArrowForwardIosIcon color='#0c6af7' className='transformChild'/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box marginTop={'30px'} width={'100%'}>
                        <SkillChart/>
                    </Box>
            </Grid>
        </Grid>
    )
}

const styles = {
  
}
export default SkillDatabse