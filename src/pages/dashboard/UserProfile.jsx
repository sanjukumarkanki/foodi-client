import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'
import { useForm } from 'react-hook-form';

const UserProfile = () => {
    const {updateUserProfile} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit =  (data) => {
        
        const name = data.name;
        const file = data.photoURL[0]; // Access the first (and only) file in the FileList

        if (file instanceof File) {
          // Convert The file data into img url
          const photoURL = URL.createObjectURL(file);

          // Call updateProfile callback function that updates the profile pic of the user
          updateUserProfile(name, photoURL).then(() => {
              // Profile updated!
              console.log(name,photoURL)
              alert("Profile updated successfully")
            }).catch((error) => {
              console.log(error)
            });
      
          // Now you can use the 'photoURL' in your logic or send it to the server
        } else {
          console.error('No file selected');
        }
      }
  return (
    <div className='h-screen max-w-md mx-auto flex items-center justify-center '>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" {...register("name")} placeholder="Your name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Photo</span>
            </label>
            <input type="file" {...register("photoURL")}  className="file-input w-full mt-1" />
            {/* <input type="text" {...register("photoURL")} placeholder="photo url" className="input input-bordered" required /> */}
          </div>
          <div className="form-control mt-6">
            <input type='submit' value={"Update"} className="btn bg-green text-white"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserProfile