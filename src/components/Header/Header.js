import { Layout, Menu, Typography } from 'antd';

import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../assets/images/logo.png';
import React from 'react';

const Header = () => {
	const { Header } = Layout;
	const { SubMenu } = Menu;
	const { Text } = Typography;

	return (
		<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
			{/* <div className="logo">
				<img className="eCommerceLogo" style={{ width: '150px' }} srcSet={Logo} alt="Logo"></img>
			</div> */}
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
				<Menu.Item key="users">Users</Menu.Item>
				<CartWidget />
			</Menu>
		</Header>
	);
};

export default Header;
