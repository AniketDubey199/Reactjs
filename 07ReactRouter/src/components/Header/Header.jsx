import React from "react";
import { Link, NavLink } from "react-router"; // React Router v7 syntax

export default function Header() {
    return (
        <header className="shadow-sm sticky z-50 top-0 bg-white"> 
            <nav className="border-gray-200 px-4 lg:px-6 py-3">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    
                    <div className="flex items-center lg:order-2 space-x-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 transition-colors"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 shadow-sm"
                        >
                            Get started
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div
                        className="hidden lg:flex lg:items-center lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => // Destructuring added here
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:border-0 lg:p-0 
                                        ${isActive ? "text-orange-700" : "text-gray-700"} 
                                        hover:text-orange-700 transition-all`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => // Destructuring added here
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:border-0 lg:p-0 
                                        ${isActive ? "text-orange-700" : "text-gray-700"} 
                                        hover:text-orange-700 transition-all`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => // Destructuring added here
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:border-0 lg:p-0 
                                        ${isActive ? "text-orange-700" : "text-gray-700"} 
                                        hover:text-orange-700 transition-all`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}