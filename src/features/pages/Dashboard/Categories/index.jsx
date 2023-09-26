import { Link } from "react-router-dom";
import {useNavigate } from 'react-router-dom'
import CrudTable from "../../../components/CrudTable";
import { useState, useEffect } from "react";
import CategoryService from "../../../../app/services/category.service";
export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate ();
  useEffect(() => {
    async function getAllCategories() {
      try {
        const categoriesData = await CategoryService.getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    getAllCategories();
  }, []);
  
  
  const categoryColumns = [
    { key: "id", label: "Category Id", isNumeric: true },
    { key: "name", label: "Category Name", isNumeric: false },
  ];
  const handleEditClick = (item) => {
    navigate(`/dashboard/categories/edit/${item}`)
  };

  const handleDeleteClick =async (item) => {
   try {
    const deletedCategory = await CategoryService.deleteCategory(item);
    window.location.reload();
    
   } catch (error) {
    console.error(error)
   }
  };

  const handleViewClick = (item) => {
    navigate(`/dashboard/categories/view/${item}`)
  };
  return (
    <div className="mx-12 rounded-lg border border-gray-200 h-fit ">
      <div className=" divide-y divide-gray-200">
        <div className="flex justify-between items-center p-4">
          <p className="text-2xl hover:text-blue-500">Categories</p>
          <div className="button">
            <Link to="/dashboard/categories/create" className="bg-blue-500 flex gap-2 p-2 rounded-md text-white hover:bg-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Add Category
            </Link>
          </div>
        </div>
        <CrudTable
          data={categories}
          columns={categoryColumns}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
          onViewClick={handleViewClick}
        />
      </div>
    </div>
  );
};
