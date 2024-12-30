import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);       // user: Stores the fetched random user's details.
  const [loading, setLoading] = useState(false);             // loading: Indicates whether the app is currently fetching data from the API.
  const [error, setError] = useState(null);      // error: Holds any error messages if the fetch request fails.

  const fetchRandomUser = async () => {
    setLoading(true);     // Show the loading on the Button
    setError(null);     // Reset any previous error messages

    try {
      const response = await axios.get('https://randomuser.me/api/');
      const randomUser = response.data.results[0];     // results is the array we get from the API
      setUser(randomUser);      // Save the randomly fetched person data to the user
    } catch (err) {
      setError('Failed to fetch user. Please try again.');
    } finally {
      setLoading(false);    // hide the loading
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
  <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6">
    <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">
      Random User Generator
    </h1>
    <hr className="border-t-2 border-gray-200 my-4" />

    <div className="flex justify-center mb-6">
      <button
        onClick={fetchRandomUser}
        className={`px-6 py-3 rounded-lg shadow ${
          loading
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-indigo-600 text-white hover:bg-indigo-700"
        } font-bold`}
        disabled={loading}
      >
        {loading ? "Loading..." : "Get Random User"}
      </button>
    </div>

    {error && (
      <p className="text-red-500 text-center font-medium">{error}</p>
    )}

    {user && (
      <div className="mt-6 text-center bg-gray-50 p-6 rounded-lg shadow-md">
        <img
          src={user.picture.large}
          alt="User Avatar"
          className="w-32 h-32 rounded-full mx-auto shadow-lg"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          {user.name.title} {user.name.first} {user.name.last}
        </h2>
        <p className="text-lg text-gray-600 mt-2">Email: {user.email}</p>
        <p className="text-lg text-gray-600">Location: {user.location.city}, {user.location.country}</p>
      </div>
    )}
  </div>
</div>

  );
}

export default App;
