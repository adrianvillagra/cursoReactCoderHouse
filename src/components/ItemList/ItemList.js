import { Col, Input, List, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

import CustomBreadcrum from '../Breadcum/CustomBreadcrum';
import Item from '../Item/Item';
import { SearchOutlined } from '@ant-design/icons';
import { db } from '../../data/Firebase';

const ItemList = categoryId => {
	const [categoryName, setCategoryName] = useState('');
	const [furniture, setFurniture] = useState([]);
	const [furnitureFiltered, setFurnitureFiltered] = useState([]);
	const [loading, setLoading] = useState(false);
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
			setFurnitureFiltered(data);
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

	const filterByName = event => {
		if (event.keyCode === 13) {
			const valueToSearch = event.target.value;
			setFurnitureFiltered({ ...furnitureFiltered, name: event.target.value });
			if (event.target.value) {
				const results = [];
				const elements = furniture.filter(item => {
					return item.title
						.toLowerCase()
						.startsWith(valueToSearch.toLowerCase());
				});
				if (elements.length !== 0) {
					results.push(...elements);
				}
				setFurnitureFiltered(results);
			} else {
				setFurnitureFiltered(furniture);
			}
		}
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
			<Col>
				<Row>
					<CustomBreadcrum routes={routes} />
				</Row>
				<Row gutter={22} style={{ marginTop: '20px', marginBlockEnd: '20px' }}>
					<Col style={{ width: '600px' }}>
						<Input
							width="600"
							placeholder="filter by name"
							onKeyDown={filterByName}
							suffix={<SearchOutlined />}
						/>
					</Col>
				</Row>
			</Col>
			<List
				itemLayout="vertical"
				size="large"
				pagination={{
					total: furniture.length,
					showQuickJumper: true,
					showSizeChanger: true,
				}}
				onChange={pagination =>
					getFurniture(pagination.pageSize, pagination.current)
				}
				dataSource={furnitureFiltered}
				footer={
					<div>
						<b>AV - Furniture</b> New Collection
					</div>
				}
				renderItem={item => <Item furniture={item} />}
			/>
			{loading && (
				<Spin style={{ display: 'flex', justifyContent: 'center' }} />
			)}
		</div>
	);
};

export default ItemList;
