import { Link } from "react-router-dom";

function HomePage() {
    return ( 
        <div className="flex">
            <aside className="w-1/5 bg-gray-700 text-white flex flex-col p-6 space-y-4 min-h-screen">
                <h1 className="text-3xl font-semibold border-b-2 border-white pb-2 ">DashBoard</h1>
                <nav className="">
                   <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-600 text-2xl">Home</Link>
                   <Link to="/about" className="block py-2 px-4 rounded hover:bg-gray-600 text-2xl">About</Link>
                   <Link to="/news" className="block py-2 px-4 rounded hover:bg-gray-600 text-2xl">News</Link>
                </nav>
            </aside>
            <main className="flex-1 p-8 flex flex-col">
                <header className="bg-gray-500 px-6 py-4 rounded mb-8 flex items-center justify-between">
                  <h1 className="text-2xl font-bold">News Reader</h1>
                </header>
            </main>
        </div>
     );
}

export default HomePage;