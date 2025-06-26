import React, { useState, useEffect } from "react";

export default function AdminUpload({ packages, setPackages }) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    image: "",
    description: "",
    category: "Honeymoon",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPackages([...packages, formData]);
    setFormData({
      name: "",
      location: "",
      price: "",
      image: "",
      description: "",
      category: "Honeymoon",
    });
  };

  const handleDelete = (index) => {
    const updated = [...packages];
    updated.splice(index, 1);
    setPackages(updated);
  };

  const handleEdit = (index) => {
    setFormData(packages[index]);
    const updated = [...packages];
    updated.splice(index, 1);
    setPackages(updated);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Package Uploader</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 mb-8">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Package Name" className="p-2 border rounded" />
        <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="p-2 border rounded" />
        <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="p-2 border rounded" />
        <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="p-2 border rounded" />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="p-2 border rounded" />
        <select name="category" value={formData.category} onChange={handleChange} className="p-2 border rounded">
          <option value="Honeymoon">Honeymoon</option>
          <option value="Adventure">Adventure</option>
          <option value="Family">Family</option>
          <option value="Solo">Solo</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
      </form>

      <h3 className="text-xl font-semibold mb-2">Uploaded Packages</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {packages.map((pkg, index) => (
          <div key={index} className="border p-4 rounded shadow-sm">
            <img src={pkg.image} alt={pkg.name} className="w-full h-40 object-cover rounded mb-2" />
            <p className="text-indigo-600 text-sm">{pkg.category}</p>
            <h4 className="font-bold">{pkg.name}</h4>
            <p>{pkg.location}</p>
            <p className="text-green-600 font-semibold">₹{pkg.price}</p>
            <p className="text-sm">{pkg.description}</p>
            <div className="flex gap-3 mt-2">
              <button onClick={() => handleEdit(index)} className="text-blue-500">Edit</button>
              <button onClick={() => handleDelete(index)} className="text-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
