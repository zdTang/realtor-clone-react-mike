import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase";



function Profile() {

  console.log("into Profile--");
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);
  
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  
  function onLogout() {
    auth.signOut();
    navigate("/");
  }

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit() {
    try {
      console.log("into Profile--onSubmit--");
      console.log("name: " + name);
      console.log("auth.currentUser.displayName: " + auth.currentUser.displayName);
      if (auth.currentUser.displayName !== name) {
        console.log("Profile--onSubmit--name is not equal to auth.currentUser.displayName, ready to update");
        //update display name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // update name in the firestore

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
        toast.success("Profile details updated");
      }
      
    } catch (error) {
      toast.error("Could not update the profile details");
    }
  }


  // const handleSubmit = (e
  return (
    <>
    <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
      <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
      <div className='w-full md:w-[50%] mt-6 px-3'>
        <form>
          
          <input 
          type="text" 
          id='name' 
          placeholder='Name' 
          value={name} 
          disabled={!changeDetail}
          onChange={onChange}
          className= {`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
            changeDetail && "bg-red-200 focus:bg-red-200"}`}
          />
          
          <input 
          type="text" 
          id='email' 
          placeholder='Email' 
          value={email} 
          disabled 
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6"/>
        
        <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg px-3 mb-6'>
          
          <p>Do you want to change your name? 
            <strong 
              onClick={() => {
              changeDetail && onSubmit();
              setChangeDetail((prevState) => !prevState);
              }}
              className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
            >
             {changeDetail ? "Apply change" : "Edit"}
            </strong>
          </p>
          
          <p onClick={onLogout} 
            className='text-blue-600 hover:text-blue-700 transition ease-in-out duration-200 cursor-pointer'>
            Sign out
          </p>

        </div>
      </form>
      </div>
    </section>  
    </>  
  )
}

export default Profile
