import categories from "../../../../app/seed/categories";
import CrudTable from "../../../components/CrudTable";
export const Categories = () => {
  const categoryColumns = [
    { key: "id", label: "Category Id", isNumeric: true },
    { key: "name", label: "Category Name", isNumeric: false },
  ];
  const handleEditClick = (item) => {
    // Handle the edit action for the category
    console.log("Edit category:", item);
  };

  const handleDeleteClick = (item) => {
    // Handle the delete action for the category
    console.log("Delete category:", item);
  };

  const handleViewClick = (item) => {
    // Handle the view action for the category
    console.log("View category:", item);
  };
  return (
    <div className="mx-12 rounded-lg border border-gray-200 h-fit ">
      <div className=" divide-y divide-gray-200">
        <div className="flex justify-between items-center p-4">
          <p className="text-2xl hover:text-blue-500">Categories</p>
          <div className="button">
            <button className="bg-blue-500 flex gap-2 p-2 rounded-md text-white hover:bg-blue-700">
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
            </button>
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
