import React from "react";
import {useState} from "react";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
function CreateListing() {

  const [geolocationEnabled, setGeolocationEnabled] = useState(false); //to initialize the state of geolocationEnabled(if we have GOOGLE api)
  const [loading, setLoading] = useState(false); //to initialize the state of Spinner once Post Formdata to database
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
        latitude: "0",
        longitude: "0",
        images:[]
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
        latitude,
        longitude,
        images
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

    async function handleSubmit(e) {
      e.preventDefault();
      console.log(formData);
      setLoading(true);    // display the spinner
    //=== validate if Form Data is valid=== 

    // Check if discounted price is reasonable
      if (+discountedPrice >= +regularPrice) {
        setLoading(false);
        toast.error("Discounted price needs to be less than regular price");
        return;
      }

    // Check if Images is more than 6
    if (images.length > 6) {
      setLoading(false);
      toast.error("maximum 6 images are allowed");
      return;
    }
    // Check if GeoCoding API is enabled, or just use Longitude and Latitude to show the Location
    let geolocation = {};
    let location;
    if (geolocationEnabled) {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GEOCODE_API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      geolocation.lat = data.results[0]?.geometry.location.lat ?? 0;
      geolocation.lng = data.results[0]?.geometry.location.lng ?? 0;

      location = data.status === "ZERO_RESULTS" && undefined;

      if (location === undefined) {
        setLoading(false);
        toast.error("please enter a correct address");
        return;
      }
    } 
    else // if not enabled, just use Longitude and Latitude to show the Location(these need manually input)
    
    {
      geolocation.lat = latitude;
      geolocation.lng = longitude;
    }
  }
    
    
    //After Posting Formdata to database, display Spinner
    if(loading){
      return <Spinner />
    }

  return (
    <main className="max-w-md px-2 mx-auto">
          <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
          <form onSubmit={handleSubmit}>
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
          {!geolocationEnabled && (
          <div className="flex space-x-6 justify-start mb-6">
            <div className="">
              <p className="text-lg font-semibold">Latitude</p>
              <input
                type="number"
                id="latitude"
                name="latitude"
                value={latitude}
                onChange={onChange}
                required
                min="-90"
                max="90"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:text-gray-700 focus:border-slate-600 text-center"
              />
            </div>
            <div className="">
              <p className="text-lg font-semibold">Longitude</p>
              <input
                type="number"
                id="longitude"
                name="longitude"
                value={longitude}
                onChange={onChange}
                required
                min="-180"
                max="180"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:text-gray-700 focus:border-slate-600 text-center"
              />
            </div>
          </div>
        )}

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
            name="images"
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
