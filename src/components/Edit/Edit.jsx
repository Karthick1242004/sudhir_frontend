import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Edit() {
  return (
    <div className="w-full h-[100vh] pb-[100px]">
     <Navbar/>
     <h1 className='text-3xl text-center mt-4'>Edit details</h1>
      <div className="flex flex-col mt-[3%] w-[50%] mx-auto justify-center items-center px-[4%] py-8 rounded-[10px] gap-6 bg-slate-200 max600:w-[85%] max600:mt-[25%]">
        <div className="flex flex-col gap-2 w-full">
          <label>Name</label>
          <input 
            className="w-full px-2 py-2 rounded-[4px] border border-gray-300" 
            type="text" 
            placeholder="Enter your name" 
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label>Email</label>
          <input 
            className="w-full px-2 py-2 rounded-[4px] border border-gray-300" 
            type="email" 
            placeholder="Enter your email" 
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label>Mobile Number</label>
          <input 
            className="w-full px-2 py-2 rounded-[4px] border border-gray-300" 
            type="number" 
            placeholder="Enter your mobile number" 
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label>Designation</label>
          <select 
            className="w-full px-2 py-2 rounded-[4px] border border-gray-300"
          >
            <option>HR</option>
            <option>Manager</option>
            <option>Sales</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label>Gender</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="gender" 
                value="Male" 
                className="mr-2"
              /> Male
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="gender" 
                value="Female" 
                className="mr-2"
              /> Female
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label>Course</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="mr-2" 
              /> MCA
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="mr-2" 
              /> BSC
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="mr-2" 
              /> BCA
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label>Upload Image</label>
          <input 
            type="file" 
            className="w-full px-2 py-2 rounded-[4px] border border-gray-300" 
          />
        </div>

        <button className="bg-black px-6 py-2 rounded-[5px] text-white w-full mt-4">Submit</button>
      </div>
    </div>
  );
}

export default Edit;
