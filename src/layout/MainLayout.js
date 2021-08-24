import { Alert, Layout, Menu } from 'antd';
import React, { useState } from 'react';

import CustomBreadcrum from '../components/Breadcum/CustomBreadcrum';
import { ErrorContext } from '../providers/ErrorProvider';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';

const { Content, Sider, Footer } = Layout;

const MainLayout = ({ children }) => {
	const [error, setError] = useState('');
	const routes = [
		{
			path: '/',
			breadcrumbName: 'Furniture',
		},
		{
			path: '/sofa-couches',
			breadcrumbName: 'Sofa & Couches',
		},
	];

	const onErrorClose = () => {
		setError('');
	};

	return (
		<Layout>
			<Header />
			<Layout>
				<NavBar />
				<Content className="site-layout" style={{ padding: '0 50px', marginTop: 70 }}>
					<CustomBreadcrum style={{ margin: '16px 0' }} routes={routes} />
					<div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
						{children}
					</div>
					<Footer style={{ textAlign: 'center' }}>AV Furniture ©2021</Footer>
				</Content>
			</Layout>
		</Layout>
	);
};

export default MainLayout;
