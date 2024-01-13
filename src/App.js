import React, { useState } from "react"; // imports useState
import PackageForm from "./components/PackageForm"; // imports PackageForm
import PackageList from "./components/PackageList"; // imports PackageList
import { v4 as uuidv4 } from "uuid"; // imports uuid id generator
import "./App.css"; // imports App.css
import Header from "./components/Header";
import Footer from "./components/Footer";

// fuction for adding a package
function App() {
  const [search, setSearch] = useState("");
  const [packages, setPackages] = useState([
    // useState for packages array and setPackages function
    {
      id: uuidv4(), // generates a random id
      name: "Doll",
      description: "Toys for kids",
      category: "Toys",
      price: 9.99,
    },
  ]);

  

  const filteredPackages = packages.filter(pkg => pkg.name.toLowerCase().includes(search.toLowerCase()));


  


  const addPackage = (newPackageData) => {
    // calls the newPackageData from the addPackage function
    const newPackage = {
      // creates a new package with the new package data
      id: uuidv4(), // generates a random id
      ...newPackageData, //this is the spread operator that copies the new package data
    };
    setPackages([...packages, newPackage]); // ...packages is the spread operator that makes a copy of the packages array and adds the new package
  };

  // function for updating a package
  const updatePackage = (id, updatePackage) => {
    // calls the updatePackage function with the id and updatePackage data
    setPackages(
      packages.map((pkg) =>
        pkg.id === id ? { ...pkg, ...updatePackage } : pkg
      )
    ); // maps through the packages array thats coming from the setPackages function and updating the package with the new data
  };

  // function for deleting a package
  const deletePackage = (id) => {
    // calls the deletePackage function with the id
    setPackages(packages.filter((pkg) => pkg.id !== id)); // deletes the package with the id from the packages array that is coming from the setPackages function
  };

  // returns the app
  return (
    <div className="container">
      {/* calls the PackageForm components addPackage updatePackage and deletePackage */}
      <Header  onSearch={setSearch}/>
      <PackageForm addPackage={addPackage} />
      <PackageList
        packages={filteredPackages}
        updatePackage={updatePackage}
        deletePackage={deletePackage}
      />
      <Footer />
    </div>
  );
}

export default App;
