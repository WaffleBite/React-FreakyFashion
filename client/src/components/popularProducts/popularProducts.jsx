import React from 'react';
import './popularProducts.scss';
import {Link, useHistory, useParams} from 'react-router-dom';

const PopularProducts = ({products}) => {
    var history = useHistory();
    const { id } = useParams();
    
    // const Test = (e) => 
    // {
    //     e.preventDefault();
    //     let id = e.currentTarget.toString().split("/")
        
    //     id = id[id.length - 1];
    //     let productInQuestion = "";
    //     for (let i = 0; i < products.length; i++)
    //     {         
    //         if (products[i]["id"] == id)
    //         {
    //             productInQuestion = products[i];
                
    //         }            
    //     }
    //     history.push({ pathname: "/product/"+productInQuestion.id, state : { products: productInQuestion }})
    //    }

    var items = products.slice(0, 10).map(x => {
        return (
            <Link to={'/product/' + x.id}>
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

    return(
        <section id='popularProducts'>
            <div className="my-container">
                <h1>Trending Products Right Now</h1>

                <div className="product-grid-popular">
                    {items}
                </div>
            </div>
        </section>
    )
};

export default PopularProducts;