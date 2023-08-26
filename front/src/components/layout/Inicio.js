import logo from '../img/camaraHome.jpg'

const Home = (props) => {
    return (
        <section id="inicio">
        <div class="banner">
            <img src={logo} class="img-fluid d-block w-100 ancho" alt="Camara seguridad"/>
            <div class="mensajeBanner d-none d-md-block">
                <h5>Servicios de seguridad para todo el país.</h5>
            </div>
        </div>
        <div class="row gx-0 gy-0 textoNormal">
            <div class="col-md-6">
                <h2 class="tituloInicial">
                    Especialistas en soluciones integrales de seguridad para el desarrollo de su empresa y propiedad.
                </h2>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-6"></div>
            <div class="col-md-6">
                <p>
                    Contamos con una amplia experiencia en el sector de seguridad, asumiendo día a día nuevos desafíos y
                    elevando
                    el estándar de calidad en nuestros diferentes servicios para lograr respuestas de excelencia.
                    Nuestro
                    principal objetivo es ayudarlo a implementar, integrar y solucionar cuestiones vinculadas a la
                    seguridad
                    electrónica a través de las distintas tecnologías para que su empresa, negocio o pripiedad se
                    encuentre
                    resguardada.
                </p>
            </div>
        </div>
    </section>
    )
}

export default Home