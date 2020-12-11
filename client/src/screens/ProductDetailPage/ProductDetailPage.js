import './ProductDetailPage.scss';
import { useEffect, useState} from 'react';
import { useHistory, useParams  } from 'react-router-dom';

const ProductDetailPage = ({  match}) => {


    //const history = useHistory();
    //var products;
    //if (history.location.state.products != undefined) {

    //    products = history.location.state.products
    //} else {

    //    products = props.products;
    //}
    const { id } = useParams();
    const [products, setProducts] = useState([])
  
     
    useEffect(() => {

        fetch("https://localhost:44302/Umbraco/Api/Products/GetProductsById/"+id)
            .then(x => x.json())
            .then(data => {
                setProducts(data);
            });
    }, []);
    
    
    return(
        <div class='my-container'>
            <div class='product-container'>
                <div>
                    <img class="product-page-image" src={products.imageUrl} alt="productPicture" />
                </div>
                <div>
                    <h1>{products.name}</h1>
                    <p class='product-price'>{products.price} kr</p>
                    <div className="product-description" dangerouslySetInnerHTML={{ __html: products.description }}></div>
                   
                    <button>Buy</button>
                    <br /> <br />
                    <hr />
                    <small>NO. {products.artNumber}</small>
                </div>
            </div>
            {/* Recommended products */}
        </div>
    )
}

export default ProductDetailPage;