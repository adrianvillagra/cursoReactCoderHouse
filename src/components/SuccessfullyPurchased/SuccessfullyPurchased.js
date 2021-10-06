import { Button, Result } from 'antd';
import { useHistory, useParams } from 'react-router-dom';

import React from 'react';

const SuccessfullyPurchased = () => {
	const history = useHistory();
	const { id } = useParams();

	const onGoToMainPage = () => {
		history.push(`/`);
	};

	const messageSuccessfully = 'Order number: ' + id;

	return (
		<div>
			<Result
				status="success"
				title="Successfully Purchased!"
				subTitle={messageSuccessfully}
				extra={[
					<Button type="primary" key="home" onClick={onGoToMainPage}>
						Go home
					</Button>,
				]}
			/>
		</div>
	);
};

export default SuccessfullyPurchased;
