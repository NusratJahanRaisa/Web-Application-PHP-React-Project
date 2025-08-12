import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData() || {};

  const { id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleSubmit = (e) => {
  e.preventDefault();

  const updatedCoffee = {
    id,
    name: e.target.name.value,
    chef: e.target.chef.value,
    supplier: e.target.supplier.value,
    taste: e.target.taste.value,
    category: e.target.category.value,
    details: e.target.details.value,
    photo: e.target.photo.value,
  };

  fetch("http://localhost/coffee-api/updateCoffee.php", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedCoffee),
  })
    .then(res => res.json())
    .then(data => {
      if (data.message === "Coffee updated") {
        Swal.fire({
          title: "Successful!",
          text: "Coffee Updated",
          icon: "success",
          confirmButtonText: "Cool",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: data.error || "Update failed",
          icon: "error",
        });
      }
    });
};


  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center px-4 py-8">
      {/* Back Link */}
      <div className="w-full max-w-4xl mb-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-primary hover:underline"
        >
          <span className="text-xl">←</span> Back to home
        </Link>
      </div>

      {/* Card Container */}
      <div className="bg-base-100 shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-2">
          Update Coffee : {name}
        </h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              defaultValue={name}
              required
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              defaultValue={chef}
              required
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              defaultValue={supplier}
              required
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              defaultValue={taste}
              required
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              defaultValue={category}
              required
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              defaultValue={details}
              required
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:col-span-2">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              defaultValue={photo}
              required
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="btn btn-block bg-[#D2B48C] text-black hover:bg-[#caa474]"
            >
              Update Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
