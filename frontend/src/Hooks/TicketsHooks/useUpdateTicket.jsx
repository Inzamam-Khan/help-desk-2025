import { useState } from "react"

import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux"
import {addTicket, updateTicket} from '../../Store/Actions/ticketActions'

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
export function useUpdateTicket(){

    
    const [loading,setLoading]=useState(false)
    
    const dispatch=useDispatch()
    
    

const updateTicket=async(id,payload)=>{
    

    setLoading(true)

    try {
        const res=await fetch(`/api/tickets/update/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        let {updatedTicket,success,message}=await res.json()
        if(!updatedTicket || !success) throw new Error(message);
        
        else
        {   
            toast.success("Ticket Updated Successfully")
            dispatch(updateTicket(updatedTicket))
            
            
            // localStorage.setItem("authInfo",JSON.stringify(user))
            
        }
        
    } catch (error) {
        
        toast.error(error.message,{
            duration: 3000,
          },
            {
        
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
              
            },
          )
      
        return error.message
        
    }
    finally{
        setLoading(false)
    }
  

}


return{updateTicket,loading}



}