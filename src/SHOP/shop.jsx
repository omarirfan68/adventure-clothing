import CategoriesPreview from './CATEGORY-PRE'
import CategoryComponent from '../CATEGORIES-COMPONENT/CATEGORIES-COMPONENT'
import {Route , Routes} from 'react-router-dom'
import './shop.scss'


const Shop = () => {
    return (
        <Routes>
            <Route index element= {<CategoriesPreview/>}/>
            <Route path= '/:category' element = {<CategoryComponent/>}/>
        </Routes>
    )

}
export default Shop