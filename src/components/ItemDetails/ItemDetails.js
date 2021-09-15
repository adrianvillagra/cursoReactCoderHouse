import { Button, Col, Descriptions, Image, Layout, Row, Spin } from 'antd';
import { CheckCircleTwoTone, PlusCircleOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useHistory, useParams } from 'react-router-dom';

import { CartContext } from '../CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import ItemService from '../../services/ItemService';
import { db } from '../../data/Firebase';

const ItemDetails = () => {
	const [furniture, setFurniture] = useState([]);
	const [isVisible, setIsVisible] = useState(false);
	const [finishPurchaseVisible, setFinishPurchaseVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [quantity, setQuantity] = useState(0);
	const { id, furnitureId } = useParams();
	const history = useHistory();
	const { Content } = Layout;
	const { addItem, getQuantityByItem } = useContext(CartContext);
	const service = new ItemService();

	const backToSofaAndCouches = () => history.replace(`/furniture/sofa-couches`);

	const addToCart = () => {
		addItem(furniture, quantity);
		setQuantity(0);
		setFinishPurchaseVisible(true);
	};

	const getFurnitureDetail = async () => {
		setLoading(true);
		const q = query(collection(db, 'furniture'));

		const querySnapshot = await getDocs(q);
		const data = [];
		querySnapshot.forEach(doc => {
			data.push({ ...doc.data(), id: doc.id });
		});
		if (typeof querySnapshot != 'undefined') {
			setFurniture(...data.filter(item => item.id === id));
		}
		setLoading(false);
	};

	const finishPurchase = () => {
		history.push(`/cart`);
	};

	useEffect(() => {
		getFurnitureDetail();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout style={{ height: 'auto' }}>
			<Content style={{ width: '100%' }}>
				<Row gutter={10}>
					<Col span={16}>
						<Image.PreviewGroup>
							<Image
								width={'60%'}
								style={{ align: 'center' }}
								src={furniture.pictureUrl}
							/>
						</Image.PreviewGroup>
					</Col>
					<Col span={8}>
						<br />
						Quantity{' '}
						<span>
							<Button
								type="primary"
								shape="circle"
								icon={<PlusCircleOutlined />}
								size={'small'}
								onClick={value => setIsVisible(value)}
							/>{' '}
						</span>
						<br />
						<br />
						{quantity !== 0 ? (
							<div>
								<Button
									type="primary"
									shape="round"
									icon={<CheckCircleTwoTone />}
									size="medium"
									onClick={addToCart}
								>
									Add to cart
								</Button>
								<br />
								<br />
							</div>
						) : (
							''
						)}
						{finishPurchaseVisible && (
							<Button
								type="primary"
								shape="round"
								icon={<CheckCircleTwoTone />}
								size="medium"
								onClick={finishPurchase}
							>
								Finish the purchase
							</Button>
						)}
					</Col>
				</Row>
				<br />
				{loading && (
					<Spin style={{ display: 'flex', justifyContent: 'center' }} />
				)}
				<Descriptions title="Descriptions" bordered style={{ width: 'auto' }}>
					<Descriptions.Item label="Product">
						{furniture.title}
					</Descriptions.Item>
					<Descriptions.Item label="Content">
						{furniture.content}
					</Descriptions.Item>
					<Descriptions.Item label="Description">
						{furniture.description}
					</Descriptions.Item>
					<Descriptions.Item label="Amount">
						${furniture.price}
					</Descriptions.Item>
				</Descriptions>
			</Content>
			<ItemCount
				onVisible={isVisible}
				stock={furniture.stock - getQuantityByItem(furniture.id)}
				initial="1"
				quantitySelected={value => setQuantity(value)}
			/>
		</Layout>
	);
};

export default ItemDetails;
