import React, { useContext } from 'react';

import { CartContext } from '../CartContext/CartContext';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';

const CartWidget = () => {
	const { cart } = useContext(CartContext);

	const totalItems = cart.reduce((acc, item) => {
		return acc + item.quantity;
	}, 0);

	return (
		<Menu.Item key="chart" icon={<ShoppingCartOutlined />}>
			<NavLink to="/cart">
				{totalItems > 0 ? `Cart( ${totalItems})` : 'Cart'}
			</NavLink>
		</Menu.Item>
	);
};
export default CartWidget;
