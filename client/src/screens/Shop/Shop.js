import { useEffect, useState } from 'react';
import './Shop.scss';
import {Link, useHistory} from 'react-router-dom';

const ShopPage = () => {

    // let history = useHistory();

    // const Test = (e) => {
    //     e.preventDefault();
    //     let id = e.currentTarget.toString().split("/")

    //     id = id[id.length - 1];
    //     let productInQuestion = "";
    //     for (let i = 0; i < products.length; i++) {

    //         if (products[i]["id"] == id) {
    //             productInQuestion = products[i];

    //         }

    //     }
    //     history.push({ pathname: "/product/" + productInQuestion.id, state: { products: productInQuestion } })

    // }
    
    let [products, setProducts] = useState([]);
    let [categories, setCategories] = useState([]);
    
    useEffect(() => {

        fetch("https://localhost:44302/Umbraco/Api/Categories/GetCategories/")
            .then(x => x.json())
            .then(data => {
                setCategories(data);
            });
    }, []);

    useEffect(() => {

        fetch("https://localhost:44302/Umbraco/Api/Products/GetProducts")
            .then(x => x.json())
            .then(data => {
                setProducts(data);
                data.forEach(x => console.log(x.name));
            });
    }, [setProducts]);

    return (
        <div className='my-container shop-container'>
            <ul className="no-ul">
                {
                    categories.map(x => {
                        return (
                            <Link to={'/shop/' + x.id}><ul>{x.name}</ul></Link>
                        )
                    })
                }
            
            </ul>
            <div>        
                <h1>New in</h1>
                <div className="product-grid">
                    {
                        products.map(x => {
                            return (
                                <Link to={'/product/' + x.id} >
                                    <div className="product-image-container" >
                                        <img className="product-image" src={x.imageUrl} alt="productPicture" />
                                    </div>
                                    <div>
                                        <p>{x.name}</p>
                                        <p>{x.price} kr</p>
                                    </div>
                                </Link> 
                            )
                        })
                        // products.map(x => { 
                        //     return <Product key={x.id} name={x.name} price={x.price} imageUrl={x.imageUrl} />
                        // })
                    }
                </div>
            </div>
        </div>
    )
}

export default ShopPage;