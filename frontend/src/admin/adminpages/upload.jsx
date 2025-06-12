import React from 'react'

const upload = () => {
  return (
    <div>



      <h1 className='text-2xl font-bold text-center mt-10'>Upload Documents</h1>
      <div className='flex justify-center mt-10'>
        <form className='bg-white p-6 rounded-lg shadow-md w-1/2'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='file'>Select File:</label>
            <input type='file' id='file' className='border border-gray-300 p-2 w-full' />
          </div>
          <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Upload</button>
        </form>
    </div>
    </div>
  )
}

export default upload