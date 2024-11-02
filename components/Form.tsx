"use client";
import React, { useEffect, useState } from "react";
import RecordingAnimation from "./RecordingAnimation";
import useSpeechRecognition from "@/hooks/useSpeechRecognition";
import { formData } from "@/types/form";
import useFormDataUpdater from "@/hooks/useFormDataUpdater";

const Form = () => {
  const [formData, setFormData] = useState<formData>({
    fullName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    state: "",
    pinCode: "",
  });

  const { text, isListening, startListening, stopListening } =
    useSpeechRecognition();

  // Logic for managing form data mutations
  const { handleChange, handleSubmit } = useFormDataUpdater(
    text,
    setFormData,
    formData
  );

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center flex-col">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">
            Responsive Form
          </h2>
          <p className="text-gray-500 mb-6">Form is mobile responsive.</p>

          <div className="bg-white rounded -lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <form className="lg:col-span-2" onSubmit={handleSubmit}>
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5 pb-2">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="md:col-span-5 pb-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="email@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="md:col-span-3 pb-2">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="md:col-span-2 pb-2">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="country">Country</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="country"
                        id="country"
                        placeholder="Country"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">State</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="state"
                        id="state"
                        placeholder="State"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="pincode">Pincode</label>
                    <input
                      type="text"
                      name="pinCode"
                      id="pinCode"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                      value={formData.pinCode}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <RecordingAnimation
        isListening={isListening}
        startListening={startListening}
        stopListening={stopListening}
      />
    </div>
  );
};

export default Form;
