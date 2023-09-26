const { createContext, useContext } = require("react");

function Store() {
    this.categoryStore = null;
}

const store = new Store();

const StoreContext = createContext(store);

function useStore() {
    return useContext(StoreContext);
}

module.exports = { store, StoreContext, useStore };
