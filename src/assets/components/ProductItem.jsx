import React from 'react';
import './ProductItem.css'

const ProductItem = ({product, className}) => {

    return (
        <div className={'product ' + className}>
            <div className={'top'}>
                <img className={'img'} src={product.img} alt="" />
                <div className={'nomination'}>{product.nomination}</div>
                <div className={'description'}>{product.description}</div>
                <div className={'price'}>
                    <span>Стоимость: <b>{product.price}</b></span>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;