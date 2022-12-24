import './sidebar.css';
import { NavLink } from 'react-router-dom';
import Profile from '../../../components/profile/Profile';
import avatar from '../../../assets/landing.jpg';

import { MdDashboard } from 'react-icons/md';
import { FaMotorcycle } from 'react-icons/fa';
import { RiProductHuntLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';

import { useState, useEffect } from 'react';

export default function Sidebar() {
    const title = 'Admin';

    return (
        <div className="sidebar">
            <div className="center">
                <ul>
                    <NavLink style={{ textDecoration: 'none' }} to="/">
                        <li title="Statistical">
                            <MdDashboard className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </NavLink>

                    <NavLink style={{ textDecoration: 'none' }} to="/product">
                        <li title="product">
                            <RiProductHuntLine className="icon" />
                            <span>Product</span>
                        </li>
                    </NavLink>

                    <NavLink style={{ textDecoration: 'none' }} to="/productLine">
                        <li title="productLine">
                            <FaMotorcycle className="icon" />
                            <span>ProductLine</span>
                        </li>
                    </NavLink>

                    <NavLink style={{ textDecoration: 'none' }} to="/accountManagement">
                        <li title="accountManagement">
                            <BsPerson className="icon" />
                            <span>Account</span>
                        </li>
                    </NavLink>
                </ul>
            </div>

            <div className="logout" title="log out">
                <Profile {...{ title }} />
                <div className="logoutWrap">
                    <FiLogOut className="iconlogout" />
                    <span>Log out</span>
                </div>
            </div>
        </div>
    );
}
