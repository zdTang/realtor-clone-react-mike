import React from "react";

function CreateListing() {

    const [formData, setFormData] = React.useState({ type: "rent",name:"" });
    const { type,name } = formData;
    
    function onChange(e) {
    const { name, value } = e.target;
    console.log(e.target.value);
    console.log(e.target.name);
    setFormData({ ...formData, [name]: value })
    }
    
  return (
    <main className="max-w-md px-2 mx-auto">
          <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
          <form>
              <p className="text-lg mt-6 font-semibold">Sell/Rent</p>
              <div className="flex justify-center mt-4">
                  <button
                      type="button"
                      id="sell"
                      value="sell"
                      onClick={onChange}
                      className={`mr-2 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg 
                      focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
                      ${type==="rent" ? "bg-white text-black":"bg-slate-600 text-white"}`}
                  >   
                      SELL
                  </button>
                  <button
                      type="button"
                      id="rent"
                      value="rent"
                      onClick={onChange}
                      className={`ml-2 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg 
                      focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
                      ${type==="sell" ? "bg-white text-black":"bg-slate-600 text-white"}`}
                  >   
                      RENT
                  </button>
              </div>
              <p className="text-lg mt-6 font-semibold">Name</p>
              <input
                  type="text"
                  name="name"
                  id="name"
                  value="name"
                  className="w-full py-2 px-4 text-xl mb-6 text-gray-700 bg-white border boarder-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
                  placeholder="Name"
                  maxLength={32}
                  min={10}
                  required
                  onChange={onChange}
              />
          </form>
    </main>
  );
}

export default CreateListing;
