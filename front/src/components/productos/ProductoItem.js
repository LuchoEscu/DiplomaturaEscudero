import React from "react";

const ProductoItem = (props) => {
    const { nombre, descripcion, precio, imagen } = props;

    return (
        <a href="#view" data-bs-toggle="modal" data-bs-target="#exampleModal" className="list-group-item list-group-item-action itemsProd" aria-current="true">
            <div className="row imgProd">
                <div className="col-md-4">
                    <img src={imagen}/>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-start tituloItem">{nombre}</p>
                        </div>
                        <div className="col-md-12">
                            <p className="text-start"><div dangerouslySetInnerHTML={{__html: descripcion}}/></p>
                        </div>
                        <div className="col-md-12">
                            <h3 className="text-start precioItem">${precio}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}


export default ProductoItem;