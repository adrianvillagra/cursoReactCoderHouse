import { Button, Col, Descriptions, Image, Layout, Row, Spin, Typography } from 'antd';
import { CheckCircleTwoTone, PlusCircleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import ItemCount from '../ItemCount/ItemCount';
import ItemService from '../../services/ItemService';

const ItemDetails = () => {
	const [furniture, setFurniture] = useState([]);
	const [isVisible, setIsVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [quantity, setQuantity] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const { id, furnitureId } = useParams();
	const history = useHistory();
	const { Content } = Layout;
	const { Text } = Typography;
	const service = new ItemService();

	const backToSofaAndCouches = () => history.replace(`/furniture/sofa-couches`);

	const addToCart = async values => {
		setLoading(true);
		try {
			//await service.addToCart(itemId);
		} catch (err) {
			console.log(err.toString());
		} finally {
			setLoading(false);
			backToSofaAndCouches();
		}
	};

	const getFurniture = () => {
		setLoading(true);
		service
			.get(id)
			.then(data => {
				console.log(data);
				setFurniture(data);
			})
			.catch(err => console.log(err))
			.finally(() => setLoading(false));
	};

	const finishPurchase = item => history.push(`/cart`);

	useEffect(() => {
		getFurniture();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout style={{ height: 'auto' }}>
			<Content style={{ width: '100%' }}>
				<Row gutter={10}>
					<Col span={16}>
						<Image.PreviewGroup>
							<Image width={'60%'} style={{ align: 'center' }} src={furniture.pictureUrl} />
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
							<Button
								type="primary"
								shape="round"
								icon={<CheckCircleTwoTone />}
								size="medium"
								onClick={finishPurchase}
							>
								Finish the purchase
							</Button>
						) : (
							''
						)}
					</Col>
				</Row>
				<br />
				{loading && <Spin style={{ display: 'flex', justifyContent: 'center' }} />}
				<Descriptions title="Descriptions" bordered style={{ width: 'auto' }}>
					<Descriptions.Item label="Product">{furniture.title}</Descriptions.Item>
					<Descriptions.Item label="Content">{furniture.content}</Descriptions.Item>
					<Descriptions.Item label="Description">{furniture.description}</Descriptions.Item>
					<Descriptions.Item label="Amount">${furniture.price}</Descriptions.Item>
				</Descriptions>
			</Content>
			<ItemCount
				onVisible={isVisible}
				stock="10"
				initial="1"
				quantitySelected={value => setQuantity(value)}
			/>
		</Layout>
	);
};

export default ItemDetails;
