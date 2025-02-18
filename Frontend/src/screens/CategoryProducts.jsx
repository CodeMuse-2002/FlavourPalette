import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getProductByCategory } from "../services/product";
import { placeOrder } from "../services/orders";
import { useNavigate } from "react-router-dom"; // Import navigation
import { toast } from "react-toastify";


function CategoryProducts() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const customerId = localStorage.getItem("customerId") || 1; // Simulated logged-in user
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productData = await getProductByCategory(category);
                console.log("Fetched Products:", productData);

                if (Array.isArray(productData)) {
                    setProducts(productData);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products", error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, [category]);

    const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        toast(`${product.productName} added to cart!`);
    };

    const handlePlaceOrder = async () => {
        if (!cart || cart.length === 0) {
            toast("No items selected. Please add items to your order.");
            return;
        }

        const orderData = {
            customerId: customerId,
            productIds: cart.map((product) => product.productId),
            totalQuantity: cart.length,
            status: "PLACED"
        };

        try {
            const response = await placeOrder(orderData);
            console.log("Order Placed:", response);
            toast("Your order has been placed successfully!");
            setCart([]);
            navigate(`/my-orders`)
        } catch (error) {
            console.error("Error placing order", error);
            toast("Failed to place order.");
        }
    };

    return (
        <div className="container">
            <Navbar />
            <h2 className="heading text-center">{category}</h2>

            {loading ? <p>Loading...</p> : (
                <div className="row">
                    {products.length === 0 ? (
                        <p>No products found in the {category} category.</p>
                    ) : (
                        products.map((product, index) => (
                            <div key={index} className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.productName}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                                        <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

            {cart.length > 0 && (
                <div className="order-summary mt-4 p-3 border rounded">
                    <h4>Your Cart</h4>
                    <ul className="list-group mb-3">
                        {cart.map((item, index) => (
                            <li key={index} className="list-group-item">
                                {item.productName} - ${item.price}
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-success w-100" onClick={handlePlaceOrder}>
                        Place Order
                    </button>
                </div>
            )}
        </div>
    );
}

export default CategoryProducts;
