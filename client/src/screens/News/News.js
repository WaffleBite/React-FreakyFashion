import './News.scss';
import image from '../../Images/Products/1.jpg';

const NewsPage = () => (
    <div>
        <div className="my-container">
            <div className="grid">

                <div className="card">
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">NewsTitle</h5>
                    <p className="card-text">NewsSubtitle</p>
                    <a href="/" className="btn btn-primary">Show</a>
                </div>
                </div>

                <div className="card">
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">NewsTitle</h5>
                    <p className="card-text">NewsSubtitle</p>
                    <a href="/" className="btn btn-primary">Show</a>
                </div>
                </div>

                <div className="card">
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">NewsTitle</h5>
                    <p className="card-text">NewsSubtitle</p>
                    <a href="/" className="btn btn-primary">Show</a>
                </div>
                </div>

                <div className="card">
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">NewsTitle</h5>
                    <p className="card-text">NewsSubtitle</p>
                    <a href="/" className="btn btn-primary">Show</a>
                </div>
                </div>
                
                
            </div>

        </div>
    </div>
    
)

export default NewsPage;