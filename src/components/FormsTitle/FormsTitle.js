import './FormsTitle.less';

import { Col, Row, Typography } from 'antd';

import React from 'react';

const FormsTitle = ({ title, titleClass }) => {
	const { Title } = Typography;
	return (
		<Row justify="center">
			<Col>
				<Title className={`forms-title ${titleClass} `} level={1}>
					{title}
				</Title>
			</Col>
		</Row>
	);
};

export default FormsTitle;
