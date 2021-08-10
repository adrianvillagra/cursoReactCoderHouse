import {
	AppstoreOutlined,
	ContainerOutlined,
	DesktopOutlined,
	MailOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	PieChartOutlined,
	SafetyCertificateOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import React, { useState } from 'react';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const NavBar = ({ dashboard }) => {
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	const handleClick = e => {
		console.log('click ', e);
	};

	return (
		<Menu onClick={handleClick} style={{ width: 256 }} mode="inline">
			<SubMenu key="sub1" icon={<AppstoreOutlined />} title="Sale">
				<Menu.Item key="1">New Sale</Menu.Item>
			</SubMenu>
			<SubMenu key="sub2" icon={<AppstoreOutlined />} title="subnav 2">
				<Menu.Item key="livingRoom">Living Room</Menu.Item>
				<Menu.Item key="tableChairSets">Table & Chair Sets</Menu.Item>
				<Menu.Item key="beds">Beds</Menu.Item>
				<Menu.Item key="tvMedia">TV & Media</Menu.Item>
			</SubMenu>
			<Menu.Item key="contact">Contact</Menu.Item>
			<Menu.Item key="support">Support</Menu.Item>
		</Menu>
	);
};

export default NavBar;
