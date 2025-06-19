import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import images from "../../constants/images";
import { useUser } from '../../context/context';

const Profile = () => {
  const { userData, setUserData } = useUser();
  const [isEdit, setIsEdit] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // Fill form when data changes
  useEffect(() => {
    reset(userData);
  }, [userData, reset]);

  const onSubmit = (data) => {
    setUserData(data);
    setIsEdit(false);
  };

  return (
    <div className='min-h-screen bg-gray-100 justify-center p-4'>
      <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>👤 My Profile</h2>

      <div className='bg-white flex gap-4 p-4 rounded-lg'>
        <div className='border-2 rounded-xl'>
          <img src={images.profile} alt="Profile" className="w-32 h-32 object-cover rounded-xl" />
        </div>
        <div>
          <h5 className='text-green-600 font-semibold text-lg'>{userData.fname} {userData.lname}</h5>
          <p className='text-sm'>{userData.role}</p>
          <p className='text-sm'>{userData.address}</p>
        </div>
      </div>

      <h1 className='mt-6 text-lg font-bold'>Personal Information</h1>
      <form
       key={isEdit} 
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white border-2 p-6 mt-2 rounded-lg'
      >
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div>
            <label>First Name</label>
            <input
              type="text"
              {...register("fname", { required: true })}
              disabled={!isEdit}
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              type="text"
              {...register("lname", { required: true })}
              disabled={!isEdit}
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div>
            <label>Date of Birth</label>
            <input
              type="date"
              {...register("dob", { required: true })}
              disabled={!isEdit}
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div>
            <label>Address</label>
            <input
              type="text"
              {...register("address", { required: true })}
              disabled={!isEdit}
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              disabled={!isEdit}
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div>
            <label>Phone Number</label>
            <input
              type="text"
              {...register("pnumber", { required: true })}
              disabled={!isEdit}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          {!isEdit ? (
            <button
              type="button"
              onClick={() => setIsEdit(true)}
              className="px-6 py-2 bg-orange-400 text-white rounded hover:bg-orange-500 transition"
            >
              Edit
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Update
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Profile;
