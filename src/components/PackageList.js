import React from "react"; // imports React
import PackageItem from "./PackageItem"; // imports PackageItem


// function for updating a package
const PackageList = ({ packages, updatePackage, deletePackage,  }) => {
   // returns the package list with the name, description, category and price   
    return (
        <div className="package-list">
            { /* maps through the packages array and returns the package item with the name, description, category and price */}
            {packages.map((packageItem) => (
                <PackageItem
                    key={packageItem.id}
                    packageItem={packageItem}
                    updatePackage={updatePackage}
                    deletePackage={deletePackage}
                />
            ))}
        </div>
    );
}

export default PackageList