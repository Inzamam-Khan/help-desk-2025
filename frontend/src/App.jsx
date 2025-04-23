import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import UserPage from './Pages/UserPage'
import Adminpage from './Pages/Adminpage'
import Agentpage from './Pages/Agentpage'
import CustomerDetailsPage from './Pages/CustomerDetailsPage'
import EditForm from './Pages/Editpage'
import CreateTicket from './Pages/CreateTicket'
import ViewTicketForm from './Pages/ViewTicket'
function App() {
  const [count, setCount] = useState(0)
  

 return(
<div className="  bg-gray-900 text-gray-100 overflow-hidden h-full w-full">

{/* <div className="  border-green-500"> {/* fixed inset-0  z-0 */}
      {/* <div className=" border-red-500 absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  "></div>
      <div className="absolute  border-blue-500 inset-0 backdrop-blur-sm"></div>
      </div> */} 
    
<Routes>


<Route path='/login' element=""/> {/*login*/}
<Route path='/signup' element=""/>{/*signup*/}
<Route path="/admin" element={<Adminpage/>}/>{/*home*/}
<Route path='/admin/view-customer/123' element={<CustomerDetailsPage/>}/>home
<Route path='/admin/create-ticket' element={<CreateTicket/>}/>
<Route path='/admin/view-ticket/123' element={<ViewTicketForm/>}/>

<Route path='/edit/123' element={<EditForm/>}/>


</Routes>


 </div>
 
 )
}

export default App
