import { Layout, Menu } from 'antd';

import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Header = () => {
	const { Header } = Layout;

	return (
		<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
				<Menu.Item key="users">
					<NavLink to="/users">User</NavLink>
				</Menu.Item>
				<CartWidget />
			</Menu>
		</Header>
	);
};

export default Header;
