import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { IProduct, ProductInputs } from "../interface/Product"

import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useLoading } from "../context/Loading";

export const useProduct = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [product, setProduct] = useState<IProduct>();
    const [error, setError] = useState<string | null>()
    const { loading, setLoading } = useLoading();
    const { id } = useParams();
    const errorRef = useRef<string | null>(null);
    const navigate = useNavigate();

    const getAllProducts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('/products');
            setProducts(data)
            console.log(data);

        } catch (error) {
            const errorMessage = (error as Error).message;
            setError(errorMessage);
            if (errorMessage !== errorRef.current) {
                toast.error(errorMessage);
                errorRef.current = errorMessage;
            }
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getAllProducts()
    }, [])

    const getProductById = async (id: string) => {
        try {
            setLoading(true);
            const { data } = await axios.get(`/products/${id}`);
            setProduct(data[0]);
            // console.log("Fetched product by ID:", data);
        } catch (error) {
            const errorMessage = (error as Error).message;
            setError(errorMessage);
            if (errorMessage !== errorRef.current) {
                toast.error(errorMessage);
                errorRef.current = errorMessage;
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!id) return;
        console.log("Fetching product with ID:", id);
        getProductById(id);
    }, [id]);

    const addProduct = async (product: ProductInputs) => {
        try {
            const { data } = await axios.post("/products", product)
            setProducts(prevProducts => [...prevProducts, data]);
            toast.success("Product added successfully");
            navigate('/admin/products');
        } catch (error) {
            const errorMessage = (error as Error).message;
            setError(errorMessage);
            if (errorMessage !== errorRef.current) {
                toast.error(errorMessage);
                errorRef.current = errorMessage;
            }
        }
    }
    const editProduct = async (product: ProductInputs) => {
        try {
            await axios.put(`/products/${id}`, product)
            toast.success("Product edit successfully");
            navigate('/admin/products');
        } catch (error) {
            const errorMessage = (error as Error).message;
            setError(errorMessage);
            if (errorMessage !== errorRef.current) {
                toast.error(errorMessage);
                errorRef.current = errorMessage;
            }
        }

    }
    const deleteProduct = async (id: string) => {
        const confirm = window.confirm('Are you sure you want to delete this product')
        if (!confirm) return;
        try {
            await axios.delete(`/products/${id}`)
            setProducts(products.filter(product => product._id !== id));
            toast.success("Delete successfully");
        } catch (error) {
            const errorMessage = (error as Error).message;
            setError(errorMessage);
            if (errorMessage !== errorRef.current) {
                toast.error(errorMessage);
                errorRef.current = errorMessage;
            }
        }

    }


    return { products, product, loading, error, addProduct, editProduct, deleteProduct };

}


export const useProductSearch = () => {
    const [searchResults, setSearchResults] = useState([]);
    const { loading, setLoading } = useLoading();
    const [error, setError] = useState<string | null>(null);
    const errorRef = useRef<string | null>(null);

    const searchProducts = async (searchTerm: string) => {
        if (!searchTerm.trim()) {
            // Không thực hiện tìm kiếm nếu từ khóa trống
            setSearchResults([]);
            return;
        }

        setLoading(true);
        setError(null);
        try {
            const { data } = await axios.get(`/products?search=${searchTerm}`);
            setSearchResults(data);
        } catch (error) {
            const errorMessage = (error as Error).message;
            setError(errorMessage);
            if (errorMessage !== errorRef.current) {
                toast.error(errorMessage);
                errorRef.current = errorMessage;
            }
        } finally {
            setLoading(false);
        }
    };

    return { searchResults, loading, error, searchProducts };
};