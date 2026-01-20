export default function Sidebar({ active, setFilter, show, onClose }) {
    const itemClass = (name) =>
        `cursor-pointer ${active === name
            ? "text-blue-600 font-semibold"
            : "text-gray-600"
        }`;

    return (
        <>
            {show && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
                />
            )}

            <aside
                className={`
          fixed md:static z-20
          w-60 bg-white min-h-screen shadow
          transform transition-transform duration-300
          ${show ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
            >
                <div className="p-4 font-bold text-lg flex justify-between">
                    Tasks
                    <button onClick={onClose} className="md:hidden">✕</button>
                </div>

                <ul className="space-y-3 p-4">
                    <li
                        className={itemClass("All")}
                        onClick={() => {
                            setFilter("All");
                            onClose();
                        }}
                    >
                        All Tasks
                    </li>

                    <li
                        className={itemClass("Pending")}
                        onClick={() => {
                            setFilter("Pending");
                            onClose();
                        }}
                    >
                        Pending
                    </li>

                    <li
                        className={itemClass("Completed")}
                        onClick={() => {
                            setFilter("Completed");
                            onClose();
                        }}
                    >
                        Completed
                    </li>
                </ul>
            </aside>
        </>
    );
}