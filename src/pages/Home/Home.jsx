import React from "react";
import { useState } from "react";
import Formdata from "./Formdata";

function Home() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", price: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      const updated = [...data];
      updated[editingIndex] = formData;
      setData(updated);
      setEditingIndex(null);
    } else {
      setData([...data, { ...formData, id: Date.now() }]);
    }

    setFormData({ name: "", price: "" });
    setShowForm(false);
  };

  const handleCancel = () => {
    setFormData({ name: "", price: "" });
    setEditingIndex(null);
    setShowForm(false);
  };

  return (
    <>
      <button className="bg-blue-500 text-white px-7 py-1 rounded mb-4" onClick={() => setShowForm(true)}>
        ADD
      </button>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                Belum ada produk
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={item.id}>
                <td className="border p-2 text-center">{item.id}</td>
                <td className="border p-2 text-center">{item.name}</td>
                <td className="border p-2 text-center">Rp {item.price}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => {
                      setEditingIndex(index);
                      setFormData(item);
                      setShowForm(true);
                    }}
                    className="text-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      const confirmDelete = window.confirm("Yakin mau hapus data ini?");
                      if (confirmDelete) {
                        const updated = data.filter((_, i) => i !== index);
                        setData(updated);
                      }
                    }}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {showForm && <Formdata formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} editingIndex={editingIndex} onCancel={handleCancel} />}
    </>
  );
}

export default Home;
