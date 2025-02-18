import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getCustomerOrders } from "../services/orders";

function MyOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    // Simulating logged-in user (replace with actual authentication logic)
    const loggedInCustomerId = sessionStorage.getItem("customerId") || 0; // Replace with actual logged-in customer ID
    console.log("Logged-in Customer ID:", loggedInCustomerId);


    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const orderData = await getCustomerOrders(loggedInCustomerId);
                console.log("Fetched Orders:", orderData);

                if (Array.isArray(orderData) && orderData.length > 0) {
                    setOrders(orderData);
                }
                else{
                    setOrders([]);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching orders", error);
                setLoading(false);
            }
        };
        fetchOrders();
    }, [loggedInCustomerId]);

    return (
        <div className="container">
            <Navbar />
            <h2 className="heading text-center">My Orders</h2>

            {loading ? <p>Loading...</p> : (
                <div className="row">
                    {orders.length === 0 ? (
                        <p>You have not placed any orders yet.</p>
                    ) : (
                        orders.map((order) => (
                            <div className="col-md-4 mb-3" key={order.orderId}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Order #{order.orderId}</h5>
                                        <p><strong>Placed On:</strong> {order.createdOn}</p>
                                        <p><strong>Total Quantity:</strong> {order.totalQuantity}</p>
                                        <p><strong>Status:</strong> {order.status}</p>
                                        <p><strong>Products:</strong> {order.productName ? order.productName.join(", ") : "No products found"}</p>
                                        <p><strong>Total Price:</strong> ${order.totalPrice.toFixed(2)}</p>
                                        {/* <p><strong>Product ID:</strong> {order.productId}</p> */}
                                       
                                        {/* <p className="card-text">
    <strong>Products:</strong> {order?.products?.length > 0 
        ? order.products.map(product => product.name).join(", ") 
        : "No products"}
</p> */}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default MyOrders;
