import axios from "axios";
import { useState } from "react";


const ContactoPag = (props) => {

    const initialFrom = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialFrom);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));

    };

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialFrom);
        }
    };

    return (
        <main className="holder contacto">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <div className="col-md-8 mt-3">
                                        <legend className="text-center header">Contacto</legend>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-8 mb-3">
                                            <input type="text" placeholder="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} className="form-control" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-md-8 mb-3">
                                            <input type="text" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} className="form-control" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-md-8 mb-3">
                                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} className="form-control" placeholder="Teléfono" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-md-8 mb-3">
                                            <textarea className="form-control" placeholder="Ingrese el mensaje de consulta" name="mensaje" value={formData.mensaje} onChange={handleChange} rows="7"></textarea>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-md-8 text-center mb-3">
                                            <input type="submit" className="btn btn-primary btn-lg" value="Enviar" />
                                        </div>
                                    </div>
                            </form>
                            {sending ? <p>Enviando... </p> : null}
                            {msg ? <p>{msg}       </p> : null}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ContactoPag