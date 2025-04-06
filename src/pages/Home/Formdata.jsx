import React from "react";

const FormData = ({ formData, setFormData, handleSubmit, editingIndex, onCancel }) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow bg-white">
      <h1 className="text-xl font-bold mb-4">{editingIndex !== null ? "Edit Produk" : "Tambah Produk"}</h1>

      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input type="text" name="name" placeholder="Nama Produk" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-2 border rounded" />
        <input type="number" name="price" placeholder="Harga" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} className="w-full p-2 border rounded" />
        <div className="flex gap-2">
          <button type="submit" className="flex-1 bg-blue-600 text-white py-2 rounded">
            {editingIndex !== null ? "Update Produk" : "Tambah Produk"}
          </button>
          <button type="button" className="flex-1 bg-gray-300 py-2 rounded" onClick={onCancel}>
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormData;
