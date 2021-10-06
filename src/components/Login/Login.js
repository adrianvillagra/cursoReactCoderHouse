import { Alert, Button, Col, Form, Layout, Row, Space, Typography } from 'antd';
import React, { useState } from 'react';

import { Fade } from 'react-reveal';
import Header from '../../components/Header/Header';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
	const { loginWithRedirect } = useAuth0();
	const { Content } = Layout;
	const { Title } = Typography;
	const [error] = useState('');
	const [loadingButton, setLoadingButton] = useState(false);

	const onFinish = async () => {
		setLoadingButton(true);
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Layout style={{ height: '100vh' }}>
			<Header />
			<Content
				style={{
					padding: '0 50px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}
			>
				<div
					style={{
						background: '#fff',
						height: 410,
						width: 365,
						textAlign: 'center',
						flexDirection: 'column',
						justifyContent: 'center',
						display: 'flex',
					}}
				>
					<Fade>
						<Row justify="center" style={{ marginBottom: '20px' }}>
							<Col style={{ textAlign: 'center' }}>
								<Space direction="vertical">
									<Title level={3}>Welcome to AV-Furniture</Title>
								</Space>
							</Col>
						</Row>

						{error && <Alert message={error} type="error" showIcon closable />}

						<Form
							initialValues={{ remember: false }}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							layout="vertical"
							style={{ width: 262, margin: '0 auto' }}
						>
							<Form.Item>
								<Button
									onClick={() => loginWithRedirect()}
									loading={loadingButton}
									type="primary"
									htmlType="submit"
									className="login-form-button"
									style={{ marginRight: 10, width: 262 }}
								>
									Log In
								</Button>
							</Form.Item>
						</Form>
					</Fade>
				</div>
			</Content>
		</Layout>
	);
};

export default Login;
