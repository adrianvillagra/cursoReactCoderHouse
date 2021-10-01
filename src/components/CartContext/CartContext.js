import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			const newCart = cart.map(cartElement => {
				if (cartElement.id === item.id) {
					return {
						...cartElement,
						quantity: parseInt(cartElement.quantity) + parseInt(quantity),
					};
				} else return cartElement;
			});
			setCart(newCart);
		} else {
			setCart(prev => [...prev, { ...item, quantity: parseInt(quantity) }]);
		}
	};

	const reduceItem = (item, quantity) => {
		if (isInCart(item.id)) {
			const newCart = cart.map(cartElement => {
				if (cartElement.id === item.id) {
					return {
						...cartElement,
						quantity: parseInt(cartElement.quantity - quantity),
					};
				} else return cartElement;
			});
			setCart(newCart);
		} else {
			setCart(prev => [...prev, { ...item, quantity }]);
		}
	};

	const getAmountCart = () => {
		return cart.reduce((acc, item) => {
			return acc + item.quantity * item.price;
		}, 0);
	};

	const getQuantityByItem = itemId => {
		return cart.reduce((acc, item) => {
			if (item.id === itemId) {
				return acc + item.quantity;
			} else return acc;
		}, 0);
	};

	const isInCart = itemId => {
		return cart.some(item => item.id === itemId);
	};

	const removeItem = itemId => {
		setCart(cart.filter(item => item.id !== itemId));
	};

	const clear = () => setCart([]);

	const updateCart = data => {
		setCart(data);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				reduceItem,
				addItem,
				isInCart,
				removeItem,
				clear,
				getQuantityByItem,
				getAmountCart,
				updateCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
