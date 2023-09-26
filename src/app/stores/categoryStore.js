const { makeAutoObservable, runInAction } = require("mobx");
const api = require("../api/api");

function CategoryStore() {
    this.categoryRegistry = new Map();
    this.selectedCategory = undefined;
    this.editMode = false;
    this.loading = false;
    this.loadingInitial = true;

    makeAutoObservable(this);

    this.getCategories = async function () {
        this.loadingInitial = true;
        try {
            const categories = await api.Categories.list();
            categories.forEach((category) => {
                this.setCategory(category);
            });
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    };

    this.getCategoryById = async function (categoryId) {
        let category = this.getCategory(categoryId);
        if (category) {
            this.selectedCategory = category;
        } else {
            this.loadingInitial = true;
            try {
                category = await api.Categories.details(categoryId);
                this.setCategory(category);
                runInAction(() => {
                    this.selectedCategory = category;
                });
                this.setLoadingInitial(false);
                return category;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    };

    this.setCategory = function (category) {
        this.categoryRegistry.set(category.categoryId, category);
    };

    this.getCategory = function (categoryId) {
        return this.categoryRegistry.get(categoryId);
    };

    this.setLoadingInitial = function (state) {
        this.loadingInitial = state;
    };

    this.createCategory = async function (category) {
        this.loading = true;
        try {
            await api.Categories.create(category);
            runInAction(() => {
                this.categoryRegistry.set(category.categoryId, category);
                this.selectedCategory = category;
                this.editMode = false;
                this.loading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    this.updateCategory = async function (category) {
        this.loading = true;
        try {
            await api.Categories.update(category);
            runInAction(() => {
                this.categoryRegistry.set(category.categoryId, category);
                this.selectedCategory = category;
                this.editMode = false;
                this.loading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    this.deleteCategory = async function (categoryId) {
        this.loading = true;
        try {
            await api.Categories.delete(categoryId);
            runInAction(() => {
                this.categoryRegistry.delete(categoryId);
                this.loading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            });
        }
    };
}

module.exports = CategoryStore;
