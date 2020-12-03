import image from '../../Images/Products/1.jpg';
import './Search.scss';

const SearchPage = () => (
    <div className="my-container">
        <form action="@Model.Url" method="GET" id="search">
            <div style={{ display: "flex" }}>
                <div style={{ marginRight: "20px" }}>
                    <input type="text" placeholder="search" name="q" value=""/>
                </div>
                <div>
                    <button className="search-button">Search<i className="fa fa-search"></i></button>
                </div>
            </div>
            <div style={{ marginTop: "25px"}}>

                <p>Your search for <strong>null</strong> gave 0 results </p>

                <a href="/">
                    <div className="results">
                        <div>
  
                            <img src={image} style={{ width: "150px" }}/>
                            
                        </div>
                        <div style={{margin: "10px 25px"}}>
                            <h3>title</h3>
                            <p>price</p>
                        </div>
                    </div>
                </a>
                                                      
            </div>
        </form>
    </div>
)

export default SearchPage;