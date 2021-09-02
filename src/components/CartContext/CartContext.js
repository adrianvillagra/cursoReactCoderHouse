import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			const newCart = cart.map(cartElement => {
				if (cartElement.id === item.id) {
					return { ...cartElement, quantity: cartElement.quantity + quantity };
				} else return cartElement;
			});
			setCart(newCart);
		} else {
			setCart(prev => [...prev, { ...item, quantity }]);
		}
	};

	const getQuantityByItem = itemId => {
		return cart.reduce((acc, item) => {
			if (item.id === itemId) {
				return acc + item.quantity;
			} else return acc;
		}, 0);
	};

	const isInCart = itemId => {
		cart.some(item => item.id === itemId);
	};

	const removeItem = itemId => {
		setCart(cart.filter(item => item.id !== itemId));
	};

	const clear = () => setCart([]);

	return (
		<CartContext.Provider value={{ cart, addItem, isInCart, removeItem, clear, getQuantityByItem }}>
			{children}
		</CartContext.Provider>
	);
};
