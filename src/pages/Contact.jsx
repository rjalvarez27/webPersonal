import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx";
function Contact() {

    return (
        <div className="w-full h-screen p-2">
            <Nav />
            <div className="flex flex-col items-center mt-20">
                <h1 className="text-5xl font-bold text-green-500">¡Hablemos!</h1>
                <p className="mt-4 text-gray-400">Si estás interesado o tienes alguna inquietud, no dudes en escribirme! Gracias.</p>
                <form className="bg-gray-800 p-8 mt-8 mb-10 rounded-lg w-96 ">
                    <div className="mb-4 bg-transparent">
                        <label className="block mb-2 bg-transparent text-white ">Tu nombre</label>
                        <input type="text" placeholder="Nombre" className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" />
                    </div>
                    <div className="mb-4 bg-transparent">
                        <label className="block mb-2 bg-transparent text-white">Tu E-mail</label>
                        <input type="email" placeholder="ejemplo@email.com" className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" />
                    </div>
                    <div className="mb-4 bg-transparent">
                        <label className="block mb-2 bg-transparent text-white">Tu mensaje</label>
                        <textarea placeholder="Hey..." className="w-full p-2 rounded bg-gray-700 border border-gray-600 h-32 text-white"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-green-500 text-black p-2 rounded">Enviar</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Contact