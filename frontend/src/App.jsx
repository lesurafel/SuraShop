import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import Brand from "./pages/Brand";
import Catagory from "./pages/Catagory";
import Menu from "./pages/Menu";
import Customer from "./pages/Customer";
import Order from "./pages/Order";
import Product from "./pages/Product";
import Report from "./pages/Report";
import Setting from "./pages/Setting";
import Shipping from "./pages/Shipping";
import User from "./pages/User";

import Header from "./components/Header";
const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/articles" element={<Article />} />
				<Route path="/brands" element={<Brand />} />
				<Route path="/catagories" element={<Catagory />} />
				<Route path="/customers" element={<Customer />} />
				<Route path="/menus" element={<Menu />} />
				<Route path="/orders" element={<Order />} />
				<Route path="/products" element={<Product />} />
				<Route path="/reports" element={<Report />} />
				<Route path="/settings" element={<Setting />} />
				<Route path="/shipping" element={<Shipping />} />
				<Route path="/users" element={<User />} />
				<Route path="/" element={<User />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
