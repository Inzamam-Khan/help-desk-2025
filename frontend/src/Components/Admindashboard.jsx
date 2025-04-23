import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";



const data = [
  { name: "Desktops", stock: 60 },
  { name: "Laptops", stock: 40 },
  { name: "Tablets", stock: 25 },
];

export default function Admindashboard() {
  return (
    <div className=" bg-gray-900 min-h-screen w-full border-red-500  p-6 text-gray-300">
      <div className="grid grid-cols-6 gap-6  ">
        {/* Sidebar */}
      

        {/* Main Content */}
        <main className="col-span-8 space-y-6  ">
          {/* Top Bar */}
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold px-2 text-[#6366f1]">Dashboard</div>
            <input className="w-1/4 border px-4 rounded-lg border-gray-600" placeholder="Search..." />
          </div>

          {/* Ticket Sections */}
          <div className="grid grid-cols-3 gap-4  w-full">
          
            <div className="col-span-2 ">
              <div>
                <div className="flex justify-between items-center mb-4 px-5 ">
                  <div className="font-semibold text-lg">Tickets</div>
                  <select className="border border-gray-600 rounded px-2 py-1 text-sm">
                    <option>View All Tickets</option>
                  </select>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-300 ">
                      <th className="text-left">Number</th>
                      <th className="text-left">Date</th>
                      <th className="text-left">Subject</th>
                      <th className="text-left">User</th>
                      <th className="text-left">Status</th>
                      <th className="text-left">Last Update</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    <tr className=" border-red-500 h-10 ">
                      
                  <Link to="/admin/view-ticket/123" className="cursor-pointer text-blue-400 underline">
                  <td>INC4568</td>
                  </Link>
                  
                      <td>04/12/23</td>
                      <td>Error when starting Microsoft Word</td>
                      <td>Marso.27</td>
                      <td>WIP</td>
                      <td><span className="bg-green-100 text-green-700 px-2 py-1 rounded">23min</span></td>
                    </tr>

                    <tr className=" border-red-500 h-10 ">
                      <td>INC4568</td>
                      <td>04/12/23</td>
                      <td>Error when starting Microsoft Word</td>
                      <td>Marso.27</td>
                      <td>WIP</td>
                      <td><span className="bg-green-100 text-green-700 px-2 py-1 rounded">23min</span></td>
                    </tr>

                    <tr className=" border-red-500 h-10 hover:bg-gray-800 cursor-pointer">
                      <td>INC4568</td>
                      <td>04/12/23</td>
                      <td>Error when starting Microsoft Word</td>
                      <td>Marso.27</td>
                      <td>WIP</td>
                      <td><span className="bg-green-100 text-green-700 px-2 py-1 rounded">23min</span></td>
                    </tr>
                    {/* <!-- Add more rows as needed --> */}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-l border-t border-gray-600">
              <div>
                <div className="font-semibold text-lg mb-2 pl-2">Unassigned Tickets</div>
                {/* 3 */}
                
                <div className="text-sm space-y-2  px-2">
                  <div className="flex justify-between items-center">
                   
                    <div>
                      <div className="font-medium">RITM4579</div>
                      <div className="text-xs text-gray-500">Need assistance with PowerPoint</div>
                    </div>
                    <select className="border border-gray-600 bg-gray-900  rounded px-2 py-1 text-sm">
                      <option>Select Technician</option>
                      <option>Levinson.2</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>












          {/* Bottom Sections */}
          <div className="grid grid-cols-1 gap-4  border-green-500">
            <div className="mx-auto  w-full">
              <div className=" mx-auto">
                <div className=" flex items-center gap-4 justify-start font-semibold text-lg mb-2 px-2 mx-auto  text-center   text-[#6366f1]">My Notes

                <button size="sm" className=" cursor-pointer"><FaPlus  className="fill-white" size={16} /> </button>
                </div>
                

                  <div className="text-sm space-y-2 border-b border-gray-600 pb-1 px-2 mb-2">
                  <div className="flex justify-between items-center">
                   




                    <div>
                      <div className="font-medium">RITM4579</div>
                      <div className="text-xs text-gray-500">Need assistance with PowerPoint</div>
                    </div>


                    <div>
                      <div className="font-medium">Created At</div>
                      <div className="text-xs text-gray-500">{new Date().toLocaleTimeString()}</div>
                    </div>






                    <select className="border border-gray-600 bg-gray-900 rounded px-2 py-1 text-sm">
                      <option> Pending</option>
                      <option> Done</option>
                      <option> Working</option>
                    </select>
                  </div>
                </div>








                
              </div>
            </div>
           
            <div>
            
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
