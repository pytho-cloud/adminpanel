import React from 'react';

const FormComponent = () => {


  return (
    <div className="  w-full    flex m-2 mt-2 pt-2 ">
      <form className="  p-8 shadow-md rounded-md  flex flex-col  w-full bg-[#182237]" >
        <h2 className="text-2xl mb-4">Add User</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">Username</label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#151c2c]"
            id="firstName"
            type="text"
            placeholder="First Name"
            name="firstName"
        
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Email</label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#151c2c]"
            id="lastName"
            type="text"
            placeholder="Email"
            name="lastName"
            
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Created At</label>
          <input
            className=" bg-[#151c2c] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
          
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Roll </label>
          <textarea
            className=" bg-[#151c2c] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Message"
            name="message"
          
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Message</label>
          <input
            className="bg-[#151c2c] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
          
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">Upload Image</label>
          <input
            className=" bg-[#151c2c] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="file"
            type="file"
            placeholder="upload photos"
            name="file"
          
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
