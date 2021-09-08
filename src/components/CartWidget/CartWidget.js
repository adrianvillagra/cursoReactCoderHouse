import { Layout, Menu, Typography } from 'antd';
import React, { useContext } from 'react';

import { CartContext } from '../CartContext/CartContext';
import { NavLink } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';

const CartWidget = () => {
	const { Header } = Layout;
	const { SubMenu } = Menu;
	const { Sider } = Layout;
	const { Text } = Typography;
	const { cart } = useContext(CartContext);

	const totalItems = cart.reduce((acc, item) => {
		return acc + item.quantity;
	}, 0);

	return (
		<Menu.Item key="chart" icon={<ShoppingCartOutlined />}>
			<NavLink to="/cart">{totalItems > 0 ? `Cart( ${totalItems})` : 'Cart'}</NavLink>
		</Menu.Item>
	);
};
export default CartWidget;
