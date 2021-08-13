import { AppstoreOutlined, NotificationOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

const NavBar = ({ dashboard }) => {
	const handleClick = e => {
		console.log('click ', e);
	};

	return (
		<Sider width={200} className="site-layout" style={{ marginTop: 60 }}>
			<Menu
				mode="inline"
				defaultSelectedKeys={['sofaCouches']}
				defaultOpenKeys={['sub2']}
				style={{ height: '100%', borderRight: 0 }}
			>
				<SubMenu key="sub1" icon={<NotificationOutlined />} title="Sale">
					<Menu.Item key="1">New Sale</Menu.Item>
				</SubMenu>
				<SubMenu key="sub2" icon={<AppstoreOutlined />} title="Furniture">
					<Menu.Item key="sofaCouches">Sofa & Couches</Menu.Item>
					<Menu.Item key="Dressers">Dressers</Menu.Item>
					<Menu.Item key="accentChairs">Accent Chairs</Menu.Item>
					<Menu.Item key="desk">Desk</Menu.Item>
					<Menu.Item key="livingRoom">Living Room</Menu.Item>
					<Menu.Item key="tableChairSets">Table & Chair Sets</Menu.Item>
					<Menu.Item key="beds">Beds</Menu.Item>
					<Menu.Item key="rugs">Rugs</Menu.Item>
					<Menu.Item key="diningChairs">Dining Chairs</Menu.Item>
					<Menu.Item key="tvMedia">TV & Media</Menu.Item>
				</SubMenu>
				<Menu.Item key="contact" icon={<WhatsAppOutlined />}>
					Contact
				</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default NavBar;
