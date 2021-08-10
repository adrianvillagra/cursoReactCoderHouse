import './App.css';

import {
	AppstoreOutlined,
	BarChartOutlined,
	CloudOutlined,
	ShopOutlined,
	TeamOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import NavBar from './components/NavBar';

const { Header, Content, Footer, Sider } = Layout;

function App() {
	return (
		<Layout>
			<Sider>
				<NavBar />
			</Sider>

			<Layout className="site-layout" style={{ marginLeft: 200 }}>
				<Header className="site-layout-background" style={{ padding: 0 }} />
				<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
					<div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
						<br />
						Chairs
						<br />
						Desk chairs
						<br />
						Mattresses
						<br />
						Headboards
						<br />
						Dinning tables
						<br />
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>AV - Furniture</Footer>
			</Layout>
		</Layout>
	);
}

export default App;
