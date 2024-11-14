const Nav = () => {
    return (
        <>
            <header className="flex flex-row items-center p-6 w-screen ">
                <div className="flex ">
                    < h1 className="text-2xl font-bold ml-6 mr-6 text-green-500 ">Rjalvarez</h1>
                </div>
                <div className="flex m-6 w-full justify-center ">
                    <nav className="space-x-8">
                    <button className="text-white hover:text-green-500"><a href="/" >Inicio</a></button>
                        <button className="text-white hover:text-green-500"><a href="/about" >Acerca de mi</a></button>
                        <button className="text-white hover:text-green-500"><a href="/contact" >Contacto</a></button>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Nav;