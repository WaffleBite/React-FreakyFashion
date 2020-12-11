import './Search.scss';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {useCombobox} from 'downshift';

const SearchPage = () => {

  const [inputItems, setInputItems] = useState([])
  const [products, setProducts] = useState([]);
    console.log(products)

    useEffect(() => {

        fetch("https://localhost:44302/Umbraco/Api/Products/GetProducts")
            .then(x => x.json())
            .then(data => {
                setProducts(data);
                //data.forEach(x => console.log(x.name));
            });
    }, []);

    // const handleChange = (e) =>{
    //     setProducts({searchField:e.target.value})
    // }

    const {getInputProps, getComboboxProps} = useCombobox({
        items: inputItems,
        onInputValueChange: ({inputValue}) => {
          setInputItems(
            products.filter((item) => 
              item.name.toLowerCase().includes(inputValue.toLowerCase())
            )
          )
        },
      })

    return(
        <div className="my-container">
            <form action="@Model.Url" method="GET" id="search">
                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "20px" }} {...getComboboxProps()}>
                        <input {...getInputProps()} type="text" placeholder="search..." />
                    </div>
                </div>
                <div style={{ marginTop: "25px"}}>

                    <p>Your search for <strong>inputValue</strong> gave 0 results </p>


                        <div>
                            {inputItems.map((item) => (
                                <Link to={'/product/' + item.id} >
                                    <div className="results" key={item.id}>
                                        <div>  
                                            <img src={item.imageUrl} style={{ width: "150px" }} alt="productPicture"/>                                      
                                        </div>
                                        <div style={{margin: "10px 25px"}}>
                                            <h3>{item.name}</h3>
                                            <p>{item.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                            
                        </div>


                    {/* {products.filter((val) => {
                        if(products == "") {
                            return <div></div>
                        } else if(val.name.includes(products)){
                            return val
                        }
                    }).map(x => {
                            return (
                                <Link to={'/product/' + x.id} >
                                    <div className="results">
                                    <div>
            
                                        <img src={x.imageUrl} style={{ width: "150px" }} alt="productPicture"/>
                                        
                                    </div>
                                    <div style={{margin: "10px 25px"}}>
                                        <h3>{x.name}</h3>
                                        <p>{x.price}</p>
                                    </div>
                                </div>
                                </Link> 
                            )
                        })
                    } */}

                    {/* <a href="/">
                        <div className="results">
                            <div>
    
                                <img src={image} style={{ width: "150px" }} alt="productPicture"/>
                                
                            </div>
                            <div style={{margin: "10px 25px"}}>
                                <h3>title</h3>
                                <p>price</p>
                            </div>
                        </div>
                    </a> */}
                                                        
                </div>
            </form>
        </div>
    )
}

export default SearchPage;