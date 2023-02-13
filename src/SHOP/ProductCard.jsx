import Button from '../components/button';
import './ProductCard.scss'
import { useContext } from 'react';
import { CardContext } from './Cart-content';
const ProductCard = ({Product}) => {
    const {name,price,imageUrl} = Product
    const {Additemtocart}=useContext(CardContext);

    const productadd = () => {
        Additemtocart(Product);
    };
      
    return (
        <div className='product-card-container'>

            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}
                </span>
                <span className='price'>{price}
                </span>
            </div>
            <Button buttonType='inverted' onClick={productadd} >Add To Cart</Button>

        </div>

    )
}
export default ProductCard;