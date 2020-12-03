import React from 'react';
import './footer.style.scss';

const Footer = () => (
    <footer>
        <div className="footer-icons">
            <div>
                <i className="fas fa-globe-europe fa-3x"></i> 
                <p>Gratis frakt och returer</p>
            </div>
            <div>
                <i className="fas fa-fighter-jet fa-3x"></i>
                <p>Expressfrakt</p>
            </div>
            <div>
                <i className="fas fa-shield-alt fa-3x"></i>
                <p>Säkra betalningar</p>
            </div>
            <div>
                <i className="far fa-smile-beam fa-3x"></i>
                <p>Nyheter varje dag</p>
            </div>
        </div>

        <div className="footer-social-links">
            <h3>Follow us!</h3>
            <ul>
                <li>
                    <a href="/">
                        <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-twitter-square fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-youtube-square fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </footer> 
);

export default Footer;