import {
	AppstoreOutlined,
	HomeOutlined,
	NotificationOutlined,
	WhatsAppOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import { NavLink } from 'react-router-dom';
import React from 'react';

const { Sider } = Layout;
const { SubMenu } = Menu;

const NavBar = () => {
	const handleClick = e => {
		console.log('click ', e);
	};

	return (
		<Sider width={200} className="site-layout" style={{ marginTop: 60 }}>
			<Menu
				mode="inline"
				defaultSelectedKeys={['home']}
				defaultOpenKeys={['sub1']}
				style={{ height: '100%', borderRight: 0 }}
			>
				<Menu.Item key="home" icon={<HomeOutlined />}>
					<NavLink to="/">Home</NavLink>
				</Menu.Item>
				<Menu.Item key="new-sale" icon={<NotificationOutlined />}>
					<NavLink to="/new-sale">New Sale</NavLink>
				</Menu.Item>
				<SubMenu key="sub1" icon={<AppstoreOutlined />} title="Furniture">
					<Menu.Item key="sofa-couches">
						<NavLink to="/furniture/sofa-couches">Sofa & Couches</NavLink>
					</Menu.Item>
					<Menu.Item key="dressers">
						<NavLink to="/furniture/dressers">Dressers</NavLink>
					</Menu.Item>
					<Menu.Item key="accent-chairs">
						<NavLink to="/furniture/accent-chairs">Accent Chairs</NavLink>
					</Menu.Item>
					<Menu.Item key="desk">
						<NavLink to="/furniture/desk">Desk</NavLink>
					</Menu.Item>
					<Menu.Item key="living-room">
						<NavLink to="/furniture/living-room">Living Room</NavLink>
					</Menu.Item>
					<Menu.Item key="table-chair-sets">
						<NavLink to="/furniture/table-chair-sets">Table & Chair Sets</NavLink>
					</Menu.Item>
					<Menu.Item key="beds">
						<NavLink to="/furniture/beds">Beds</NavLink>
					</Menu.Item>
					<Menu.Item key="rugs">
						<NavLink to="/furniture/rugs">Rugs</NavLink>
					</Menu.Item>
					<Menu.Item key="dining-chairs">
						<NavLink to="/furniture/dining-chairs">Dining Chairs</NavLink>
					</Menu.Item>
					<Menu.Item key="tv-media">
						<NavLink to="/furniture/tv-media">TV & Media</NavLink>
					</Menu.Item>
				</SubMenu>
				<Menu.Item key="contact" icon={<WhatsAppOutlined />}>
					<NavLink to="/contact">Contact</NavLink>
				</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default NavBar;
