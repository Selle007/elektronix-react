import api from '../api/api';

const CategoryService = {
  getAllCategories: async () => {
    try {
      return await api.Categories.list();
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getCategoryById: async (categoryId) => {
    try {
      return await api.Categories.details(categoryId);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  createCategory: async (category) => {
    try {
      return await api.Categories.create(category);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  updateCategory: async (category) => {
    try {
      return await api.Categories.update(category);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  deleteCategory: async (categoryId) => {
    try {
      return await api.Categories.delete(categoryId);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default CategoryService;
