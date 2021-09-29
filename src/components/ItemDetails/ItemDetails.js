import {
	Button,
	Col,
	Descriptions,
	Image,
	Input,
	Layout,
	Row,
	Spin,
	message,
} from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { useHistory, useParams } from 'react-router-dom';

import { CartContext } from '../CartContext/CartContext';
import CustomBreadcrum from '../Breadcum/CustomBreadcrum';
import ItemCount from '../ItemCount/ItemCount';
import ItemService from '../../services/ItemService';
import { db } from '../../data/Firebase';

const ItemDetails = () => {
	const [categoryName, setCategoryName] = useState('');
	const [path, setPath] = useState('');
	const [furniture, setFurniture] = useState([]);
	const [isVisible, setIsVisible] = useState(false);
	const [finishPurchaseVisible, setFinishPurchaseVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [quantity, setQuantity] = useState(0);
	const { id, furnitureId } = useParams();
	const history = useHistory();
	const { Content } = Layout;
	const { addItem, getQuantityByItem, reduceItem } = useContext(CartContext);
	const service = new ItemService();

	const routes = [
		{ path: '/', breadcrumbName: 'Home' },
		{ path: path, breadcrumbName: categoryName },
		{ path: '/item-details', breadcrumbName: furniture.title },
	];

	const pathCategory = [
		{ id: 1, path: './sofa-couches/' },
		{ id: 2, path: './dressers/' },
		{ id: 3, path: './accent-chairs/' },
		{ id: 4, path: './desk/' },
		{ id: 5, path: './living-room/' },
		{ id: 6, path: './table-chair-sets/' },
		{ id: 7, path: './beds/' },
		{ id: 8, path: './rugs/' },
		{ id: 9, path: './dining/' },
		{ id: 10, path: './tv-media/' },
	];

	const backToSofaAndCouches = () => history.replace(`/furniture/sofa-couches`);

	const getFurnitureDetail = async () => {
		setLoading(true);
		let categoryId = 0;
		const q = query(collection(db, 'furniture'));

		const querySnapshot = await getDocs(q);
		const data = [];
		querySnapshot.forEach(doc => {
			data.push({ ...doc.data(), id: doc.id });
		});
		if (typeof querySnapshot != 'undefined') {
			const dataFiltered = data.filter(item => item.id === id);
			setFurniture(...dataFiltered);
			categoryId = dataFiltered[0].categoryId;
		}
		setLoading(false);
		return categoryId;
	};

	const getCategoryName = async categoryId => {
		setLoading(true);
		const q = query(collection(db, 'category'));
		const querySnapshot = await getDocs(q);
		const data = [];
		querySnapshot.forEach(doc => {
			data.push({ ...doc.data(), id: doc.id });
		});
		if (typeof querySnapshot != 'undefined') {
			const categoryData = data.filter(
				item => parseInt(item.id) === categoryId
			);
			setCategoryName(categoryData[0].name);
		}
		setLoading(false);
	};

	const getUrlPath = async categoryId => {
		setLoading(true);
		const temp = pathCategory.filter(item => item.id === categoryId);
		setPath(temp[0].path);
		setLoading(false);
	};

	const getData = async () => {
		const categoryId = await getFurnitureDetail();
		await getCategoryName(categoryId);
		await getUrlPath(categoryId);
	};

	useEffect(() => {
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout style={{ height: 'auto' }}>
			<Content style={{ width: '100%' }}>
				<CustomBreadcrum routes={routes} />
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
						Quantity:{' '}
						<span>
							<ItemCount furniture={furniture} />
						</span>
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
						{Number(furniture.price).toLocaleString('en-US', {
							style: 'currency',
							currency: 'USD',
							minimumFractionDigits: 2,
						})}
					</Descriptions.Item>
				</Descriptions>
			</Content>
		</Layout>
	);
};

export default ItemDetails;
