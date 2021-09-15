import {
	DocumentSnapshot,
	collection,
	getDocs,
	query,
	where,
} from 'firebase/firestore';
import { List, Spin } from 'antd';
import React, { useEffect, useState } from 'react';

import FurnitureService from '../../services/ItemService';
import Item from '../Item/Item';
import { db } from '../../data/Firebase';

const ItemList = categoryId => {
	const [furniture, setFurniture] = useState([]);
	const [loading, setLoading] = useState(false);
	const service = new FurnitureService();

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

	useEffect(() => {
		getFurniture(
			categoryId.categoryId !== undefined ? categoryId.categoryId : 1
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categoryId]);

	useEffect(() => {
		getFurniture(
			categoryId.categoryId !== undefined ? categoryId.categoryId : 1
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
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
				renderItem={item => <Item furniture={item} />}
			/>
			{loading && (
				<Spin style={{ display: 'flex', justifyContent: 'center' }} />
			)}
		</div>
	);
};

export default ItemList;
