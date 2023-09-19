import products from "../../../../app/seed/products";
import CrudTable from "../../../components/CrudTable";
export const Products = () => {
  const productColumns = [
    { key: "name", label: "Product Name", isNumeric: false },
    { key: "description", label: "Product Description", isNumeric: false },
    { key: "price", label: "Product Price", isNumeric: true },
    { key: "stock", label: "Product Stock", isNumeric: true },
    { key: "image", label: "Product Image", isImage: true },
    { key: "isFeatured", label: "Is Featured", isBoolean: true },
    { key: "categoryId", label: "Category Id", isNumeric: true },
  ];
  const handleEditClick = (item) => {
    console.log("Edit category:", item);
  };
  const handleDeleteClick = (itemId) => {
    console.log('Remove item with ID:', itemId);
  };

  const handleViewClick = (item) => {
    console.log("View category:", item);
  };
  return (
    <div className="rounded-lg border border-gray-200 h-fit">
      <div className="divide-y divide-gray-200">
        <div className="flex justify-between items-center p-4">
          <p className="text-2xl hover:text-blue-500">Products</p>
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
              Add Product
            </button>
          </div>
        </div>
        <CrudTable
          data={products}
          columns={productColumns}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
          onViewClick={handleViewClick}
        />
      </div>
    </div>
  );
};
