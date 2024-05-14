import axios from "axios";

// homepage - https://fakestoreapi.com/products GET
// Product page - https://fakestoreapi.com/products/:id GET
// Cart page - https://fakestoreapi.com/cart GET

const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com"
});

const getAllProducts = async () => {
    try {
        const response = await axiosInstance.get("/products");
        return response.data;
    } catch (err) {
        console.log("Something went wrong:", err);
        throw err;
    }
};

const getProductById = async (id) => {
    try {
        const response = await axiosInstance.get(`/products/${id}`);
        return response.data;
    } catch (err) {
        console.log("Something went wrong:", err);
        throw err; // Re-throwing the error to handle it outside
    }
};

const getCartItems = async () => {
    try {
        const response = await axiosInstance.get("/cart");
        return response.data;
    } catch (err) {
        console.log("Something went wrong:", err);
        throw err; // Re-throwing the error to handle it outside
    }
};

export {
    getAllProducts,
    getProductById,
    getCartItems
};
