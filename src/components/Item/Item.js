import { Avatar, Button, List, Space } from 'antd';
import {
	DollarCircleOutlined,
	LikeOutlined,
	MessageOutlined,
	PlusCircleOutlined,
	StarOutlined,
} from '@ant-design/icons';

import CustomBreadcrum from '../Breadcum/CustomBreadcrum';
import React from 'react';
import Sofa from '../../assets/images/sofa.png';

const Item = ({ furniture, onClickAddItem }) => {
	const IconText = ({ icon, text }) => (
		<Space>
			{React.createElement(icon)}
			{text}
		</Space>
	);
	return (
		<List.Item
			key={furniture.id}
			actions={[
				<IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
				<IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
				<IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
				<IconText icon={DollarCircleOutlined} text={furniture.price} key="list-vertical-message" />,
				<Button
					type="primary"
					shape="circle"
					icon={<PlusCircleOutlined />}
					size={'small'}
					onClick={onClickAddItem}
				/>,
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
				title={furniture.title}
				description={furniture.description}
			/>
			{furniture.content}
		</List.Item>
	);
};

export default Item;
