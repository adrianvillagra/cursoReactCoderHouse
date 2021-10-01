import { Badge, Menu } from 'antd';
import React, { useContext, useEffect, useState } from 'react';

import { CartContext } from '../CartContext/CartContext';
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
				<Badge count={totalItems > 0 ? totalItems : ''}></Badge>
			</NavLink>
		</Menu.Item>
	);
};
export default CartWidget;
