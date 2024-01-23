import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const CustomeSelect = ({data,selectedData,setSelected}) => {
    const [filter,setFilter]=useState('')
    const removeItem=(index)=>{
        selectedData.splice(index,1)
        setSelected([...selectedData])
    }
    return (
        <Box marginTop={'16px'}>
            <Box sx={styles.container}>
                <TextField value={filter} onChange={(e)=>setFilter(e.target.value)} sx={styles.textfield} placeholder='Type in here' />
                <Box sx={styles.items} className='scroll'>
                    {data.filter(d=>!selectedData.includes(d)).map(d=>{
                        if(d.substring(0,filter.length).toUpperCase()===filter.toUpperCase()||filter==='')
                        return (
                            <Button onClick={()=>setSelected([...selectedData,d])} variant='outlined' sx={styles.item}>{d}</Button>
                        )
                    })
                    }
                </Box>
            </Box>
            <Box sx={styles.itemss} >
                {
                    selectedData?.map((s,index)=>{
                        return (
                            <Button title='click to remove' variant='contained' onClick={()=>removeItem(index)} sx={[styles.item,{marginTop:'2%'}]} >{s}</Button>
                        )
                    })
                }
            </Box>
        </Box>
    )
}
const styles = {
    container: {
        width: '100%',
        borderRadius: '4px',
        border: '1px solid #cdcdcd',
        overflow:'hidden'
    },
    textfield: {
        width: '100%'
    },
    items: {
        display: 'flex',
        padding: '10px 14px',
        marginTop: '15px',
        width:'96.5%',
        overflowX:'scroll',
    },
    item: {
        fontSize: '14px',
        borderRadius: '8px',
        textTransform: 'none',
        marginLeft:'10px',
        minWidth:'150px',
        whiteSpace:'nowrap'
    },
    itemss:{
        display: 'flex',
        padding: '10px 14px',
        marginTop: '15px',
        width:'96.5%',
        flexWrap:'wrap'
    }
}
export default CustomeSelect