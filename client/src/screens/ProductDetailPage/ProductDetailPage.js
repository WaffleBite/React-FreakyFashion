import './ProductDetailPage.scss';

import image from '../../Images/Products/1.jpg';

const ProductDetailPage = () => (
    <div class='my-container'>
        <div class='product-container'>
            <div>
                <img class="product-page-image" src={image} alt="product image" />
            </div>
            <div>
                <h1>productTitle</h1>
                <p class='product-price'>500 kr</p>
                <p class='product-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper tellus bibendum, porta erat at, vulputate libero. Praesent bibendum suscipit turpis, porta aliquet ipsum pellentesque vel. Praesent vel egestas felis. Donec mollis aliquam felis, id finibus odio porttitor et. Duis sit amet viverra odio, quis eleifend est. Nullam aliquet, ante in fermentum blandit, odio mauris aliquam felis, quis condimentum nunc justo sed velit. </p>
                <button>Buy</button>
                <br /> <br />
                <hr />
                <small>NO. articleNumber</small>
            </div>
        </div>

   {/* Recommended products */}
    </div>
)

export default ProductDetailPage;