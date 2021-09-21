import React, { useContext, useEffect, useState } from 'react';

import { CartContext } from '../CartContext/CartContext';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';

const CartWidget = () => {
	const { cart } = useContext(CartContext);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		const ttlItems = cart.reduce((acc, item) => {
			return parseInt(acc + item.quantity);
		}, 0);
		setTotalItems(ttlItems);
	}, [cart]);

	return (
		<Menu.Item key="chart" icon={<ShoppingCartOutlined />}>
			<NavLink to="/cart">
				{totalItems > 0 ? `Cart(${totalItems})` : 'Cart'}
			</NavLink>
		</Menu.Item>
	);
};
export default CartWidget;
