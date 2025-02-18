import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getPlacedOrders } from "../services/orders";

function PlacedOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const orderData = await getPlacedOrders();
                console.log("Fetched Orders:", orderData);

                if (Array.isArray(orderData)) {
                    setOrders(orderData);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching orders", error);
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    return (
        <div className="container">
            <Navbar />
            <h2 className="heading text-center">Placed Orders</h2>

            {loading ? <p>Loading...</p> : (
                <div className="row">
                    {orders.length === 0 ? (
                        <p>No orders have been placed yet.</p>
                    ) : (
                        orders.map((order, index) => (
                            <div key={index} className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Order #{index + 1}</h5>
                                        <p><strong>Quantity:</strong> {order.totalQuantity}</p>
                                        <p><strong>Status:</strong> {order.status}</p>
                                        <p><strong>Customer ID:</strong> {order.customerId}</p>
                                        <p><strong>Product:</strong> {order.productName}</p>
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

export default PlacedOrders;
