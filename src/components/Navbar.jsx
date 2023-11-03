import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex flex-1 w-full items-center justify-center py-3 gap-3 border-b shadow-lg">
      <Link to="/">
        <button className="bg-white hover:bg-purple-300 transition-colors px-3 py-2 rounded-xl">
          criar partida
        </button>
      </Link>
      <Link to="/list-match">
        <button className="bg-white hover:bg-purple-300 transition-colors px-3 py-2 rounded-xl">
          Listagem de partidas
        </button>
      </Link>
    </div>
  )
}