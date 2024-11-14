const Footer = () => {
    return (
        <>
            <footer className="py-10">
                <div className="container mx-auto flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-bold text-green-500">Rjalvarez</h1>
                    </div>
                    <div>
                        <h2 className="text-green-500 font-semibold">Inicio</h2>
                        <ul className="mt-2 text-white">
                            <li><a href="/about">Acerca de mi</a> </li>
                            <li><a href="#projects">Proyectos</a> </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-green-500 font-semibold">Contáctame</h2>
                        <ul className="mt-2 text-white">
                            <li><a href="/contact">Correo</a></li>
                            <li><a href="http://linkedin.com/in/raul-alvarez-497543144" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-green-500 font-semibold">Social</h2>
                        <div className="mt-2 flex space-x-4 text-white">
                           <a href="https://github.com/rjalvarez27"> <i className="fab fa-github fa-2x"></i></a>
                           <a href="https://www.linkedin.com/in/raul-alvarez-497543144"> <i className="fab fa-linkedin fa-2x"></i></a>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-10 border-t border-gray-700 pt-4">
                    <p className="text-center text-gray-500">© 2024 Rjalvarez Version 1.0 Todos los derechos reservados</p>
                </div>
            </footer>
        </>
    );
}

export default Footer