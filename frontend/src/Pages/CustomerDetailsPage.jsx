import { useState } from "react";
import { Link } from "react-router-dom";


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

export default function CustomerDetailsPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Details</h1>
      
      </header>

      <div className="bg-gray-900 rounded-2xl shadow p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-bold">user id</h2>
            <div className="flex items-center gap-4 mt-2">

              <img src="https://i.pravatar.cc/40?img=5" alt="Arlene McCoy" className="rounded-full" />
              <span className="font-medium">Arlene McCoy</span>
              <span className=" text-sm bg-gray-900 px-2 py-1 rounded-full">Role:<strong> User</strong></span>

              <div className="  ml-auto flex items-center w-1/3 gap-3">
          <Link to='/edit/123' className="w-full border py-2 rounded cursor-pointer hover:text-gray-300 text-center">Edit</Link>
          <button className="w-full border text-red-600 py-2 rounded cursor-pointer hover:text-red-400">Delete</button>
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
              <th>Assigned</th><th>Status</th>
              
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
  );
}
