
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

const upload = () => {

    const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('http://localhost:8081/api/pdf/upload', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      throw new Error('Upload failed');
    }

    return res.text();
  };

  const handleUpload = () => {
    if (!file) {
      setMessage('Please select a file first.');
      return;
    }
    setMessage('');
    mutation.mutate(file);
  };

   const mutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      setMessage('✅ File uploaded successfully!');
      alert('File uploaded successfully!');
    },
    onError: () => {
      setMessage('❌ Error uploading file.');
    },
  });


  return (
   <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">📤 Upload PDF File</h2>

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-4 w-full border border-gray-300 rounded px-3 py-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />

        <button
          onClick={handleUpload}
          disabled={mutation.isLoading}
          className={`w-full py-2 px-4 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition ${
            mutation.isLoading && 'opacity-50 cursor-not-allowed'
          }`}
        >
          {mutation.isLoading ? 'Uploading...' : 'Upload'}
        </button>

        {message && <p className="mt-4 text-center text-sm text-gray-700">{message}</p>}
      </div>
    </div>
  )
}

export default upload