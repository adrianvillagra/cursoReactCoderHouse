import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Form, Input, Layout, Spin } from 'antd';
import React, { useContext, useState } from 'react';
import { collection, doc, query, setDoc } from 'firebase/firestore';

import { CartContext } from '../CartContext/CartContext';
import CommonForm from '../CommonForm/CommonForm';
import { db } from '../../data/Firebase';
import { useHistory } from 'react-router-dom';

const NewUser = isAdded => {
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState([]);
	const { cart, reduceItem, addItem, getAmountCart } = useContext(CartContext);
	const history = useHistory();
	const { Content } = Layout;
	const routes = [
		{ path: '/', breadcrumbName: 'Main' },
		{ path: '/new-user', breadcrumbName: 'Add new user' },
	];
	const onAddUser = async user => {
		setLoading(true);
		const newUser = doc(collection(db, 'user'));
		await setDoc(newUser, user);
		isAdded(true);
		setLoading(false);
	};

	const onGoToMainPage = () => {
		history.push(`/`);
	};

	const onGoFinishPurchase = () => {};

	return (
		<Layout
			style={{
				height: '80vh',
				paddingLeft: '40px',
			}}
		>
			<Content style={{ width: '80%' }}>
				{/* <CustomBreadcrum routes={routes} /> */}
				<CommonForm
					title="Add a new user"
					primaryButton="Add user"
					onSubmit={onAddUser}
					onCancel={onGoToMainPage}
				>
					<Form.Item
						className="user-name"
						name="name"
						label="User name"
						rules={[{ required: true }, { min: 2 }, { max: 50 }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						className="user-phone"
						name="phone"
						label="User phone"
						rules={[{ required: true }, { min: 2 }, { max: 50 }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						className="user-email"
						name="email"
						label="User email"
						rules={[{ required: true }, { min: 2 }, { max: 50 }]}
					>
						<Input />
					</Form.Item>
					{loading && (
						<Spin style={{ display: 'flex', justifyContent: 'center' }} />
					)}
				</CommonForm>
			</Content>
		</Layout>
	);
};

export default NewUser;
