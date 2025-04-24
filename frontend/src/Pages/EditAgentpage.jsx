import { useState } from "react";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

const tickets = [
  {
    number: "INC4568",
    date: "04/12/23",
    subject: "Can't sign into finance app",
    user: "Marcos.27",
    location: "Building 7",
    room: "402",
    service: "Software",
    assigned: null,
    status: "pending",
    update: "None",
  },   {
    number: "INC4568",
    date: "04/12/23",
    subject: "Can't sign into finance app",
    user: "Marcos.27",
    location: "Building 7",
    room: "402",
    service: "Software",
    assigned: "Hazer",
    status: "open",
    update: "None",
  },   {
    number: "INC4568",
    date: "04/12/23",
    subject: "Can't sign into finance app",
    user: "Marcos.27",
    location: "Building 7",
    room: "402",
    service: "Software",
    assigned: "Robert",
    status: "closed",
    update: "None",
  },
  // ... More ticket objects here
];

export default function EditAgentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    department: "",
    status: "active",
    ticketsAssigned: 0,
    ticketsCompleted: 0,
    role:""
  });
  const [isEditOpen,setIsEditOpen]=useState(false)

  const handleChange = (e) => {
    const { username, value } = e.target;
    setFormData((prev) => ({ ...prev, [username]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      username: "",
      email: "",
      phone: "",
      department: "",
      status: "active",
      ticketsAssigned: 0,
      ticketsCompleted: 0,
    });
  };

  return (<div className="flex items-start justify-center ">





{/* left side */}

<div className="min-h-screen bg-gray-900 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Agent Details</h1>
        
        </header>
  
        <div className="bg-gray-900 rounded-2xl shadow p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold">agent id</h2>
              <div className="flex items-center gap-4 mt-2">
  
                <img src="https://i.pravatar.cc/40?img=5" alt="Arlene McCoy" className="rounded-full" />
                <span className="font-medium">Arlene McCoy</span>
                <span className=" text-sm bg-gray-900 px-2 py-1 rounded-full">Role:<strong> Agent</strong></span>
  
                <div className="  ml-auto flex items-center w-1/3 gap-3">
           
           <div className=" w-full"
            onClick={()=>setIsEditOpen(!isEditOpen)}>
{isEditOpen? (
  <button
  className="w-full border px-10 rounded cursor-pointer hover:text-gray-300 mx-auto text-center">Cancel</button>
):(
  <button  
           className="w-full border  px-10 rounded cursor-pointer hover:text-gray-300 text-center">Edit</button>
)}



           </div>
         
            <button className="w-full px-3 border text-red-600  rounded cursor-pointer hover:text-red-400">Delete</button>
          </div>
              </div>
  
  
            
  
            </div>
  
            <div>
              <h3 className="text-md font-semibold mb-2 text-emerald-500">Active</h3>
              <p><strong>Active Since:</strong> February 24, 2023</p>
              <p>arlenemccoy@gmail.com</p>
            </div>
  
            <div>
              <h3 className="text-md font-semibold mb-2">Tickets History</h3>
         
  
  <table className="w-full text-sm text-left">
            <thead  className=''>
              <tr className="">
                <th># id</th>
                <th>Date</th>
                <th>Subject</th>
                <th>Service</th>
                <th >Created By</th><th>Status</th>
                
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket, index) => (
                <tr key={index} className="border-b  border-gray-800 h-10  ">
                 
                  <td>
                    <Link to="/admin/view-ticket/123" className="cursor-pointer text-blue-400 underline">{ticket.number}</Link>
                    </td>
                  <td>{ticket.date}</td>
                  <td>{ticket.subject}</td>
                  
                
                  <td>{ticket.service}</td>
                  <td > {ticket.assigned?ticket.assigned : "###"} </td>
                  
                  <td className={`${ticket.status=="pending"?`text-red-500`:`${ticket.status=='open'?`text-blue-500`:`text-green-500`}`} capitalize`}>{ticket.status}</td>
                
                </tr>
              ))}
            </tbody>
          </table>
             </div> 
  
           
          
  
      
  
      </div>
  
      </div>
      
      
      
      
      
      
      
      
   
        
      
      
      
      
      </div>



  
 
  
  {/* ----------------------right side ------------------*/}
  


  <AnimatePresence>

  </AnimatePresence>

{
  isEditOpen && (
    <motion.form
    initial={{ opacity: 0, x: 10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 10 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    
    
    onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-900 p-6 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-semibold text-center">Edit Agent</h2>


<div className="flex items-center justify-center gap-5 ">
<div className=" w-1/2">
        <label className="block text-sm font-medium ">Username </label>
        <input
          type="text"
          name="name"
          value={formData.username}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-400 rounded"
        />
      </div>

      <div className=" w-1/2">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-400 rounded"
        />
      </div>

      </div>

      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-400 rounded"
        />
      </div>

 

      <div className="flex items-center justify-center gap-5 ">

      <div className=" w-1/2">
        <label className="block mb-1 text-sm font-medium">Department</label>
        <select
        onChange={handleChange}
          type="text"
          name="department"
          value={formData.department}
        //   disabled
          className="w-full bg-gray-900 border border-gray-400 rounded px-3 py-2 cursor-pointer"
        >
        {/* <option value="customer">Customer</option> */}
        <option value="general-support">General Support</option>
        <option value="hardware-issue">Hardware Issues</option>
        <option value="billing-payments">Billing & Payments</option>
        <option value="returns-cancellations">Returns & Cancellations</option>
        <option value="technical-support">Technical Support</option>

        
        </select>
      </div>

      <div className=" w-1/2">
        <label className="block mb-1 text-sm font-medium">Role</label>
        <select
        onChange={handleChange}
          type="text"
          name="role"
          value={formData.role}
        //   disabled
          className="w-full bg-gray-900 border border-gray-400 rounded px-3 py-2 cursor-pointer"
        >
        {/* <option value="customer">Customer</option> */}
        <option value="agent">Agent</option>
        <option value="admin">Admin</option>
        {/* <option value="admin">Admin</option> */}
        </select>
      </div>

      </div>





      <div>
        <label className="block text-sm font-medium">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-400 rounded bg-gray-900"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Tickets Assigned</label>
          <input
            type="number"
            name="ticketsAssigned"
            value={formData.ticketsAssigned}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-400 rounded"
            min={0}
          />
        </div> */}

        {/* <div>
          <label className="block text-sm font-medium">Tickets Completed</label>
          <input
            type="number"
            name="ticketsCompleted"
            value={formData.ticketsCompleted}
            onChange={handleChange}
            className="mt-1 p-2 w-full border  border-gray-400rounded"
            min={0}
          />
        </div>
      </div> */}

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
        Save Changes
      </button>
    </motion.form>
  )
}









  
  
     
   </div> )}











