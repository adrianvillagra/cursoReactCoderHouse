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
import Sofa from '../../assets/images/sofa.png';

const ItemDetails = ({ furniture }) => {
	const [loading, setLoading] = React.useState(false);
	const [selected, setSelected] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [typeOptions, setTypeOptions] = useState([]);
	const { id, itemId } = useParams();
	const history = useHistory();
	const { Content } = Layout;
	const { Text } = Typography;
	const service = new ItemService();

	const addField = () => {
		const tempInfo = typeOptions;

		tempInfo.push('');
		setTypeOptions([...tempInfo]);
	};

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

	useEffect(() => {}, []);

	return (
		<Layout style={{ height: 'auto' }}>
			<Content style={{ width: '100%' }}>
				<Row gutter={10}>
					<Col span={24}>
						<Image.PreviewGroup>
							<Image width={500} src={Sofa} />
						</Image.PreviewGroup>
					</Col>
				</Row>
				<br />
				<Descriptions title="Descriptions" bordered>
					<Descriptions.Item label="Product">{furniture.title}</Descriptions.Item>
					<Descriptions.Item label="Content">{furniture.content}</Descriptions.Item>
					<Descriptions.Item label="Description">{furniture.description}</Descriptions.Item>
					<Descriptions.Item label="Amount">{furniture.price}</Descriptions.Item>
				</Descriptions>
			</Content>
		</Layout>
	);
};

export default ItemDetails;
