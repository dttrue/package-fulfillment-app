import './PackageForm.css'; // imports PackageForm
import React, { useState } from "react"; // imports useState
import { v4 as uuidv4 } from "uuid"; // imports uuid id generator


// fuction for adding a package to the list of packages and setPackages function with the new package data and id
const PackageForm = ({addPackage}) => { // calls the PackageForm components addPackage function 
  const [packageData, setPackageData] = useState({ // useState for packages array for id name description category and setPackages function
    id: "",
    name: "",
    description: "",
    category: "",
    price: ""
  });
  
  // function for updating a package
  const handleChange = (e) => {
    setPackageData({
      ...packageData, // this is the spread operator that copies the new package data
      [e.target.name]: e.target.value // updates the package with the new data
    });
  }


  // function for submitting a package
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the default form submission
    addPackage({ ...packageData, id: uuidv4() }); // generates a random id
    setPackageData({ // sets the package data to empty strings for new package
      id: "",
      name: "",
      description: "",
      category: "",
      price: ''
    });
  };

  // returns the form with the name, description, category and price and a button to submit the form when the name is not empty
  return (
    
    <form className="package-form" onSubmit={handleSubmit}>
      { /* inputs for name, description, category and price and a button to submit the form when the name is not empty */}
      <input
        type="text"
        name="name"
        value={packageData.name}
        onChange={handleChange}
        placeholder="Enter package name"
      />
    <textarea
      name="description"
      value={packageData.description}
      onChange={handleChange}
      placeholder=" Enter package description"
    />
    <input
      type="text"
      name="category"
      value={packageData.category}
      onChange={handleChange}
      placeholder="Enter package category"
    />
    <input
      type="text"
      name="price"
      value={packageData.price}
      onChange={handleChange}
      placeholder="Enter package price"
    />
      <button
        disabled={!packageData.name}
         >
        Add
      </button>
    </form>
  );
};

export default PackageForm;
