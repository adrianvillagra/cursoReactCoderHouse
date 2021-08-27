import { Avatar, Button, List, Space } from 'antd';
import {
	DollarCircleOutlined,
	LikeOutlined,
	MessageOutlined,
	PlusCircleOutlined,
	ShopOutlined,
	StarOutlined,
} from '@ant-design/icons';

import CustomBreadcrum from '../Breadcum/CustomBreadcrum';
import React from 'react';
import Sofa from '../../assets/images/furniture/sofa_couches/sofa_couches1.png';
import { useHistory } from 'react-router-dom';

const Item = ({ furniture, onClickAddItem }) => {
	const history = useHistory();

	const IconText = ({ icon, text }) => (
		<Space>
			{React.createElement(icon)}
			{text}
		</Space>
	);

	const onGoItemDetail = item => history.push(`./uid=${furniture.id}`);

	console.log('url:', `'../../${furniture.pictureUrl}'`);
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
				<Button
					type="primary"
					shape="circle"
					icon={<ShopOutlined />}
					size={'small'}
					onClick={onGoItemDetail}
				/>,
			]}
			extra={<img width={272} alt="img" src={`'../../${furniture.pictureUrl}'`} />}
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
