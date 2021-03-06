import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import { CartProvider } from './components/CartContext/CartContext';
import Error from './components/Error/Error';
import FinishPurchase from './components/FinshPurchase/FinishPurchase';
import Home from './components/Home/Home';
import ItemDetails from './components/ItemDetails/ItemDetails';
import ItemList from './components/ItemList/ItemList';
import Loading from './components/Loading/Loading';
import Login from './components/Login/Login';
import MainLayout from './layout/MainLayout';
import NewSale from './components/NewSale/NewSale';
import NewUser from './components/NewUser/NewUser';
import React from 'react';
import SuccessfullyPurchased from './components/SuccessfullyPurchased/SuccessfullyPurchased';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
	const { isLoading, isAuthenticated } = useAuth0();

	if (isLoading) {
		return <Loading />;
	}

	return (
		<CartProvider>
			<Router>
				{isAuthenticated ? (
					<Switch>
						<Route exact path="/login">
							<Login />
						</Route>
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
						<Route exact path="/successfully/purchaseId=:id">
							<MainLayout>
								<SuccessfullyPurchased />
							</MainLayout>
						</Route>
						<Route path="*">
							<Error />
						</Route>
					</Switch>
				) : (
					<Login />
				)}
			</Router>
		</CartProvider>
	);
}

export default App;
