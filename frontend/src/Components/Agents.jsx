
  


import {Link} from 'react-router-dom'
import { FaEye, FaPlus } from "react-icons/fa";


const Agents = () => {
 const agents=   [
        {
          "id": "101",
          "name": "Olivia Martinez",
          "email": "olivia.martinez@example.com",
          "username": "oliviam",
          "password": "hashedpassword123",
          "role": "customer_service_agent",
          "phone": "+1-202-555-0123",
          "department": "Technical Support",
          "createdAt": "2024-04-01T09:10:00Z",
          "status": "active",
          "ticketsAssigned": 23,
          "ticketsCompleted": 18
        },
        {
          "id": "102",
          "name": "Liam Thompson",
          "email": "liam.thompson@example.com",
          "username": "liamt",
          "password": "hashedpassword123",
          "role": "customer_service_agent",
          "phone": "+1-202-555-0176",
          "department": "Billing",
          "createdAt": "2024-04-02T11:45:00Z",
          "status": "active",
          "ticketsAssigned": 15,
          "ticketsCompleted": 14
        },
        {
          "id": "103",
          "name": "Sophia Patel",
          "email": "sophia.patel@example.com",
          "username": "sophiap",
          "password": "hashedpassword123",
          "role": "customer_service_agent",
          "phone": "+1-202-555-0199",
          "department": "Account Management",
          "createdAt": "2024-04-03T08:30:00Z",
          "status": "inactive",
          "ticketsAssigned": 9,
          "ticketsCompleted": 9
        },
        {
          "id": "104",
          "name": "James Brown",
          "email": "james.brown@example.com",
          "username": "jamesb",
          "password": "hashedpassword123",
          "role": "customer_service_agent",
          "phone": "+1-202-555-0148",
          "department": "Technical Support",
          "createdAt": "2024-04-04T13:15:00Z",
          "status": "active",
          "ticketsAssigned": 30,
          "ticketsCompleted": 27
        },
        {
          "id": "105",
          "name": "Emma Wilson",
          "email": "emma.wilson@example.com",
          "username": "emmaw",
          "password": "hashedpassword123",
          "role": "customer_service_agent",
          "phone": "+1-202-555-0134",
          "department": "Customer Success",
          "createdAt": "2024-04-05T10:50:00Z",
          "status": "active",
          "ticketsAssigned": 12,
          "ticketsCompleted": 12
        }
      ]
      

  
    return (
      <div className="bg-gray-900 p-4 rounded shadow-md overflow-auto">


            <div className="flex justify-between items-center mb-6">
            <div className="text-xl font-semibold px-2 text-[#10b981] 
             flex items-center justify-center  gap-8">Agents



<Link to="/admin/create-agent" className="" title='Create Agent'>
            <FaPlus  className="fill-white" size={16} />
            {/* <span className=" -translate-x-1/2  mb-2 px-2 py-1 text-xs rounded opacity-100 group-hover:opacity-100 transition text-white">
    Create User
  </span> */}
            </Link>




            </div>
            <input className="w-1/4 border px-4 rounded-lg border-gray-600" placeholder="Search by id/user" />
          </div>


        <table className="w-full text-sm text-left">
          <thead  className=''>
            <tr className="">
              <th># id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Department</th>
               <th>Assigned</th>
              <th>Completed</th> 
              
            </tr>
          </thead>
          <tbody>
            {agents.map((customer, index) => (

                
              <tr key={index} className="border-b  border-gray-800 h-10  ">
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.username}</td>
                <td>{customer.email}</td>
                <td>{customer.department}</td>
                <td>{customer.ticketsAssigned}</td>
                <td>{customer.ticketsCompleted}</td>
                {/* <td>{new Date(customer.createdAt).toLocaleDateString()}</td> */}
                 <Link to={`/admin/edit-agent/123`} className='relative rounded-lg hover:bg-gray-800  top-3 px-4 left-5 '>
                 <span>View</span>  </Link>
                
                {/* <td className={`${customer.status=="pending"?`text-red-500`:`${customer.status=='open'?`text-blue-500`:`text-green-500`}`} capitalize`}>{customer.status}</td> */}
              
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Agents;
  