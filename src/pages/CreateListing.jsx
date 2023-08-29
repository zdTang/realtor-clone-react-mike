import React from "react";
import {useState} from "react";
function CreateListing() {

    const [formData, setFormData] = useState({
        type: "rent",
        name: "",
        bedrooms: "1",
        bathrooms: "1",
        parking: "false",
        furnished: "false",
        address: "",
        description: "",
        offer: "true",
        regularPrice: "0",
        discountedPrice: "0",
      });
      const {
        type,
        name,
        bedrooms,
        bathrooms,
        parking,
        address,
        furnished,
        description,
        offer,
        regularPrice,
        discountedPrice,
      } = formData;
    
      console.log(formData);

    
    function onChange(e) {
    console.dir(e);
    //https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object
    //Even the boolean value passed from BROWSERS are totally strings
    //Here convert STRING to boolean value again
    let {name,value}=e.target;
    setFormData({ ...formData, [name]: value })
    // Files
         if (e.target.files) {
           setFormData((prevState) => ({
             ...prevState,
             images: e.target.files,
           }));
         }
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
                      name="type"
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
                      name="type"
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
                  //id="name"
                  value={name}
                  className="w-full py-2 px-4 text-xl mb-6 text-gray-700 bg-white border boarder-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
                  placeholder="Name"
                  maxLength={32}
                  min={10}
                  required
                  onChange={onChange}
              />
         <div className="flex space-x-6 mb-6">
          <div>
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              //id="bedrooms"
              name="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min="1"
              max="50"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              name="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min="1"
              max="50"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
            />
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold">Parking spot</p>
        <div className="flex">
          <button
            type="button"
            name="parking"
            value="true"
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              parking.toLowerCase()==="true" ? "bg-slate-600 text-white" : "bg-white text-black"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            name="parking"
            value="false"
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                parking.toLowerCase()==="false" ?"bg-slate-600 text-white"  : "bg-white text-black"
            }`}
          >
            no
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex">
          <button
            type="button"
            name="furnished"
            value="true"
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              furnished.toLowerCase()==="true" ? "bg-slate-600 text-white" : "bg-white text-black"
            }`}
          >
            yes
          </button>
          <button
            type="button"
            name="furnished"
            value="false"
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              furnished.toLowerCase()==="false"  ? "bg-slate-600 text-white" : "bg-white text-black"
            }`}
          >
            no
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Address</p>
        <textarea
          type="text"
          name="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Description</p>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={onChange}
          placeholder="Description"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Offer</p>
        <div className="flex mb-6">
          <button
            type="button"
            name="offer"
            value="true"
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              offer.toLowerCase()==="true" ? "bg-slate-600 text-white": "bg-white text-black" 
            }`}
          >
            yes
          </button>
          <button
            type="button"
            name="offer"
            value="false"
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              offer.toLowerCase()==="false" ? "bg-slate-600 text-white": "bg-white text-black" 
            }`}
          >
            no
          </button>
        </div>
        <div className="flex items-center mb-6">
          <div className="">
            <p className="text-lg font-semibold">Regular price</p>
            <div className="flex w-full justify-center items-center space-x-6">
              <input
                type="number"
                name="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min="50"
                max="400000000"
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              />
              {type === "rent" && (
                <div className="">
                  <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offer && (
          <div className="flex items-center mb-6">
            <div className="">
              <p className="text-lg font-semibold">Discounted price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  name="discountedPrice"
                  value={discountedPrice}
                  onChange={onChange}
                  min="50"
                  max="400000000"
                  required={offer==="true"?true:false}
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                />
                {type === "rent" && (
                  <div className="">
                    <p className="text-md w-full whitespace-nowrap">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">
            The first image will be the cover (max 6)
          </p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />
        </div>
        <button type="submit" className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Create Listing</button>
          </form>
    </main>
  );
}

export default CreateListing;
