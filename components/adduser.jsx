import { useState } from "react";
import { useRouter } from "next/router";

export default function AddUserForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [photo, setPhoto] = useState(null); // For handling file upload
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform necessary actions, such as handling form data (name, phoneNumber, photo upload)
    // For example: submit data to an API, handle file upload, etc.

    try {
      // Assuming some API call or handling of data submission here

      // After successful submission, redirect to dashboard or another page
      router.replace("dashboard");
    } catch (error) {
      console.log(error);
      setError("Failed to add user. Please try again.");
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // Do something with the selected file, such as setting state for file upload
    setPhoto(selectedFile);
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Add User</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            value={name}
          />
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
          />
          <label htmlFor="fileInput" className="bg-blue-500 text-white font-bold cursor-pointer px-6 py-2 rounded-md text-center">
            Upload Photo
          </label>
          <input
            id="fileInput"
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Add User
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
