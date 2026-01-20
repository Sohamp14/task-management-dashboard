
const Header = ({ onAdd, onMenu }) => {
  return (
    <header className="bg-white shadow px-4 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenu}
          className="md:hidden text-xl"
        >
          ☰
        </button>

        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>

      <button
        onClick={onAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        + Add Task
      </button>
    </header>
  )
}

export default Header