import { Button, Input, Spin, message } from 'antd';
import {
	CheckCircleTwoTone,
	DownOutlined,
	UpOutlined,
} from '@ant-design/icons';
import React, { useContext, useEffect, useState } from 'react';

import { CartContext } from '../CartContext/CartContext';
import { useHistory } from 'react-router-dom';

const ItemCount = props => {
	const [finishPurchaseVisible, setFinishPurchaseVisible] = useState(false);
	const [quantity, setQuantity] = useState(1);
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	const { cart, addItem, getQuantityByItem } = useContext(CartContext);

	const onAddQuantity = () => {
		setLoading(true);
		setQuantity(quantity + 1);
		setLoading(false);
	};

	const onDeductQuantity = () => {
		setLoading(true);
		setQuantity(quantity - 1);
		setLoading(false);
	};

	const onAddToCart = async () => {
		const qtyInCart = getQuantityByItem(props.furniture.id);
		if (qtyInCart + quantity <= props.furniture.stock) {
			successMessage();
			addItem(props.furniture, quantity);
			setQuantity(1);
			setFinishPurchaseVisible(true);
		} else errorMessage();
	};

	const errorMessage = () => {
		message.error({
			title: 'Error',
			content: 'Quantity is greater than stock.',
		});
	};

	const successMessage = () => {
		message.success({
			title: 'Success',
			content: 'Items included correctly.',
		});
	};

	const goToFinishPurchase = () => {
		history.push(`/cart`);
	};

	return (
		<div className="container-item-count">
			<div style={{ paddingLeft: '10px', paddingRight: '20px' }}>
				<Button
					type="primary"
					shape="circle"
					icon={<DownOutlined />}
					size={'small'}
					onClick={onDeductQuantity}
					disabled={quantity > 1 ? false : true}
				/>
				<Input
					defaultValue={1}
					style={{
						width: '50px',
						marginInline: '30px',
						marginLeft: '5px',
						marginRight: '5px',
						textAlign: 'center',
					}}
					value={quantity}
				/>
				<Button
					type="primary"
					shape="circle"
					icon={<UpOutlined />}
					size={'small'}
					onClick={onAddQuantity}
				/>
			</div>
			<div>
				<br />
				<div>
					<Button
						type="primary"
						shape="round"
						icon={<CheckCircleTwoTone />}
						size="medium"
						onClick={onAddToCart}
					>
						Add to cart
					</Button>
					<br />
					<br />
				</div>
				{finishPurchaseVisible && (
					<div style={{ marginBlockStart: '0px' }}>
						<Button
							type="primary"
							shape="round"
							icon={<CheckCircleTwoTone />}
							size="medium"
							onClick={goToFinishPurchase}
						>
							Finish the purchase
						</Button>
					</div>
				)}
				{loading && (
					<Spin style={{ display: 'flex', justifyContent: 'center' }} />
				)}
			</div>
		</div>
	);
};

export default ItemCount;
