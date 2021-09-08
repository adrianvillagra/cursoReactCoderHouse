import { Avatar, Button, Input, List, Spin } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import React, { useContext, useState } from 'react';

import { CartContext } from '../CartContext/CartContext';
import { useHistory } from 'react-router-dom';

const Cart = () => {
	const [loading, setLoading] = useState(false);
	const { cart, reduceItem, addItem, getAmountCart } = useContext(CartContext);
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

	return (
		<div className="demo-infinite-container">
			{cart.length > 0 ? (
				<div>
					<List
						dataSource={cart}
						renderItem={item => (
							<List.Item key={item.id}>
								<List.Item.Meta
									avatar={<Avatar src={item.pictureUrl} />}
									title={<a href="./cart">{item.title}</a>}
									description={item.description}
								/>
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
										{'$'}
										{item.price * item.quantity}{' '}
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
							{'TOTAL $'}
							{getAmountCart()}{' '}
						</href>
						<br />
						<br />
						<Button type="primary" size="default">
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
			{loading && <Spin style={{ display: 'flex', justifyContent: 'center' }} />}
		</div>
	);
};

export default Cart;
