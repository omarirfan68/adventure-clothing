import { createContext, useEffect, useState } from "react";
import { GetcollectionAndDocument } from "../components/firebase";


export const Categoriescontext = createContext({
    categoriesmap: {},
});
export const CategoriesProvider = ({ children }) => {
    const [categoriesmap, setCategoriesmap] = useState({})
    useEffect(() => {
        const Getcategorymap = async()=>{
            const categorymap = await GetcollectionAndDocument('categories')
  
            setCategoriesmap(categorymap);
        };
        Getcategorymap();
      
    },[]);
    const value = { categoriesmap }
    return (
        <Categoriescontext.Provider value={value}>{children}</Categoriescontext.Provider>
    )
}
