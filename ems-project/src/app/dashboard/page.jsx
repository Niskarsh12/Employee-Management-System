import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page





// "use client";

// import React, { useEffect, useState } from "react";
// import { ReactDOM } from "react-dom/client";
// import { BsFillPersonPlusFill } from "react-icons/bs";

// const Dashboard = () => {

//   const [showForm, setShowForm] = useState(false);

//   return (
//     <div>
//       <h1 className="flex justify-center p-2 text-3xl font-bold">
//         Manage Your Organization
//       </h1>
//       <div className="m-2">
//         <button
//           onClick={() => setShowForm(true)}
//           type="button"
//           className="p-2 font-normal text-white rounded-lg bg-violet-600 text-md"
//         >
//           Add Employee
//           <BsFillPersonPlusFill />{" "}
//         </button>
//       </div>
//       <Form />
//     </div>
//   );
// };

// export const Form = () => {
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const formData = new FormData(e.target)
//     const payload = Object.fromEntries(formData)
//     const response = await fetch('/api/submit', {
//       method: 'POST',
//       body: JSON.stringify(payload),
//     })
//     const data = await response.json()

//     if (data.status === 200) {
//       setSuccessMessage(data.message)
//     } else {
//       setErrorMessage(data.message)
//     }
//   }

//   return (
//     <div>
//       {successMessage && (
//         <div className="text-lg font-bold text-green-500">{successMessage}</div>
//       )}
//       {errorMessage && (
//         <div className="text-lg font-bold text-red-500">{errorMessage}</div>
//       )}

//       <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
//         <hr />
//         <input name="firstname" placeholder="Enter the first name" />
//         <input name="lastname" placeholder="Enter the last name" />

//         <input name="email" type="email" placeholder="Enter the email" />
//         <input name="salary" type="number" placeholder="Enter the salary" />

//         <button type="submit" className="p-2 text-white bg-black rounded-lg">Add+</button>
//       </form>
//     </div>
//   );
// };

// export const DataTable = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // fetch the data from your server-side API Route
//     fetch("/api/submit") // fetching the API route
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);
//   return (
//     <div>
//       <h1>Employee System</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Firstname</th>
//             <th>Lastname</th>
//             <th>Email</th>
//             <th>Salary</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item._id}>
//               <td>{item.firstname}</td>
//               <td>{item.lastname}</td>
//               <td>{item.email}</td>
//               <td>{item.salary}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Dashboard;