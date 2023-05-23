import React, {useState, useEffect} from 'react';
import ProductItem from "./ProductItem";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [inputSearch, setInputSearch] = useState('');

    async function fetchProducts() {
        let res = await fetch('http://localhost:3001/products', {
            headers: {
                'Content-type': 'application/json',
            }
        });
        res = await res.json();
        setProducts(res.products);
        setFilteredProducts([...res.products]);
    }l
    async function fetchCategories() {
        let res = await fetch('http://localhost:3001/categories', {
            headers: {
                'Content-type': 'application/json',
            }
        });
        res = await res.json();
        setCategories(res.categories);
    }

    async function onSearch(e) {
        e.preventDefault();
        setFilteredProducts(products.filter(p=>p.nomination.toLowerCase().includes(inputSearch.toLocaleLowerCase())));
    }

    useEffect(() => {       
        fetchProducts();
        fetchCategories();
    }, [])


    async function onClickCategory(category) {
        let res = await fetch('http://localhost:3001/productsCategory' +
        `?categoryId=${category.id}`, {
            headers: {
                'Content-type': 'application/json',
            }
        });
        res = await res.json();
        setProducts(res.products);
        setFilteredProducts([...res.products]);
    }

    return (
        <>
            <form className='seacrh' onSubmit={onSearch}>
                <label className='menu' htmlFor="inburger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fillRule="currentColor" className='bi bi-list' viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </label>
                    <input type="checkbox" id="inburger" />
                    <div className='burger'>
                        <label className='menu' htmlFor="inburger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fillRule="currentColor" className='bi bi-list' viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </label>
                        <div className='cursor' onClick={fetchProducts}>
                            Главная
                        </div>
                        {categories.map(category => (
                            <div className='cursor' onClick={() => onClickCategory(category)} >
                                {category.nomination}
                            </div>
                        ))}
                    </div>
                    <input className={'searchInput'}
                           placeholder='Я ищу...'
                           type="text"
                           onChange={(evt) => {setInputSearch(evt.target.value)}}
                           value={inputSearch}/>
                <button className={'searching'} type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fillRule="currentColor" className={"bi bi-search"} viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
            </form>
            <div className={'list'}>
                {filteredProducts.map(item => (                    
                    <ProductItem
                        product={item}
                        className={'item'}
                        key={item.id}
                    />
                ))}
            </div>
        </>
    );
};

export default ProductList;

