import { useState } from "react";
import { Link } from "react-router-dom";

import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

import clsx from "clsx";

const Navbar = () => {
	const [isSideMenuOpen, setSideMenuOpen] = useState(false);

	const navlinks = [
		{
			lable: "Users",
			link: "/users"
		},
		{
			lable: "Catagories",
			link: "/catagories"
		},
		{
			lable: "Brands",
			link: "/brands"
		},
		{
			lable: "Products",
			link: "/products"
		},
		{
			lable: "Customers",
			link: "/customers"
		},
		{
			lable: "Shipping",
			link: "/shipping"
		},
		{
			lable: "Orders",
			link: "/orders"
		},
		{
			lable: "Reports",
			link: "/reports"
		},
		{
			lable: "Articles",
			link: "/articles"
		},
		{
			lable: "Menus",
			link: "/menus"
		},
		{
			lable: "Settings",
			link: "/settings"
		}
	];

	return (
		<header className="bg-lime-200 shadow-md">
			<nav className="flex justify-between items-center max-w-7xl mx-auto p-3">
				<div className="flex justify-between px-4 items-center py-4">
					<div className="flex items-center gap-4">
						{/* menu */}
						<FiMenu
							onClick={() => setSideMenuOpen(true)}
							className="text-2xl cursor-pointer lg:hidden"
						/>
						{/* logo */}
						<Link to="/">
							<h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
								<span className="text-lime-500">Sura</span>
								<span className="text-lime-700">Shop</span>
							</h1>
						</Link>
					</div>
					<div className="flex mx-2 gap-1">
						{navlinks.map((navLink, index) => (
							<Link
								key={index}
								className="hidden lg:block rounded-md px-2 py-1 duration-300 text-lime-700 hover:bg-lime-400"
								to={navLink.link}>
								{navLink.lable}
							</Link>
						))}
					</div>
				</div>

				{/* sidebar mobile menu */}
				<div
					className={clsx(
						"fixed h-full w-screen lg:hidden bg-lime-200/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ease-out duration-500 ",
						isSideMenuOpen && "translate-x-0"
					)}>
					<div className=" text-lime-700 bg-lime-500/50 flex-col absolute left-0 top-0 h-screen p-8 gap-1 z-50 w-56 flex  ">
						<div className="flex bg-red justify-end text-center">
							<TfiClose
								onClick={() => setSideMenuOpen(false)}
								className="mt-0 mb-4 text-2xl cursor-pointer hover:text-lime-900"
							/>
						</div>
						{navlinks.map((navLink, index) => (
							<Link
								key={index}
								className="rounded-md p-2 hover:bg-lime-500"
								to={navLink.link}
								onClick={() => setSideMenuOpen(false)}>
								{navLink.lable}
							</Link>
						))}
					</div>
				</div>

				{/* Last section */}
				<div className="flex items-center gap-2 px-4">
					{/* cart icon */}
					<Link
						className="rounded-md px-2 duration-300 text-lime-700 hover:bg-lime-400"
						to={"/"}>
						Surafel
					</Link>

					<img
						width={40}
						height={40}
						className="h-8 w-8 rounded-full "
						src="https://i.pravatar.cc/150?img=52"
						alt="avatar-img"
					/>
					{/* avtar img */}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
