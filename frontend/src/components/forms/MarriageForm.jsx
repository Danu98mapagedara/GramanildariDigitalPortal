import React from 'react'
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const MarriageForm = () => {


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  }=useForm();
  
  const mutation=useMutation({
    mutationFn:async(formData)=>{
      return await axios.post("http://localhost:8080/api/marriage", formData);
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
        className="bg-white shadow-md rounded-xl max-w-3xl w-full p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-green-700 mb-4">
          Marriage Certificate Request
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Bride's Full Name</label>
            <input
              {...register("brideFullName", { required: true })}
              className="input"
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
              className="input"
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
              className="input"
            />
            {errors.marriageDate && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>

          <div>
            <label className="block font-medium">Place of Marriage</label>
            <input
              {...register("placeOfMarriage", { required: true })}
              className="input"
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
              className="input"
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
              className="input"
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
              className="input"
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
              className="input"
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  )
}

export default MarriageForm