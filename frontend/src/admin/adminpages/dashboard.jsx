import React from 'react'
import Sidebar from '../admincomponents/sidebar';
import { motion } from 'framer-motion';
const dashboard = () => {

const cardData = [
  {
    title: 'Birth Requests',
    count: 120,
    bg: 'bg-pink-200',
  },
  {
    title: 'Marriage Requests',
    count: 85,
    bg: 'bg-green-200',
  },
  {
    title: 'Death Requests',
    count: 45,
    bg: 'bg-red-200',
  },
  {
    title: 'Uploads',
    count: 200,
    bg: 'bg-blue-200',
  },
];


  return (


 <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl shadow-lg text-center ${card.bg}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-3xl font-bold mt-3">{card.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    
    
  );
};

export default dashboard;
