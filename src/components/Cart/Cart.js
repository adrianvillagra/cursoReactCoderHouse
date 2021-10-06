import { Avatar, Button, Input, List, Popconfirm, Spin } from 'antd';
import {
	DownOutlined,
	QuestionCircleOutlined,
	UpOutlined,
} from '@ant-design/icons';
import React, { useContext, useState } from 'react';

import { CartContext } from '../CartContext/CartContext';
import { useHistory } from 'react-router-dom';

const Cart = () => {
	const [loading, setLoading] = useState(false);
	const { cart, reduceItem, addItem, getAmountCart, removeItem } =
		useContext(CartContext);
	const history = useHistory();

	const onAddItem = item => {
		setLoading(true);
		addItem(item, 1);
		setLoading(false);
	};

	const onDeductItem = item => {
		setLoading(true);
		reduceItem(item, 1);
		setLoading(false);
	};

	const onGoToSofaCouches = () => {
		history.push(`/furniture/sofa-couches`);
	};

	const onGoFinishPurchase = () => {
		history.push(`/finish-purchase`);
	};

	const onDeleteItem = item => {
		setLoading(true);
		removeItem(item.id);
		setLoading(false);
	};

	return (
		<div className="infinite-container">
			{cart.length > 0 ? (
				<div style={{ minHeight: '600px' }}>
					<List
						dataSource={cart}
						renderItem={item => (
							<List.Item key={item.id}>
								<List.Item.Meta
									avatar={<Avatar src={item.pictureUrl} />}
									title={<a href="./cart">{item.title}</a>}
									description={item.description}
								/>
								<span>
									<Popconfirm
										title="Are you sure？"
										onConfirm={() => onDeleteItem(item)}
										placement="bottom"
										icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
									>
										<a href="#">Delete</a>
									</Popconfirm>
								</span>
								<div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
									<Button
										type="primary"
										shape="circle"
										icon={<DownOutlined />}
										size={'small'}
										onClick={() => onDeductItem(item)}
										disabled={item.quantity > 1 ? false : true}
									/>
									<Input
										defaultValue={item.quantity}
										style={{
											width: '50px',
											marginInline: '30px',
											marginLeft: '5px',
											marginRight: '5px',
											textAlign: 'center',
										}}
										value={item.quantity}
									/>
									<Button
										type="primary"
										shape="circle"
										icon={<UpOutlined />}
										size={'small'}
										onClick={() => onAddItem(item)}
										disabled={item.stock >= item.quantity + 1 ? false : true}
									/>
								</div>

								<div>
									<span style={{ paddingLeft: '30px', fontSize: 'larger' }}>
										{(item.price * item.quantity).toLocaleString('en-US', {
											style: 'currency',
											currency: 'USD',
											minimumFractionDigits: 2,
										})}
									</span>
								</div>
							</List.Item>
						)}
					></List>
					<div style={{ float: 'right' }}>
						<br />
						<br />
						<br />
						<href style={{ paddingRight: '10px', fontSize: 'larger' }}>
							{'TOTAL '}
							{getAmountCart().toLocaleString('en-US', {
								style: 'currency',
								currency: 'USD',
								minimumFractionDigits: 2,
							})}{' '}
						</href>
						<br />
						<br />
						<Button type="primary" size="default" onClick={onGoFinishPurchase}>
							Finish Purchase
						</Button>
					</div>
				</div>
			) : (
				<div style={{ textAlign: 'center', float: 'center' }}>
					<p> No items added </p>
					<Button type="primary" size="default" onClick={onGoToSofaCouches}>
						Go to Purchase
					</Button>
				</div>
			)}
			{loading && (
				<Spin style={{ display: 'flex', justifyContent: 'center' }} />
			)}
		</div>
	);
};

export default Cart;
