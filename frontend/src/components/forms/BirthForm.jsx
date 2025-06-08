import React from 'react'
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const BirthForm = () => {

const{
    register,
    handleSubmit,
    formState: { errors },
    reset,

}= useForm();

  const mutation = useMutation({
    mutationFn: (formData) =>
      axios.post("http://localhost:8080/api/birth", formData), 
    onSuccess: () => {
      alert("Birth request submitted successfully!");
      reset();
    },
    onError: (error) => {
      console.error("Submission error:", error);
      alert("Something went wrong!");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };


  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="max-w-3xl w-full p-8 bg-white rounded-xl shadow-md">


 <h2 className="text-2xl font-bold text-green-700 my-11 text-center">
        Birth Certificate Request
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Child's Info */}
        <div>
          <label className="block mb-1 font-semibold">Child's Full Name</label>
          <input
            type="text"
            {...register("fullNameOfChild", { required: true })}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Date of Birth</label>
          <input
            type="date"
            {...register("dateOfBirth", { required: true })}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Place of Birth</label>
          <input
            type="text"
            {...register("placeOfBirth", { required: true })}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Gender</label>
          <select
            {...register("gender", { required: true })}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Parents' Info */}
        <div>
          <label className="block mb-1 font-semibold">Father's Name</label>
          <input
            type="text"
            {...register("fatherName", { required: true })}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Mother's Name</label>
          <input
            type="text"
            {...register("motherName", { required: true })}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Address</label>
          <textarea
            {...register("address", { required: true })}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        {/* Requester Info */}
        <div>
          <label className="block mb-1 font-semibold">Requester Name</label>
          <input
            type="text"
            {...register("requesterName", { required: true })}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Requester NIC</label>
          <input
            type="text"
            {...register("requesterNIC", { required: true })}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Relationship</label>
          <input
            type="text"
            {...register("requesterRelationship", { required: true })}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Contact</label>
          <input
            type="text"
            {...register("requesterContact", { required: true })}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            {...register("requesterEmail", { required: true })}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="w-1/2 bg-green-700 text-white py-2 rounded hover:bg-green-800" align="center"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
     
    </div>
  )
}

export default BirthForm