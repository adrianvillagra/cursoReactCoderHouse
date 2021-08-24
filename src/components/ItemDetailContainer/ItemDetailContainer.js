import { List, Spin } from 'antd';
import React, { useEffect, useState } from 'react';

import FurnitureService from '../../services/ItemService';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetails from '../ItemDetails/ItemDetails';

const ItemDetailsContainer = () => {
	const [furniture, setFurniture] = useState([]);
	const [isVisible, setIsVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const service = new FurnitureService();

	const getFurniture = () => {
		setLoading(true);
		setTimeout(2000);
		service
			.getAll()
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
		getFurniture();
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
				renderItem={item => <ItemDetails furniture={item} />}
			/>
			<ItemCount onVisible={isVisible} stock="10" initial="1" />
			{loading && <Spin style={{ display: 'flex', justifyContent: 'center' }} />}
		</div>
	);
};

export default ItemDetailsContainer;
