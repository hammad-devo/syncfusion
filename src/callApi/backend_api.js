import axios from "axios";


const callApi= {
   getData: async (api)=>{
    try{
      const res=await axios.get(`http://localhost:4000${api}`,{
      withCredentials:true,
      headers:{
        access_token:window.localStorage.getItem('access_token')
      }
    });
    return res;
    }catch(err){ 
      return false;
    }
  },
  postData: async (api,data)=>{
    try{
      console.log(`http://localhost:4000${api}`)
      const res=await axios.post(`http://localhost:4000${api}`,data,{
      withCredentials:true,
      headers:{
        access_token:window.localStorage.getItem('access_token'),
      }
    });
    return res;
    }catch(err){ 
      return false;
    }
  },
  deleteData: async (api)=>{
    try{
      const res=await axios.delete(`http://localhost:4000${api}`,{
      withCredentials:true,
      headers:{
        access_token:window.localStorage.getItem('access_token')
      }
    });
    return res;
    }catch(err){ 
      return false;
    }
  },
  updateData: async (api,data)=>{
    try{
      const res=await axios.put(`http://localhost:4000${api}`,data,{
      withCredentials:true,
      headers:{
        access_token:window.localStorage.getItem('access_token')
      }
    });
    return res;
    }catch(err){ 
      return false;
    }
  },
  updateStatus: async (api,data)=>{
    try{
      const res=await axios.put(`http://localhost:4000${api}`,JSON.stringify({status:data}),{
      withCredentials:true,
      headers:{
        access_token:window.localStorage.getItem('access_token')
      }
    });
    return res;
    }catch(err){ 
      return false;
    }
  },
}
const {postData,getData,updateData,deleteData,updateStatus}=callApi
export {postData,getData,updateData,deleteData,updateStatus}