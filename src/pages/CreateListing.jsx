import React from "react";

function CreateListing() {

    const [formData, setFormData] = React.useState({ type: "rent" });
    const { type } = formData;
    
    function onChange(e) {
    console.log(e.target.value)
    }
    
  return (
    <main className="max-w-md px-2 mx-auto">
          <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
          <form>
              <p className="text-lg mt-6 font-semibold">Sell/Rent</p>
              <div>
                  <button
                      type="button"
                      id="sell"
                      value={type}
                      onClick={onChange}
                      className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg 
                      focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
                      ${type==="rent" ? "bg-white":"bg-slate-600"}`}
                  >   
                      SELL
                  </button>
                  <button>RENT</button>
              </div>
          </form>
    </main>
  );
}

export default CreateListing;
