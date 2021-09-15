import { Button, Input, Modal } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';

const ItemCount = props => {
	const [itemCount, setItemCount] = useState(1);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setVisible(props.onVisible);
		setItemCount(props.initial);
	}, [props.onVisible, props.initial]);

	const onAddItem = () => {
		setItemCount(parseInt(itemCount) + 1);
	};

	const onDeductItem = () =>
		setItemCount(itemCount - 1 >= 1 ? itemCount - 1 : 1);

	const onClickOk = () => {
		if (itemCount <= props.stock) {
			successMessage();
			props.quantitySelected(itemCount);
			setVisible(false);
		} else errorMessage();
	};

	const errorMessage = () => {
		Modal.error({
			title: 'Error',
			content: 'Quantity is greater than stock.',
		});
	};

	const successMessage = () => {
		Modal.success({
			title: 'Success',
			content: 'Items included correctly.',
		});
	};

	return (
		<Modal
			title="Select quantity"
			centered
			visible={visible}
			onOk={onClickOk}
			onCancel={() => setVisible(false)}
			style={{ paddingLeft: '150px' }}
		>
			<Button
				type="primary"
				shape="circle"
				icon={<DownOutlined />}
				size={'small'}
				onClick={onDeductItem}
			/>
			<Input
				defaultValue="1"
				style={{ width: '100px', marginInline: '30px' }}
				value={itemCount}
			/>
			<Button
				type="primary"
				shape="circle"
				icon={<UpOutlined />}
				size={'small'}
				onClick={onAddItem}
			/>
		</Modal>
	);
};

export default ItemCount;
