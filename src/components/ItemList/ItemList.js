import { List, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

import CustomBreadcrum from '../Breadcum/CustomBreadcrum';
import FurnitureService from '../../services/ItemService';
import Item from '../Item/Item';
import { db } from '../../data/Firebase';

const ItemList = categoryId => {
	const [categoryName, setCategoryName] = useState('');
	const [furniture, setFurniture] = useState([]);
	const [loading, setLoading] = useState(false);
	const service = new FurnitureService();
	const routes = [
		{ path: '../', breadcrumbName: 'Home' },
		{ path: '/', breadcrumbName: categoryName },
	];

	const getFurniture = async categoryId => {
		setLoading(true);
		const q = query(
			collection(db, 'furniture'),
			where('categoryId', '==', categoryId)
		);

		const querySnapshot = await getDocs(q);
		const data = [];
		querySnapshot.forEach(doc => {
			data.push({ ...doc.data(), id: doc.id });
		});
		if (typeof querySnapshot != 'undefined') {
			setFurniture(data);
		}
		setLoading(false);
	};

	const getCategoryName = async id => {
		setLoading(true);
		const q = query(collection(db, 'category'));
		const querySnapshot = await getDocs(q);
		const data = [];
		querySnapshot.forEach(doc => {
			data.push({ ...doc.data(), id: doc.id });
		});
		if (typeof querySnapshot != 'undefined') {
			const categoryData = data.filter(item => parseInt(item.id) === id);
			setCategoryName(categoryData[0].name);
		}
		setLoading(false);
	};

	useEffect(() => {
		getFurniture(
			categoryId.categoryId !== undefined ? categoryId.categoryId : 1
		);
		getCategoryName(categoryId.categoryId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categoryId]);

	useEffect(() => {
		getFurniture(
			categoryId.categoryId !== undefined ? categoryId.categoryId : 1
		);
		getCategoryName(categoryId.categoryId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<CustomBreadcrum routes={routes} />
			<List
				itemLayout="vertical"
				size="large"
				pagination={{
					onChange: page => {
						console.log(page);
					},
					pageSize: 5,
				}}
				dataSource={furniture}
				footer={
					<div>
						<b>AV - Furniture</b> New Collection
					</div>
				}
				renderItem={item => (
					<Item furniture={item} needFurnitureInPath={false} />
				)}
			/>
			{loading && (
				<Spin style={{ display: 'flex', justifyContent: 'center' }} />
			)}
		</div>
	);
};

export default ItemList;
