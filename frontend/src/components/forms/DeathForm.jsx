import React from 'react'
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const DeathForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,

  }=useForm();

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const formPayload = new FormData();
      for (const key in formData) {
        formPayload.append(key, formData[key]);
      }
      return axios.post("http://localhost:8081/api/deathform", formPayload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
  
  
  onSuccess: () => {
    alert("Death request submitted successfully!");
    reset();
  },
  onError: (error) => {
    console.error("Submission error:", error);
    alert("Something went wrong!");
  },

})
 const onSubmit = (data) => {
    if (data.identityCardImage.length > 0) {
      data.imageFileName = data.identityCardImage[0].name;
      data.imageContentType = data.identityCardImage[0].type;
    }
    mutation.mutate(data);
  };

  return (
   <div className=" bg-gray-100 flex items-center justify-center">

   <div className="max-w-3xl w-full p-8 bg-white rounded-xl shadow-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold text-center text-red-700 mb-4">
          Death Certificate Request
        </h2>

   
          <div className='w-full  justify-center mb-4'>
            <label className="block font-medium">Full Name of Deceased</label>
            <input
              {...register("fullNameOfDeceased", { required: true })}
            
              placeholder="Full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.fullNameOfDeceased && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <label className="block font-medium">Date of Death</label>
            <input
              type="date"
              {...register("dateOfDeath", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.dateOfDeath && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <label className="block font-medium">Place of Death</label>
            <input
              {...register("placeOfDeath", { required: true })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Location"
            />
            {errors.placeOfDeath && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <label className="block font-medium">Cause of Death</label>
            <input
              {...register("causeOfDeath", { required: true })}
             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="E.g. Natural causes"
            />
            {errors.causeOfDeath && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <label className="block font-medium">Address of Deceased</label>
            <input
              {...register("addressOfDeceased", { required: true })}
             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Address"
            />
            {errors.addressOfDeceased && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <label className="block font-medium">Requester Name</label>
            <input
              {...register("requesterName", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your name"
            />
            {errors.requesterName && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <label className="block font-medium">Requester NIC</label>
            <input
              {...register("requesterNIC", { required: true })}
           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="NIC"
            />
            {errors.requesterNIC && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <label className="block font-medium">Relationship</label>
            <input
              {...register("requesterRelationship", { required: true })}
               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g. Son, Daughter"
            />
            {errors.requesterRelationship && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <label className="block font-medium">Contact Number</label>
            <input
              {...register("requesterContact", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Phone"
            />
            {errors.requesterContact && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              {...register("requesterEmail", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Email"
            />
            {errors.requesterEmail && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium">NIC Image Upload</label>
            <input
              type="file"
              accept="image/*"
              {...register("identityCardImage", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.identityCardImage && (
              <span className="text-red-500 text-sm">Image required</span>
            )}
          </div>
       
         <button
          type="submit"
           className=" w-1/4 py-2 px-1 bg-green-700 text-white font-semibold rounded-lg  hover:bg-red-800 transition"
>
        
          Submit Request
        </button>
        
      
      </form>
 
      </div>
       
    </div>
  )
}

export default DeathForm