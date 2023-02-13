import './CHECKOUT-ITEM.scss'

const CheckoutItem = ({cartitem, clearItem ,iNCREMENT,DECREMENT})=>{
    const {imageUrl,price,name,quantity}=cartitem
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={DECREMENT}>🥺</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={iNCREMENT}>😈</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItem}>&#10005;</div>
        </div>
    )
}
export default CheckoutItem
