import { Avatar, Button, List, Space } from 'antd';
import {
	DollarCircleOutlined,
	LikeOutlined,
	MessageOutlined,
	ShopOutlined,
	StarOutlined,
} from '@ant-design/icons';

import React from 'react';
import { useHistory } from 'react-router-dom';

const Item = ({ furniture }) => {
	const history = useHistory();
	const IconText = ({ icon, text }) => (
		<Space>
			{React.createElement(icon)}
			{text}
		</Space>
	);
	const urlHref = `/furniture/uid=${furniture.id}`;

	const onGoItemDetail = needFurnitureInPath => {
		history.push(
			needFurnitureInPath
				? `../../furniture/uid=${furniture.id}`
				: `../uid=${furniture.id})`
		);
	};

	return (
		<List.Item
			key={furniture.id}
			actions={[
				<IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
				<IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
				<IconText
					icon={MessageOutlined}
					text="2"
					key="list-vertical-message"
				/>,
				<IconText
					icon={DollarCircleOutlined}
					text={furniture.price.toLocaleString('en-US', {
						minimumFractionDigits: 2,
					})}
					key="list-vertical-message"
				/>,
				<Button
					type="primary"
					shape="circle"
					icon={<ShopOutlined />}
					size={'small'}
					onClick={value => onGoItemDetail(true)}
				/>,
			]}
			extra={<img width={272} alt="img" src={furniture.pictureUrl} />}
		>
			<List.Item.Meta
				avatar={<Avatar src={furniture.pictureUrl} />}
				title={<a href={urlHref}>{furniture.title}</a>}
				description={furniture.description}
			/>
			{furniture.content}
		</List.Item>
	);
};

export default Item;
