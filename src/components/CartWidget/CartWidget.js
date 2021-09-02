import { Layout, Menu, Typography } from 'antd';
import React, { useContext } from 'react';

import { CartContext } from '../CartContext/CartContext';
import { ShoppingCartOutlined } from '@ant-design/icons';

const CartWidget = () => {
	const { Header } = Layout;
	const { SubMenu } = Menu;
	const { Text } = Typography;
	const { cart } = useContext(CartContext);

	const totalItems = cart.reduce((acc, item) => {
		return acc + item.quantity;
	}, 0);

	return (
		<Menu.Item key="chart" icon={<ShoppingCartOutlined />}>
			Cart ({totalItems})
		</Menu.Item>
	);
};
export default CartWidget;
