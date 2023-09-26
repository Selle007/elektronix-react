import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CategoryService from "../../../../../app/services/category.service";

export const EditCategory = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({ name: "" });
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setCategory({ ...category, name: e.target.value });
  };

  useEffect(() => {
    const getCategoryById = async () => {
      try {
        const categoryData = await CategoryService.getCategoryById(id);
        setCategory(categoryData);
      } catch (error) {
        console.error(error);
      }
    };

    getCategoryById();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const updatedCategory = {
      id: category.id, // Set the category ID
      name: category.name,
    };

    try {
      const response = await CategoryService.updateCategory(updatedCategory);
      console.log(response)
      navigate("/dashboard/categories");
    } catch (error) {
      console.error(error);

    }
  };
  return (
    <div className="flex justify-center mx-auto border border-gray-200 rounded-lg h-fit py-12">
      <div className="mx-12   h-fit flex justify-center">
        <div className=" divide-y divide-gray-200">
          <div className="flex justify-between items-center mb-4">
            <p className="text-2xl hover:text-blue-500">Add a new Category</p>
          </div>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="categoryName"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="categoryName"
                className="peer py-2 px-4 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="categoryName"
                value={category.name}
                onChange={handleNameChange}
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Category Name
              </span>
            </label>

            <button className="bg-blue-500 w-72 py-2 px-4 mt-4 rounded-lg hover:bg-blue-700 text-white font-semibold text-md ">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
