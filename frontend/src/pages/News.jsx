import React from 'react'
import { useQuery } from '@tanstack/react-query';
import  images  from '../constants/images'

const News = () => {

const fetchNews = async () => {
  try {
    const response = await fetch("http://localhost:8081/api/news");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json(); 
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error; 
  }
};


const{data, isLoading, error} = useQuery({
  queryKey: ['news'],
  queryFn: fetchNews,
});



  return (
    <div className='text-2xl text-red-600'>
      {isLoading ? (
        <div>Loading....</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className='p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
          {data.map((newsItem) => (
            <div key={newsItem.id} className=' m-2 p-3  border-2 border-b-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <img src={images.taximg} width={100} alt="" />
              <h2 className='to-red-200 text-xl font-bold '>{newsItem.title}</h2>
              <p className='text-gray-700'>{newsItem.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
  


export default News