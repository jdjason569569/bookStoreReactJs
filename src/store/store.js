import { createContext, useContext, useState } from "react";

const AppContext = createContext({
    items: [],
    createItem: (item) => { },
    getItem: (id) => { },
    updateItem: (item) => { }
})

export default function Store({ children }) {
    const [items, setItems] = useState([]);

    const createItem = (item) => {
        items.push(item);
        setItems(items);
    }

    const getItem = (id) => {
        return items.find((item) => item.id === id);
    }

    const updateItem = (item) => {
        const index = items.findIndex((element) => element.id = item.id);
        //const temp = [...items];
        items[index] = { ...item };
    }

    return <AppContext.Provider
        value={{
        items,
        createItem,
        getItem,
        updateItem
        }}>{children}
        </AppContext.Provider>
}

export function useAppContext() {
    return useContext(AppContext);
}