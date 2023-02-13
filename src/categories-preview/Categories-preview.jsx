import './Categories-preview.scss';
import { Link } from 'react-router-dom';
import ProductCard from '../SHOP/ProductCard';
const CategoryPreview = ({title,Product})=>{
 return(
    <div className='category-preview-container'>
        <h2>
            <Link className='title' to = {title}>{title.toUpperCase()}</Link>
        </h2>
        <div className='preview'>
            {
                Product
                .filter((_,index)=> index<4)
                .map((Products)=>
                <ProductCard key={Products.id} Product={Products}/>)
            }
        </div>

    </div>
 )
}
export default CategoryPreview;