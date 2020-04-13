import React from 'react';

const Footer = () => {
    return (<footer className="footer-distributed">
 
    <div className="footer-left">

    <h3>KH<span>ANAN</span></h3>

    <p className="footer-links">
    <a href="./home">Home</a>
·
    <a href="#productser">Products</a>
    </p>

    <p className="footer-company-name">KHanan &copy; 2019</p>
    </div>

    <div className="footer-center">

    <div>
    <i className="fa fa-map-marker"></i>
    <p><span>Dhanmondi</span>Dhaka , Bangladesh</p>
    </div>

    <div>
    <i className="fa fa-phone"></i>
    <p>+88 01913872351</p>
    </div>

    <div>
    <i className="fa fa-envelope"></i>
    <p><a href="mailto:khandokeranan@gmail.com">khandokeranan@gmail.com</a></p>
    </div>

    </div>

    <div className="footer-right">

    <p className="footer-company-about">
    <span>About Us</span>
    Developing more games or apps can explore my knowledge with keeping new challenges.
    </p>

    <div className="footer-icons">

    <a href="https://www.facebook.com/khandoker.anan"><i className="fa fa-facebook"></i></a>
    <a href="https://twitter.com/khandokeranan"><i className="fa fa-twitter"></i></a>
    <a href="https://www.linkedin.com/in/khandokeranan"><i className="fa fa-linkedin"></i></a>
    <a href="http://google.com/+khandokeranan"><i className="fa fa-github"></i></a>
    <a href="https://www.instagram.com/khandoker.anan/"><i className="fa fa-instagram"></i></a>

    </div>

    </div>

    </footer>);
}

export default Footer;