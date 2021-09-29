import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import { CartProvider } from './components/CartContext/CartContext';
import FinishPurchase from './components/FinshPurchase/FinishPurchase';
import Home from './components/Home/Home';
import ItemDetails from './components/ItemDetails/ItemDetails';
import ItemList from './components/ItemList/ItemList';
import MainLayout from './layout/MainLayout';
import NewSale from './components/NewSale/NewSale';
import NewUser from './components/NewUser/NewUser';

function App() {
	return (
		<CartProvider>
			<Router>
				<Switch>
					<Route exact path="/">
						<MainLayout>
							<Home />
						</MainLayout>
					</Route>
					<Route exact path="/user">
						<MainLayout>
							<ItemList categoryId={1} />
						</MainLayout>
					</Route>
					<Route exact path="/new-user">
						<MainLayout>
							<NewUser />
						</MainLayout>
					</Route>
					<Route exact path="/finish-purchase">
						<MainLayout>
							<FinishPurchase />
						</MainLayout>
					</Route>
					<Route exact path="/new-sale">
						<MainLayout>
							<NewSale />
						</MainLayout>
					</Route>
					<Route exact path="/cart">
						<MainLayout>
							<Cart />
						</MainLayout>
					</Route>
					<Route exact path="/furniture/uid=:id">
						<MainLayout>
							<ItemDetails />
						</MainLayout>
					</Route>
					<Route exact path="/furniture/sofa-couches">
						<MainLayout>
							<ItemList categoryId={1} />
						</MainLayout>
					</Route>
					<Route exact path="/furniture/dressers">
						<MainLayout>
							<ItemList categoryId={2} />
						</MainLayout>
					</Route>
					<Route exact path="/furniture/accent-chairs">
						<MainLayout>
							<ItemList categoryId={3} />
						</MainLayout>
					</Route>
					<Route exact path="/furniture/desk">
						<MainLayout>
							<ItemList categoryId={4} />
						</MainLayout>
					</Route>
					<Route exact path="/furniture/living-room">
						<MainLayout>
							<ItemList categoryId={5} />
						</MainLayout>
					</Route>
					<Route exact path="/furniture/table-chair-sets">
						<MainLayout>
							<ItemList categoryId={6} />
						</MainLayout>
					</Route>
					<Route exact path="/furniture/beds">
						<MainLayout>
							<ItemList categoryId={7} />
						</MainLayout>
					</Route>
					<Route exact path="/furniture/rugs">
						<MainLayout>
							<ItemList categoryId={8} />
						</MainLayout>
					</Route>
					<Route exact path="/furniture/dining-chairs">
						<MainLayout>
							<ItemList categoryId={9} />
						</MainLayout>
					</Route>
					<Route exact path="/furniture/tv-media">
						<MainLayout>
							<ItemList categoryId={10} />
						</MainLayout>
					</Route>
					<Route exact path="/contact">
						<MainLayout>
							<ItemList />
						</MainLayout>
					</Route>
				</Switch>
			</Router>
		</CartProvider>
	);
}

export default App;
