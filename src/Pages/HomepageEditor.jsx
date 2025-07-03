import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../Layouts/AdminLayout";

const HomepageEditor = () => {
  const [formData, setFormData] = useState({
    headline: "",
    subheadline: "",
    address: "",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/home").then((res) => {
      setFormData(res.data || {});
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put("http://localhost:5000/api/home", formData);
    alert("Homepage content updated successfully!");
  };
  return (
    <>
      <AdminLayout>
        <h2 className="text-2xl font-semibold mb-6">Homepage Editor</h2>
        <h2 className="text-lg font-semibold mb-6">Main Banner</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md space-y-4"
        >
          <div>
            <label className="block font-medium mb-1">Headline</label>
            <input
              name="headline"
              value={formData.headline || ""}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              type="text"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Subheadline</label>
            <input
              name="subheadline"
              value={formData.subheadline || ""}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              type="text"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Address</label>
            <input
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              type="text"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </AdminLayout>
    </>
  );
};

export default HomepageEditor;
