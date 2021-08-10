import { Layout, Menu, Typography } from 'antd';

import React from 'react';

const Header = () => {
	const { Header } = Layout;
	const { SubMenu } = Menu;
	const { Text } = Typography;

	return (
		<Layout>
			<Header className="header">
				<div className="logo" />
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
					<Menu.Item key="1">Users</Menu.Item>
					<Menu.Item key="2">Chart</Menu.Item>
				</Menu>
			</Header>
		</Layout>
	);
};

export default Header;
