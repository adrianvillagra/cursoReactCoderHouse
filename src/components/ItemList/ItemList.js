import { List, Spin } from 'antd';
import React, { useEffect, useState } from 'react';

import FurnitureService from '../../services/ItemService';
import Item from '../Item/Item';

const ItemList = categoryId => {
	const [furniture, setFurniture] = useState([]);
	const [loading, setLoading] = useState(false);
	const service = new FurnitureService();

	const getFurniture = id => {
		setLoading(true);
		setTimeout(2000);
		service
			.getElementByCategoryId(id)
			.then(result => {
				if (typeof result != 'undefined') {
					setFurniture(result);
				}
			})
			.catch(err => {
				console.log(err.toString());
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		getFurniture(categoryId.categoryId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categoryId]);

	useEffect(() => {
		getFurniture(categoryId.categoryId);
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
			{loading && <Spin style={{ display: 'flex', justifyContent: 'center' }} />}
		</div>
	);
};

export default ItemList;
