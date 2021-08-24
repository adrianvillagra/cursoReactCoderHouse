import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import ItemDetails from './components/ItemDetails/ItemDetails';
import ItemDetailsContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemList from './components/ItemList/ItemList';
import { Layout } from 'antd';
import MainLayout from './layout/MainLayout';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<MainLayout>
						<ItemList />
					</MainLayout>
				</Route>
				<Route exact path="/new-sale">
					<MainLayout>
						<ItemList />
					</MainLayout>
				</Route>
				<Route exact path="/furniture/sofa-couches">
					<MainLayout>
						<ItemDetailsContainer />
					</MainLayout>
				</Route>
				<Route exact path="/furniture/dressers">
					<MainLayout>
						<ItemList />
					</MainLayout>
				</Route>
				<Route exact path="/furniture/accent-chairs">
					<MainLayout>
						<ItemList />
					</MainLayout>
				</Route>
				<Route exact path="/furniture/desk">
					<MainLayout>
						<ItemList />
					</MainLayout>
				</Route>
				<Route exact path="/furniture/living-room">
					<MainLayout>
						<ItemList />
					</MainLayout>
				</Route>
				<Route exact path="/furniture/table-chair-sets">
					<MainLayout>
						<ItemList />
					</MainLayout>
				</Route>
				<Route exact path="/furniture/beds">
					<MainLayout>
						<ItemList />
					</MainLayout>
				</Route>
				<Route exact path="/furniture/rugs">
					<MainLayout>
						<ItemList />
					</MainLayout>
				</Route>
				<Route exact path="/furniture/dining-chairs">
					<MainLayout>
						<ItemList />
					</MainLayout>
				</Route>
				<Route exact path="/furniture/tv-media">
					<MainLayout>
						<ItemList />
					</MainLayout>
				</Route>
				<Route exact path="/contact">
					<MainLayout>
						<ItemList />
					</MainLayout>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
