import axios from "axios";
export const getCustomerOrders = async (customerId) => {
    try {
      const response = await axios.get(`http://localhost:8080/orders/customer/${customerId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch orders');
    }
  };
  export const getPlacedOrders = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/orders`);
        return response.data;
    } catch (error) {
        console.error("Error fetching placed orders", error);
        return [];
    }
};
export const placeOrder = async (orderData) => {
    try {
        const response = await axios.post(`http://localhost:8080/orders/place`,orderData);
        return response.data;
    } catch (error) {
        console.error("Error placing order", error);
        throw error;
    }
};