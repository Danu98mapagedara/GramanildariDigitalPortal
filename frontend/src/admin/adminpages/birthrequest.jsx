
import React ,{ useState }from 'react'
import { useQuery } from '@tanstack/react-query';
import Sidebar from '../admincomponents/sidebar'
import { FaTrashAlt, FaEye } from 'react-icons/fa';
import Switch from 'react-switch';


const birthrequest = () => {

  const [status, setStatus] = useState({});


const fetchBirthRequests=async()=>{
 try{
  const res=await  fetch("http://localhost:8081/api/birthform");
  if(!res.ok){
    throw new Error("Network response was not ok");
  }
  return await res.json();
 }

  catch(error){
    console.error("Error fetching birth requests:", error);
    throw error; 
  }
 

}
 const{data, isLoading, error} = useQuery({
    queryKey: ['birthRequests'],
    queryFn: fetchBirthRequests,
  });


  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-8">Birth Requests</h1>
        <p className="text-gray-600 mb-4">This page will display all the birth requests.</p>

{isLoading?(<div>Loading...</div>):error?(<div>Error: {error.message}</div>)
:( 
<div className="overflow-x-auto  bg-white rounded-lg shadow-md p-4">
 <table className='min-w-full text-left'>

<thead className='bg-gray-200 text-gray-800'>
  <tr>
    <th className='px-4 py-2'>Child Name</th>
    <th className='px-4 py-2'>Father Name</th>
    <th className='px-4 py-2'>Mother Name</th>
    <th className='px-4 py-2'>Date of Birth</th>
    <th className='px-4 py-2'>Address</th>
    <th className='px-4 py-2'>Phone</th>
     <th className='px-4 py-2'>Email</th>
    <th className='px-4 py-2'>Status</th>
    <th className='px-4 py-2'>Actions</th>
  </tr>
</thead>

<tbody>

{data.map((request) => (
 <tr key={request.id} className="border-t hover:bg-gray-50">

<td className='px-4 py-2'>{request.fullNameOfChild}</td>
<td className='px-4 py-2'>{request.fatherName}</td>  
<td className='px-4 py-2'>{request.motherName}</td>
<td className='px-4 py-2'>{request.dateOfBirth}</td>
<td className='px-4 py-2'>{request.address}</td>
<td className='px-4 py-2'>{request.requesterContact}</td>
<td className='px-4 py-2'>{request.requesterEmail}</td>
<td className='px-4 py-2'>


  <Switch
                        onChange={() => handleStatusToggle(request.id)}
                        checked={status[request.id] === 'Approved'}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onColor="#34D399"
                        offColor="#F87171"
                      />
                      <span className="ml-2 text-sm font-medium">
                        {status[request.id] || 'Pending'}
                      </span>



</td>

 <td className="px-4 py-2 flex items-center space-x-3">
                      <button
                        onClick={() => handleViewPDF(request)}
                        className="text-blue-600 hover:text-blue-800"
                        title="View"
                      >
                        <FaEye size={18} />
                      </button>
                      <button
                        onClick={() => alert('Delete functionality here')}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        <FaTrashAlt size={18} />
                      </button>
                    </td>

 </tr>
                ))}

</tbody>
 </table>



</div>
  
) 


}
      
      </div>




    </div>
  )
}

export default birthrequest