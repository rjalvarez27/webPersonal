import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

function App() {
  return (
    <>
      <div>
        <Nav />
        <div className="w-full flex flex-col relative items-center justify-center">
          <div className="flex flex-col items-center sm:flex-row">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white">
                <span className="text-green-500 text-4xl">Soy</span> Raul Alvarez
              </h1>
              <h2 className="text-4xl font-bold text-green-500 mt-2">Developer</h2>
              <p className="text-white mt-4 max-w-xl">
                Bienvenido a mi sitio web personal. Espero que sea de su agrado!
              </p>
              <div className="mt-6 space-x-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded"><a href="#projects" className="bg-transparent">Ver proyectos</a></button>
                <button className="border border-white text-white px-4 py-2 rounded"><i className="fa-brands fa-linkedin"></i> <a href="https://www.linkedin.com/in/raul-alvarez-497543144/">Linkedin</a></button>
              </div>
            </div>
            <div className="m-6 p-6">
              <img src="/src/images/portada.png" alt="Portada" className="w-80 h-96 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
        <div className="w-full h-screen flex flex-col items-center justify-center" >
          <div
            className="flex flex-col rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row border-2 border-green-500 md:shadow-none items-center px-2">
            <img
              className="w-60 rounded-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg p-2"
              src="/src/images/raul.jpeg"
              alt="Perfil" />
            <div className="flex flex-col justify-center px-6 py-8">
              <h5 className="text-3xl font-bold text-green-500 mb-2">Acerca de mi</h5>
              <p className="text-white text-justify">
                Desarrollador de software en constante aprendizaje, bueno para resolver problemas, soy persistente y estoy buscando siempre aprender nuevas tecnologías y hacer nuevos proyectos. Actualmente me encuentro en la búsqueda de nuevas oportunidades donde pueda aprender y desarrollar mis habilidades.
              </p>
              <button className="mt-4 bg-transparent border border-white text-white px-4 py-2 rounded"><a href="/about" className="bg-transparent">Mas acerca de mi</a> </button>
            </div>
          </div>
        </div >
        <div className="w-full  flex flex-col items-center justify-center">
          <h1 className="text-green-500 text-4xl mb-10">Mis habilidades</h1>
          <div className="flex flex-col space-x-2  sm:flex-row  ">
            <div className="w-64 m-2 bg-gray-700 p-6 rounded-lg text-center ">
              <i className="fas fa-laptop-code text-green-400 text-5xl mb-4 bg-transparent"></i>
              <h2 className="bg-transparent text-2xl font-semibold mb-2 text-white">Front-end</h2>
              <p className="bg-transparent text-white text-center">Conocimiento en Diseño de interfaces, implementación lenguajes de programación como por ejemplo JavaScript, optimización de una página web o aplicación y expandibilidad.</p>
            </div>
            <div className="bg-gray-700 m-2  p-6 rounded-lg text-center w-64">
              <i className="fas fa-database text-green-400 text-5xl mb-4 bg-transparent"></i>
              <h2 className="bg-transparent text-2xl font-semibold mb-2 text-white">Back-end</h2>
              <p className="bg-transparent text-white text-center">Conocimiento de lenguajes como Python y PHP. Bases de datos relacionales y no relacionales. Implementación de un API para una web o aplicación.</p>
            </div>
            <div className="bg-gray-700 m-2 p-6 rounded-lg text-center w-64">
              <i className="fas fa-users text-green-400 text-5xl mb-4 bg-transparent"></i>
              <h2 className="bg-transparent text-2xl font-semibold mb-2 text-white">Soft-skills</h2>
              <p className="bg-transparent text-white text-center">Capacidad de trabajar en equipo, y comunicarse de manera efectiva con otros programadores. Resolución de problemas y adaptabilidad a situaciones.</p>
            </div>
          </div>
          <button className="mt-8 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600"><a href="/about#habilities" className="bg-transparent">Ver más de mis skills →</a>
          </button>
        </div>
        <div className="text-center w-full">
          <h1 className="text-green-500 text-4xl mb-10 mt-10" id="projects">Algunos de mis proyectos</h1>
          <div className="w-full">
            <div className="bg-yellow-500 p-10 rounded-lg py-8 mb-10">
              <h1 className="bg-transparent text-xl font-bold text-green-500 m-3">Inventario Bot Telegram</h1>
              <img src="/src/images/bot.jpg" alt="project 1" className="mx-auto mb-4 w-80" />
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-green-600" ><a href="https://github.com/rjalvarez27/Inventario_Bot_Telegram" ><i className="fa-brands fa-github"></i></a></button>
            </div>
          </div>
          <div className="bg-purple-500 p-10 rounded-lg py-8 mb-10">
            <h1 className="bg-transparent text-xl font-bold text-green-500 m-3">Api para Red social</h1>
            <img src="/src/images/api.jpg" alt="project 1" className="mx-auto mb-4 w-80" />
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-green-600" ><a href="https://github.com/rjalvarez27/Red_Social_Api" ><i className="fa-brands fa-github"></i></a></button>
          </div>
          <div className="bg-red-500 p-10 rounded-lg py-8 mb-10">
            <h1 className="bg-transparent text-xl font-bold text-green-500 m-3">Red social (Desarrollo)</h1>
            <img src="/src/images/red.jpg" alt="project 1" className="mx-auto mb-4 w-80" />
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-green-600" ><a href="https://github.com/rjalvarez27/Red_Social_Frontend" ><i className="fa-brands fa-github"></i></a></button>
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded-full m-5"><a href="https://github.com/rjalvarez27?tab=repositories" className="bg-transparent">Ver más en GitHub <i className="fas fa-arrow-right bg-transparent"></i></a>

          </button>
        </div>
      </div >
      <Footer />
    </>
  );
}

export default App;
