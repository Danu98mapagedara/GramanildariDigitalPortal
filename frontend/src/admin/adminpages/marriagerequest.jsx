import React ,{ useState }from 'react'
import { useQuery } from '@tanstack/react-query';
import Sidebar from '../admincomponents/sidebar'
import { FaTrashAlt, FaEye } from 'react-icons/fa';
import Switch from 'react-switch';



const marriagerequest = () => {
   const [status, setStatus] = useState({});

     const handleStatusToggle = (id) => {
    setStatus((prev) => ({
      ...prev,
      [id]: prev[id] === 'Approved' ? 'Rejected' : 'Approved',
    }));
  };
   const handleViewPDF = (request) => {
    const content = `
      <h1>Marriage Request</h1>
      <p><strong>Bride:</strong> ${request.brideFullName}</p>
      <p><strong>Groom:</strong> ${request.groomFullName}</p>
      <p><strong>Date:</strong> ${request.marriageDate}</p>
      <p><strong>Email:</strong> ${request.email}</p>
      <p><strong>Phone:</strong> ${request.contactNumber}</p>
    `;

    const newWindow = window.open();
    newWindow.document.write(content);
    newWindow.document.close();
    newWindow.print(); 
    newWindow.close();
  };

const fetchMarriageRequests = async () => {

try{
  const res=await fetch("http://localhost:8081/api/marriageform");
  if(!res.ok){
    throw new Error("Network response was not ok");
  }
  return await res.json();
}
catch(error){
  console.error("Error fetching marriage requests:", error);
  throw error; 

}


}
const {data, isLoading, error} = useQuery({
  queryKey: ['marriageRequests'],
  queryFn: fetchMarriageRequests,
});

  return (
    <div className="flex min-h-screen bg-gray-100">

<Sidebar/>

 <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-8">Marriage  Form Requests</h1>



         {isLoading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">Error: {error.message}</div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow p-4">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-4 py-2">Bride Name</th>
                  <th className="px-4 py-2">Groom Name</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((request) => (
                  <tr key={request.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{request.brideFullName}</td>
                    <td className="px-4 py-2">{request.groomFullName}</td>
                    <td className="px-4 py-2">{request.marriageDate}</td>
                    <td className="px-4 py-2">{request.email}</td>
                    <td className="px-4 py-2">{request.contactNumber}</td>
                    <td className="px-4 py-2">
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
        )}
        </div>


    </div>
  )
}

export default marriagerequest