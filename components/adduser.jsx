"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

export default function AddUserForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");
  const { data: session } = useSession();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate form data before submission
      if (!name || !phoneNumber) {
        setError("Name and Phone Number are required fields.");
        return;
      }

      // Perform necessary actions, such as handling form data and photo upload
      // Example: submit data to an API, handle file upload, etc.

      // Simulate a delay to show loading state (replace with actual API calls)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // After successful submission, redirect to the dashboard or another page
      router.replace("/dashboard");
    } catch (error) {
      console.error(error);
      setError("Failed to add user. Please try again.");
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
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
            type="tel" // Use tel type for phone numbers
            placeholder="Phone Number"
            value={phoneNumber}
          />
          <label
            htmlFor="fileInput"
            className="bg-blue-500 text-white font-bold cursor-pointer px-6 py-2 rounded-md text-center"
          >
            Upload Photo
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            type="submit"
            className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2"
          >
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
