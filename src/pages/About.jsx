import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

function About() {
    return (
        <>
            <div>
                <Nav />
                <div className="min-h-screen flex flex-col items-center">
                    <div className="flex flex-col items-center mt-10">
                        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center">
                            <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
                                <img src="/src/images/raul.jpeg" alt="Portrait of a smiling man with a beard and short hair, wearing a light blue striped shirt" className="w-64 h-80 object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="w-full md:w-1/2 px-5 text-white text-justify">
                                <h2 className="text-4xl font-bold mb-5 text-green-500">Raúl Álvarez</h2>
                                <p className="mb-4">Soy Desarrollador Full Stack, actualmente vivo en Venezuela.</p>
                                <p className="mb-4">Desde que comencé mi trayectoria en el mundo de la programación e disfrutado cada paso, me agrada la idea de trabajar en equipo de poder aportar mi conocimientos para crear algo maravilloso y ser un activo valioso en cualquier equipo en el que me desarrolle. Aunque estoy en la búsqueda de mi primer trabajo actualmente, siempre estoy investigando y aprendiendo las nuevas tendencias en el mundo del desarrollo.</p>
                                <p className="mb-4">Soy una persona tranquila, curiosa por naturaleza y trabajo constantemente para mejorar mis habilidades. Trato de buscar todo el Feedback posible en los proyectos que realizo con el fin de mejorar no solo como desarrollador sino, también como persona. Espero que sea de agrado esta pagina y puedas tener un buena impresión.</p>
                                <p className="mb-4">Saludos!!!!</p>
                                <p className="text-green-500 mb-4">raul509@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center min-h-screen" id="habilities">
                    <h1 className="text-3xl font-bold text-green-500 mb-6" >Mis habilidades</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-3">
                        <div className="bg-green-900 p-6 rounded-lg shadow-lg ">
                            <i className="fas fa-terminal text-green-400 text-4xl mb-4 bg-transparent"></i>
                            <h2 className="text-xl font-semibold mb-2 bg-transparent text-white">Lenguaje y otros</h2>
                            <p className="bg-transparent text-xl text-white text-center">Estructura del contenido HTML, Lenguajes como JavaScript, Python, PHP entre otros.</p>
                        </div>
                        <div className="bg-green-900 p-6 rounded-lg shadow-lg ">
                            <i className="fas fa-layer-group text-green-400 text-2xl mb-4 bg-transparent"></i>
                            <h2 className="text-xl font-semibold mb-2 bg-transparent text-white">CSS y otros</h2>
                            <p className="bg-transparent text-xl text-white text-center">Utilizado para el diseño y layout CSS, también frameworks de css como tailwind y bootstrap y preprocesadores como SASS.</p>
                        </div>
                        <div className="bg-green-900 p-6 rounded-lg shadow-lg ">
                            <i className="fas fa-code-branch text-green-400 text-2xl mb-4 bg-transparent"></i>
                            <h2 className="text-xl font-semibold mb-2 bg-transparent text-white">Git, Git hub y Figma</h2>
                            <p className="bg-transparent text-xl text-white text-center">Manejo de control de versiones, alojamiento de proyectos (almacenar, compartir y trabajar) y generacion de prototipos en figma.</p>
                        </div>
                        <div className="bg-green-900 p-6 rounded-lg shadow-lg">
                            <i className="fas fa-code text-green-400 text-2xl mb-4 bg-transparent"></i>
                            <h2 className="text-xl font-semibold mb-2 bg-transparent text-white">Framework</h2>
                            <p className="bg-transparent text-xl text-white text-center">Actualmente el que mas domino React. Me encuentro en proceso de aprendizaje de aprendiendo Angular y Vue. y Next.</p>
                        </div>
                        <div className="bg-green-900 p-6 rounded-lg shadow-lg">
                            <i className="fas fa-database text-green-400 text-2xl mb-4 bg-transparent"></i>
                            <h2 className="text-xl font-semibold mb-2 bg-transparent text-white">Base de Datos</h2>
                            <p className="bg-transparent text-xl text-white text-center">Base de datos relacionales Mysql y PostgreSQL . No relacionales Mongo Db.</p>
                        </div>
                        <div className="bg-green-900 p-6 rounded-lg shadow-lg">
                            <i className="fas fa-tools text-green-400 text-2xl mb-4 bg-transparent"></i>
                            <h2 className="text-xl font-semibold mb-2 bg-transparent text-white">Otros</h2>
                            <p className="bg-transparent text-xl text-white text-center">Entre otros podemos agregar Firebase, Postman y diferentes tipos de herramientas que proporcionan una base para la construcción de aplicaciones.</p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto p-4">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-green-500 mb-6">Software</h1>
                        <div className="flex justify-center flex-wrap space-x-3 ">
                            <div className="w-64 bg-transparent border-1 border-gray-600 p-4 m-2">
                                <i className="fas fa-code fa-3x text-green-500 text-2xl mb-4"></i>
                                <h2 className="text-white ">Visual Studio</h2>
                                <p className="text-white">Editor de Código por preferencia.</p>
                                <div className="text-green-500 ">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                            <div className="w-64 bg-transparent border-1 border-gray-600 p-4 m-2">
                                <i className="fas fa-code-branch fa-3x text-green-500 text-2xl mb-4 "></i>
                                <h2 className="text-white ">Git</h2>
                                <p className="text-white ">Manejo de control de Versiones</p>
                                <div className="text-green-500">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <div className="w-64 bg-transparent border-1 border-gray-600 p-4 m-2">
                                <i className="fas fa-pencil-ruler fa-3x text-green-500 text-2xl mb-4"></i>
                                <h2 className="text-white">Figma</h2>
                                <p className="text-white">Prototipos en figma</p>
                                <div className="text-green-500">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <i className="far fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-green-500 mb-6">Educación</h1>
                        <div className="flex justify-center flex-wrap space-x-3">
                            <div className="w-64 bg-transparent border-1 border-gray-600 p-4">
                                <i className="fas fa-graduation-cap fa-3x text-green-500 text-2xl mb-4"></i>
                                <h2 className="text-white">4Geeks Academy</h2>
                                <p className="text-white">Curso de Full Stack</p>
                            </div>
                            <div className=" w-64 bg-transparent border-1 border-gray-600 p-4">
                                <i className="fas fa-book fa-3x text-green-500 text-2xl mb-4"></i>
                                <h2 className="text-white">Lexpin</h2>
                                <p className="text-white">Curso de Full Stack</p>
                            </div>
                            <div className=" w-64 bg-transparent border-1 border-gray-600 p-4">
                                <i className="fas fa-laptop-code fa-3x text-green-500 text-2xl mb-4"></i>
                                <h2 className="text-white">Autodidacta</h2>
                                <p className="text-white">Aprendizaje por propios medio incluyendo Udemy y otros,</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-3xl font-bold text-green-500 mb-6">Herramientas de trabajo</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center bg-transparent border-1 border-gray-600">
                            <i className="fab fa-github text-4xl mb-4 text-white"></i>
                            <p className="text-green-500">Git Hub</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center bg-transparent border-1 border-gray-600">
                            <i className="fa-brands fa-neos text-4xl mb-4 text-white"></i>
                            <p className="text-green-500">Notion</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center bg-transparent border-1 border-gray-600">
                            <i className="fab fa-stack-overflow text-4xl mb-4 text-white"></i>
                            <p className="text-green-500">Stack Overflow</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center bg-transparent border-1 border-gray-600">
                            <i className="fab fa-google text-4xl mb-4 text-white"></i>
                            <p className="text-green-500">Google</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center bg-transparent border-1 border-gray-600">
                            <i className="fab fa-slack text-4xl mb-4 text-white"></i>
                            <p className="text-green-500">Slack</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center bg-transparent border-1 border-gray-600">
                            <i className="fab fa-discord text-4xl mb-4 text-white"></i>
                            <p className="text-green-500">Discord</p>
                        </div>
                    </div>
                    <button className="mt-8 bg-green-500 text-gray-900 px-6 py-2 rounded-full mb-10">Contáctame</button>
                </div>
              <Footer />
            </div>

        </>
    );
}

export default About