import React from 'react'
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import images from '../../constants/images';

const MarriageForm = () => {


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  }=useForm();
  
  const mutation=useMutation({
    mutationFn:async(formData)=>{
      return await axios.post("http://localhost:8081/api/marriageform", formData);
    }
    ,
    onSuccess: () => {
      alert("Marriage request submitted successfully!");
      reset();
    },
    onError: (error) => {
      console.error("Submission error:", error);
      alert("Something went wrong!");
    },
  })
  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-white shadow-md rounded-xl w-1/2 mx-auto p-8 space-y-6 overflow-hidden"
       
      >

          <div className="absolute inset-0 z-0"
    style={{
      backgroundImage: `url(${images.dir})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(5px)',
      opacity: 0.4,
    }}
  ></div>
        <h2 className="text-2xl font-bold text-center text-green-700 mb-4">
          Marriage Certificate Request
        </h2>

        <div className="max-w-full mx-auto space-y-8 p-4 px-5">
          <div>
            <label className="block font-medium">Bride's Full Name</label>
            <input className="border-2   p-1 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black-500" 
              {...register("brideFullName", { required: true })}
             
              placeholder="Bride's full name"
            />
            {errors.brideFullName && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <label className="block font-medium">Groom's Full Name</label>
            <input
              {...register("groomFullName", { required: true })}
               className="border-2   p-1 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black-500" 
              placeholder="Groom's full name"
            />
            {errors.groomFullName && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <label className="block font-medium">Marriage Date</label>
            <input
              type="date"
              {...register("marriageDate", { required: true })}
              className="border-2   p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black-500" 
            />
            {errors.marriageDate && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <label className="block font-medium">Place of Marriage</label>
            <input
              {...register("placeOfMarriage", { required: true })}
             className="border-2   p-1 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black-500" 
              placeholder="Location"
            />
            {errors.placeOfMarriage && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <label className="block font-medium">Bride's Address</label>
            <input
              {...register("addressBride", { required: true })}
               className="border-2   p-1 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black-500" 
              placeholder="Address"
            />
            {errors.addressBride && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <label className="block font-medium">Groom's Address</label>
            <input
              {...register("addressGroom", { required: true })}
             className="border-2   p-1 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black-500" 
              placeholder="Address"
            />
            {errors.addressGroom && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <label className="block font-medium">Contact Number</label>
            <input
              {...register("contactNumber", { required: true })}
            className="border-2   p-1 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black-500" 
              placeholder="Phone"
            />
            {errors.contactNumber && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="border-2   p-1 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black-500" 
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-1/4 py-2 px-5 ml-9 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  )
}

export default MarriageForm