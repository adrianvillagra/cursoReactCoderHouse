import { Button, Form, Input, Layout, Modal, Result, Spin } from 'antd';
import React, { useContext, useState } from 'react';
import {
	Timestamp,
	addDoc,
	collection,
	doc,
	getDocs,
	query,
	updateDoc,
} from 'firebase/firestore';

import { CartContext } from '../CartContext/CartContext';
import CommonForm from '../CommonForm/CommonForm';
import SuccessfullyPurchased from '../SuccessfullyPurchased/SuccessfullyPurchased';
import { db } from '../../data/Firebase';
import { useHistory } from 'react-router-dom';

const FinishPurchase = () => {
	const [loading, setLoading] = useState(false);
	const [userId, setUserId] = useState(0);
	const { cart, getQuantityByItem, clear, getAmountCart } =
		useContext(CartContext);
	const history = useHistory();
	const { Content } = Layout;
	const onAddPurchase = async values => {
		setLoading(true);
		try {
			const userId = await addUser(values);
			const purchaseId = await addPurchase(userId);
			await addPurchaseDetail(purchaseId);
			await updateStock(purchaseId);
			goToSuccessfullyPurchased(purchaseId);
			clear();
		} catch (err) {
			errorMessage(err.toString());
		} finally {
			setLoading(false);
		}
	};

	const goToSuccessfullyPurchased = purchaseId => {
		history.push(`../successfully/purchaseId=${purchaseId})`);
	};

	const addUser = async user => {
		setLoading(true);
		let docRef = '';
		try {
			docRef = await addDoc(collection(db, 'user'), user);
			setUserId(docRef.id);
			return docRef.id;
		} catch (err) {
			errorMessage(err.toString());
		} finally {
			setLoading(false);
		}
	};

	const addPurchase = async userId => {
		setLoading(true);
		let docRef = '';
		try {
			docRef = await addDoc(
				collection(db, 'purchase'),
				getPurchaseObject(userId)
			);
			return docRef.id;
		} catch (err) {
			errorMessage(err.toString());
		} finally {
			setLoading(false);
		}
	};

	const addPurchaseDetail = async purchaseId => {
		setLoading(true);
		try {
			const purchaseDetailData = getPurchaseDetailObject(purchaseId);
			purchaseDetailData.forEach(element =>
				addDoc(collection(db, 'purchase_detail'), element)
			);
		} catch (err) {
			errorMessage(err.toString());
		} finally {
			setLoading(false);
		}
	};

	const getPurchaseDetailObject = purchaseId => {
		const result = [];
		cart.map(element => {
			return result.push({
				furniture_id: element.id,
				price: element.price,
				purchase_id: purchaseId,
				quantity: parseInt(getQuantityByItem(element.id)),
			});
		});
		return result;
	};

	const updateStock = async purchaseId => {
		setLoading(true);
		try {
			const purchaseDetailData = getPurchaseDetailObject(purchaseId);
			const stockFurnitureData = [];
			const q = query(collection(db, 'furniture'));
			const querySnapshot = await getDocs(q);
			const data = [];

			querySnapshot.forEach(doc => {
				data.push({ ...doc.data(), id: doc.id });
			});
			if (typeof querySnapshot != 'undefined') {
				purchaseDetailData.forEach(purchaseDetailItem => {
					data.forEach(dataItem => {
						if (purchaseDetailItem.furniture_id === dataItem.id)
							stockFurnitureData.push({
								furniture_id: dataItem.id,
								stock: dataItem.stock - purchaseDetailItem.quantity,
							});
					});
				});
			}

			stockFurnitureData.forEach(item => {
				const docRefToUpdate = doc(db, 'furniture', item.furniture_id);
				updateDoc(docRefToUpdate, item);
			});
		} catch (err) {
			errorMessage(err.toString());
		} finally {
			setLoading(false);
		}
	};

	const getPurchaseObject = userId => {
		return {
			date: Timestamp.now(),
			total: getAmountCart(),
			user_id: userId,
		};
	};

	const onGoToMainPage = () => {
		history.push(`/`);
	};

	const onGoToCart = () => {
		history.push(`./cart`);
	};

	const successMessage = purchaseId => {
		Modal.success({
			title: 'Success',
			content: 'Purchase added correctly. Your purchase id is ' + purchaseId,
		});
	};

	const errorMessage = err => {
		Modal.error({
			title: 'Error',
			content: err,
		});
	};

	const onSubmitFailed = () => {
		Modal.error({
			title: 'Error',
			content: 'Purchase can' + "'" + 't added correctly.',
		});
	};

	return (
		<Layout style={{ height: '100vh' }}>
			<Content style={{ width: '100%' }}>
				<CommonForm
					title="Finish purchase"
					primaryButton="Finish"
					onSubmit={onAddPurchase}
					onCancel={onGoToCart}
					onSubmitFailed={onSubmitFailed}
					autoComplete="off"
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
						rules={[
							{ required: true },
							{ min: 6 },
							{ max: 50 },
							{ type: 'email' },
						]}
					>
						<Input />
					</Form.Item>
				</CommonForm>
				{loading && (
					<Spin style={{ display: 'flex', justifyContent: 'center' }} />
				)}
			</Content>
		</Layout>
	);
};

export default FinishPurchase;
