import {
	Button,
	Col,
	Descriptions,
	Divider,
	Form,
	Image,
	Input,
	Layout,
	Row,
	Spin,
	Typography,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import ItemService from '../../services/ItemService';

const ItemDetails = () => {
	const [loading, setLoading] = useState(false);
	const [selected, setSelected] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [furniture, setFurniture] = useState([]);
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

	useEffect(() => {
		getFurniture();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout style={{ height: 'auto' }}>
			<Content style={{ width: '100%' }}>
				<Row gutter={10}>
					<Col span={24}>
						<Image.PreviewGroup>
							<Image width={'60%'} style={{ align: 'center' }} src={furniture.pictureUrl} />
						</Image.PreviewGroup>
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
		</Layout>
	);
};

export default ItemDetails;
