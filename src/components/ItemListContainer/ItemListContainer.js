import { Avatar, List, Space } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';

import React from 'react';
import Sofa from '../../assets/images/sofa.png';

const ItemListContainer = () => {
	const listData = [];
	for (let i = 0; i < 10; i++) {
		listData.push({
			title: `Sofa & Couche ${i}`,
			description: 'Excellent bone white sofa',
			content: 'Sofa designed with the highest standards in the market, with an elegant finish.',
		});
	}

	const IconText = ({ icon, text }) => (
		<Space>
			{React.createElement(icon)}
			{text}
		</Space>
	);

	return (
		<List
			itemLayout="vertical"
			size="large"
			pagination={{
				onChange: page => {
					console.log(page);
				},
				pageSize: 5,
			}}
			dataSource={listData}
			footer={
				<div>
					<b>AV - Furniture</b> New Collection
				</div>
			}
			renderItem={item => (
				<List.Item
					key={item.title}
					actions={[
						<IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
						<IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
						<IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
					]}
					extra={<img width={272} alt="logo" src={Sofa} />}
				>
					<List.Item.Meta
						avatar={
							<Avatar
								style={{
									backgroundColor: '#f56a00',
								}}
							>
								S&C
							</Avatar>
						}
						title={item.title}
						description={item.description}
					/>
					{item.content}
				</List.Item>
			)}
		/>
	);
};

export default ItemListContainer;