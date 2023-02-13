import './CATEGORIES-COMPONENT.scss'
import { useParams } from 'react-router-dom'
import { useContext,useState,useEffect, Fragment } from 'react'
import { Categoriescontext } from '../SHOP/product'
import ProductCard from '../SHOP/ProductCard'
const CategoryComponent=()=>{
    const {category} = useParams()
    const {categoriesmap} = useContext(Categoriescontext)
    const [products,setproducts] =useState(categoriesmap[category])
    useEffect(()=>{
  setproducts(categoriesmap[category])
    },[category,categoriesmap])
    return (
        <Fragment>
            <h2 className='titles'>{category.toUpperCase()}</h2>
             <div className='category-container'>
          
          { products &&
              products.map((Products)=><ProductCard key={Products.id} Product={Products}/>)
          }

      </div>
        </Fragment>
       
    )


}
export default CategoryComponent