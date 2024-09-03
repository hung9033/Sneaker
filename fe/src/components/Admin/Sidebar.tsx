import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className="flex">
                <aside className="fixed top-0 left-0 bg-sidebar w-64 hidden sm:block shadow-xl h-full">
                    <div className="p-6">
                        <a href="/admin" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
                        <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                            <i className="fas fa-plus mr-3" /> New Report
                        </button>
                    </div>
                    <nav className="text-white text-base font-semibold pt-3">
                        <a href="/admin" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-tachometer-alt mr-3" />
                            Dashboard
                        </a>
                        <a href="/admin/products" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-sticky-note mr-3" />
                            Products
                        </a>
                        <a href="/products" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-table mr-3" />
                            Tables
                        </a>
                        <a href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-align-left mr-3" />
                            Forms
                        </a>
                        <a href="tabs.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-tablet-alt mr-3" />
                            Tabbed Content
                        </a>
                        <a href="calendar.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-calendar mr-3" />
                            Calendar
                        </a>
                    </nav>
                </aside>
                <main className="flex-1 ml-52 p-6">
                    {/* Nội dung chính của bạn */}
                </main>
            </div>


        </>
    )
}

export default Sidebar