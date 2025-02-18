import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import cake1 from '../images/cake1.jpg';
import cake2 from '../images/cake2.jpg';
import cake3 from '../images/cake6.webp';
import card1 from '../images/card1.jpg';
import card2 from '../images/card2.webp';
import card3 from '../images/card3.webp';
// import cake4 from '../images/cake4.jpg';
// import cake5 from '../images/cake5.jpg';

function Home() {
  return (
    <div className="container">
      <Navbar />

      {/* Hero Section */}
      <div className="container text-center my-5">
        <h1 className="display-4">Welcome to Our Bakery!</h1>
        <p className="lead">Delicious Cakes & Chocolates for Every Occasion</p>
      </div>

      <Carousel className="container">
        <Carousel.Item>
          <img
            className="d-block" 
            style={{ "display": "block",
                "margin-left": "auto",
                "margin-right": "auto",
                "width": "50%"}}
            src={cake1}
            alt="Cake 1"
          />
          <Carousel.Caption>
            <h3>Delicious Cake</h3>
            <p>A perfect cake for any occasion!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ "display": "block",
                "margin-left": "auto",
                "margin-right": "auto",
                "width": "50%"}}
            src={cake2}
            alt="Cake 2"
          />
          <Carousel.Caption>
            <h3>Chocolate Cake</h3>
            <p>Rich and chocolatey goodness!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            style={{ "display": "block",
                "margin-left": "auto",
                "margin-right": "auto",
                "width": "60%"}}
            src={cake3}
            alt="Chocolate 1"
          />
          <Carousel.Caption>
            <h3>Walnut Delight</h3>
            <p>For nut lovers!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
<hr></hr>
      {/* Featured Products Section */}
      <div className="container">
        <h2 className="text-center">Our Special Cakes & Chocolates</h2>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <img
                src={card1}
                style={{ "display": "block",
                    "margin-left": "auto",
                    "margin-right": "auto",
                    "width": "90%"}}
                className="card-img-top"
                alt="Chocolate Cake"
              />
              <div className="card-body">
                <h5 className="card-title">Chocolate Cake</h5>
                <p className="card-text">Rich and delicious chocolate cake.</p>
                <Link to="/products" className="btn btn-dark">
                  View More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img
                src={card2}
                style={{ "display": "block",
                    "margin-left": "auto",
                    "margin-right": "auto",
                    "width": "90%"}}
                className="card-img-top"
                alt="Strawberry Cake"
              />
              <div className="card-body">
                <h5 className="card-title">Strawberry Cake</h5>
                <p className="card-text">Fresh and creamy strawberry cake.</p>
                <Link to="/products" className="btn btn-dark">
                  View More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img
                src={card3}
                style={{ "display": "block",
                    "margin-left": "auto",
                    "margin-right": "auto",
                    "width": "90%"}}
                className="card-img-top"
                alt="Hazelnut Browniee"
              />
              <div className="card-body">
                <h5 className="card-title">Hazelnut Browniee</h5>
                <p className="card-text">Premium handmade hazelnut brownie.</p>
                <Link to="/products" className="btn btn-dark">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        © 2025 Bakery E-Commerce | All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
