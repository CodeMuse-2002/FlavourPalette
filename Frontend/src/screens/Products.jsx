import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getCategory } from "../services/product";
import { useNavigate } from "react-router-dom";

function Products() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productData = await getCategory();
                console.log("Fetched Products:", productData);

                if (Array.isArray(productData)) {
                    // Extract unique categories
                    
                    setCategories(productData);
                } else {
                    setCategories([]);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products", error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="container">
            <Navbar />
            <h2 className='heading'>Category</h2>

            {/* Display Categories */}
            {loading ? <p>Loading...</p> : (
                <div className="list-group">
                    {categories.length === 0 ? <p>No categories found.</p> : (
                        categories.map((categoryObj, index) => (
                            <button 
                                key={index}
                                className="list-group-item list-group-item-action"
                                onClick={() => navigate(`/products/${categoryObj.category}`)}
                            >
                                {categoryObj.category}
                            </button>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default Products;
