import './App.css';

import { Breadcrumb, Layout } from 'antd';

import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

const { Content, Footer } = Layout;

function App() {
	return (
		<Layout style={{ height: '100%' }}>
			<Header />
			<Layout>
				<NavBar />
				<Content className="site-layout" style={{ padding: '0 50px', marginTop: 70 }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>Sofa & Couches</Breadcrumb.Item>
					</Breadcrumb>
					<div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
						<ItemList />
					</div>
					<Footer style={{ textAlign: 'center' }}>AV Furniture ©2021</Footer>
				</Content>
			</Layout>
		</Layout>
	);
}

export default App;
