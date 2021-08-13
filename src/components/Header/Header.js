import { Layout, Menu, Typography } from 'antd';

import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';

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
				<Menu.Item key="chart" icon={<ShoppingCartOutlined />}>
					Chart
				</Menu.Item>
			</Menu>
		</Header>
	);
};

export default Header;
