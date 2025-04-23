
import {Link} from 'react-router-dom'
import { FaEye } from "react-icons/fa";


const Tickets = () => {
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
  
    const getStatusColor = (status) => {
      if (status === "None" || status === "2 days") return "bg-red-100 text-red-600";
      if (status.includes("day")) return "bg-yellow-100 text-yellow-600";
      return "bg-green-100 text-green-600";
    };
  
    return (
      <div className="bg-gray-900 p-4 rounded shadow-md overflow-auto">


            <div className="flex justify-between items-center mb-6">
            <div className="text-xl font-semibold px-2 text-[#BB5CF6]">Tickets</div>
            <input className="w-1/4 border px-4 rounded-lg border-gray-600" placeholder="Search by id/user" />
          </div>


        <table className="w-full text-sm text-left">
          <thead  className=''>
            <tr className="">
              <th># id</th>
              <th>Date</th>
              <th>Subject</th>
              <th>User</th><th>Service</th>
              <th>Assigned</th><th>Status</th>
              
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={index} className="border-b  border-gray-800 h-10 cursor-pointer  hover:bg-gray-800">
                <td>{ticket.number}</td>
                <td>{ticket.date}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.user}</td>
              
                <td>{ticket.service}</td>
                <td > {ticket.assigned?ticket.assigned : "###"} </td>
                
                <td className={`${ticket.status=="pending"?`text-red-500`:`${ticket.status=='open'?`text-blue-500`:`text-green-500`}`} capitalize`}>{ticket.status}</td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Tickets;
  