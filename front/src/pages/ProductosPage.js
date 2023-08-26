import { useState, useEffect } from "react";
import axios from "axios";
import ProductoItem from "../components/productos/ProductoItem";

const ProductosPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
    
    
    useEffect(() => {
        const cargarProductos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/productos');
            setProductos(response.data);
            setLoading(false);
        };

        cargarProductos();
    }, []);

    return (
        <section className="container" Style="margin-bottom: 30px; margin-top: 30px;">
            <h2 Style="margin-bottom: 15px">Productos</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    productos.map(item => 
                        <ProductoItem key={item.id} 
                        nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} imagen={item.imagen} />
                        )
                )
            }
        </section>
        )
}

export default ProductosPage