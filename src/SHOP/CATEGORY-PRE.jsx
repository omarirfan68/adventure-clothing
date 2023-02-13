import { Fragment, useContext } from "react";
import { Categoriescontext } from "./product";
import CategoryPreview from "../categories-preview/Categories-preview";


const CategoriesPreview = () => {
    const { categoriesmap } = useContext(Categoriescontext)
    return (
        <Fragment >
            {
                Object.keys(categoriesmap).map((title) => {
                    const Products = categoriesmap[title]
                    return (
                        <CategoryPreview key={title} title = {title} Product={Products}/>
                    )
                })}
                    
               
        </Fragment>
    )

}
export default CategoriesPreview;