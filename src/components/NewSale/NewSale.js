import { List, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';

import Item from '../Item/Item';
import { db } from '../../data/Firebase';

const NewSale = () => {
	const [furniture, setFurniture] = useState([]);
	const [loading, setLoading] = useState(false);

	const getFurnitureSale = async () => {
		setLoading(true);
		let q = query(collection(db, 'sale'));

		const querySnapshotSale = await getDocs(q);
		const dataSale = [];
		querySnapshotSale.forEach(doc => {
			dataSale.push({ ...doc.data(), id: doc.id });
		});
		if (typeof querySnapshotSale != 'undefined') {
			q = query(collection(db, 'furniture'));
			const querySnapshotFurniture = await getDocs(q);
			const dataFurniture = [];
			querySnapshotFurniture.forEach(doc => {
				dataFurniture.push({ ...doc.data(), id: doc.id });
			});
			const data = [];
			dataFurniture.forEach(itemFurniture => {
				dataSale.forEach(itemSale => {
					if (itemFurniture.id === itemSale.furniture_id)
						data.push({ ...itemFurniture });
				});
			});

			setFurniture(data);
		}
		setLoading(false);
	};

	useEffect(() => {
		getFurnitureSale();
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
				renderItem={item => (
					<Item furniture={item} needFurnitureInPath={true} />
				)}
			/>
			{loading && (
				<Spin style={{ display: 'flex', justifyContent: 'center' }} />
			)}
		</div>
	);
};

export default NewSale;
