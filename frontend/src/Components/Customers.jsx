


import {Link} from 'react-router-dom'
import { FaEye } from "react-icons/fa";


const Customers = () => {
   const customers= [
        {
          "id": "1",
          "name": "Alice Johnson",
          "email": "alice.johnson@example.com",
          "username": "alicej",
          "password": "hashedpassword123",
          "role": "customer",
          "createdAt": "2024-04-01T10:20:30Z"
        },
        {
          "id": "2",
          "name": "Bob Smith",
          "email": "bob.smith@example.com",
          "username": "bob_smith",
          "password": "hashedpassword123",
          "role": "customer_service_agent",
          "createdAt": "2024-04-02T12:45:00Z"
        },
        {
          "id": "3",
          "name": "Charlie Green",
          "email": "charlie.green@example.com",
          "username": "charlieg",
          "password": "hashedpassword123",
          "role": "admin",
          "createdAt": "2024-04-03T08:15:10Z"
        },
        {
          "id": "4",
          "name": "Dana Lee",
          "email": "dana.lee@example.com",
          "username": "dlee",
          "password": "hashedpassword123",
          "role": "customer",
          "createdAt": "2024-04-04T14:30:00Z"
        },
        {
          "id": "5",
          "name": "Ethan Wright",
          "email": "ethan.wright@example.com",
          "username": "ethanw",
          "password": "hashedpassword123",
          "role": "customer_service_agent",
          "createdAt": "2024-04-05T11:00:00Z"
        }
      ]
      
  
    const getStatusColor = (status) => {
      if (status === "None" || status === "2 days") return "bg-red-100 text-red-600";
      if (status.includes("day")) return "bg-yellow-100 text-yellow-600";
      return "bg-green-100 text-green-600";
    };
  
    return (
      <div className="bg-gray-900 p-4 rounded shadow-md overflow-auto">


            <div className="flex justify-between items-center mb-6">
            <div className="text-xl font-semibold px-2 text-[#ec4899]">Customers</div>
            <input className="w-1/4 border px-4 rounded-lg border-gray-600" placeholder="Search by id/user" />
          </div>


        <table className="w-full text-sm text-left">
          <thead  className=''>
            <tr className="">
              <th># id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Active Since</th>
              {/* <th>Assigned</th><th>Status</th> */}
              
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (

                
              <tr key={index} className="border-b  border-gray-800 h-10  ">
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.username}</td>
                <td>{customer.email}</td>
              
                <td>{new Date(customer.createdAt).toLocaleDateString()}</td>
                 <Link to={`/admin/view-customer/123`} className='relative rounded-lg hover:bg-gray-800  top-3 px-4 left-5 '>
                 <span>View</span>  </Link>
                
                {/* <td className={`${customer.status=="pending"?`text-red-500`:`${customer.status=='open'?`text-blue-500`:`text-green-500`}`} capitalize`}>{customer.status}</td> */}
              
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Customers;
  