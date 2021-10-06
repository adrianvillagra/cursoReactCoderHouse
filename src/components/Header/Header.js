import { Avatar, Layout, Menu, Typography } from 'antd';
import React, { Fragment } from 'react';

import { CaretDownOutlined } from '@ant-design/icons';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
	const { Header } = Layout;
	const { SubMenu } = Menu;
	const { user, isAuthenticated, logout } = useAuth0();

	const logOut = () => {
		localStorage.clear();
		logout({ returnTo: window.location.origin });
	};

	const userName = () => {
		return (
			<div>
				{isAuthenticated && (
					<Fragment>
						<Avatar size="small" src={user.picture} /> {user.name}{' '}
						<CaretDownOutlined />
					</Fragment>
				)}
			</div>
		);
	};
	return (
		<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
			{isAuthenticated && (
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
					style={{ float: 'right' }}
				>
					<CartWidget />
					<SubMenu title={userName()} key={userName()}>
						<Menu.Item onClick={logOut} key="logout">
							Logout
						</Menu.Item>
					</SubMenu>
				</Menu>
			)}
		</Header>
	);
};

export default Header;
