import { useState } from "react"; // imports useState
import "./PackageItem.css"; // imports PackageItem

// function for updating a package
const PackageItem = ({ packageItem, updatePackage, deletePackage }) => {
  const [isEditing, setIsEditing] = useState(false); // useState for editing package and setIsEditing function, it is set to false by default
  const [editedPackage, setEditedPackage] = useState({ ...packageItem });

  // function for updating a package
  const handleUpdate = () => {
    updatePackage(editedPackage.id, editedPackage); // updates the package with the new data when the update button is clicked
    setIsEditing(false); // sets isEditing to false when the update button is clicked because the form is no longer being edited
  };

  // function for deleting a package
  const handleChange = (e) => {
    setEditedPackage({ ...editedPackage, [e.target.name]: e.target.value }); // updates the package with the new data when the update button is clicked
  };
  // returns the package item with the name, description, category and price
  return (
    <div className="package-item">
      {/* if isEditing is true, it returns the form with the name, description, category and price and a button to submit the form when the name is not empty. If isEditing is false, it returns the package name and a button to edit the package */}
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedPackage.name}
            onChange={handleChange}
            placeholder="Enter package name"
          />
          <textarea
            name="description"
            value={editedPackage.description}
            onChange={handleChange}
            placeholder="Enter package description"
          />
          <input
            type="text"
            name="category"
            value={editedPackage.category}
            onChange={handleChange}
            placeholder="Enter package category"
          />
          <input
            type="number"
            name="price"
            value={editedPackage.price}
            onChange={handleChange}
            placeholder="Enter package price"
          />
        </div>
        ) : (
        <div className="package-detail">
          <div className="package-name">{packageItem.name}</div>
          <div className="package-id">ID: {packageItem.id}</div>
          <div className="package-description">{packageItem.description}</div>
          <div className="package-category">{packageItem.category}</div>
          <div className="package-price">${packageItem.price}</div>
        </div>
      )}
      <div className="edit-delete-buttons">
        {isEditing ? (
          <button className="save" onClick={handleUpdate}>
            Save
          </button>
          ) : (
          <button className="edit" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        <button
          className="delete"
          onClick={() => deletePackage(packageItem.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PackageItem;
