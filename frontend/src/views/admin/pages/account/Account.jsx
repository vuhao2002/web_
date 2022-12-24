import './account.css';
import '../../../../assets/css/common.css';
import Sidebar from '../../sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';

import Table from '../../../../components/table/Table';
import Product from '../../../../components/product/Product';
import { BiSearchAlt2 } from 'react-icons/bi';

import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function AccountManagement() {
    const height = 631;
    const [showCreate, setShowCreate] = useState(false);

    const toggleShowCreate = () => {
        setShowCreate(!showCreate);
    };

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const [rows, setRows] = useState([
        {
            id: 1,
            name: 'Raj',
            email: 'Raj@gmail.com',
            phone: 7894561230,
            age: null,
            gender: 'M',
            city: 'Chennai',
            fee: 78456,
        },
        {
            id: 2,
            name: 'Mohan',
            email: 'mohan@gmail.com',
            phone: 7845621590,
            age: 35,
            gender: 'M',
            city: 'Delhi',
            fee: 456125,
        },
        {
            id: 3,
            name: 'Sweety',
            email: 'sweety@gmail.com',
            phone: 741852912,
            age: 17,
            gender: 'F',
            city: 'Noida',
            fee: 458796,
        },
        {
            id: 4,
            name: 'Vikas',
            email: 'vikas@gmail.com',
            phone: 9876543210,
            age: 20,
            gender: 'M',
            city: 'Mumbai',
            fee: 874569,
        },
        {
            id: 5,
            name: 'Neha',
            email: 'neha@gmail.com',
            phone: 7845621301,
            age: 25,
            gender: 'F',
            city: 'Patna',
            fee: 748521,
        },
        {
            id: 6,
            name: 'Mohan',
            email: 'mohan@gmail.com',
            phone: 7845621590,
            age: 35,
            gender: 'M',
            city: 'Delhi',
            fee: 456125,
        },
        {
            id: 7,
            name: 'Sweety',
            email: 'sweety@gmail.com',
            phone: 741852912,
            age: 17,
            gender: 'F',
            city: 'Noida',
            fee: 458796,
        },
        {
            id: 8,
            name: 'Vikas',
            email: 'vikas@gmail.com',
            phone: 9876543210,
            age: 20,
            gender: 'M',
            city: 'Mumbai',
            fee: 874569,
        },
        {
            id: 9,
            name: 'Raj',
            email: 'Raj@gmail.com',
            phone: 7894561230,
            age: null,
            gender: 'M',
            city: 'Chennai',
            fee: 78456,
        },
        {
            id: 10,
            name: 'Mohan',
            email: 'mohan@gmail.com',
            phone: 7845621590,
            age: 35,
            gender: 'M',
            city: 'Delhi',
            fee: 456125,
        },
        {
            id: 11,
            name: 'Sweety',
            email: 'sweety@gmail.com',
            phone: 741852912,
            age: 17,
            gender: 'F',
            city: 'Noida',
            fee: 458796,
        },
        {
            id: 12,
            name: 'Vikas',
            email: 'vikas@gmail.com',
            phone: 9876543210,
            age: 20,
            gender: 'M',
            city: 'Mumbai',
            fee: 874569,
        },
    ]);

    const columns = [
        { title: 'Id', field: 'id', width: 90, editable: true },
        { title: 'Name', field: 'name', width: 120, editable: true },
        { title: 'Email', field: 'email', width: 200, editable: true },
        { title: 'Phone Number', field: 'phone', width: 120, editable: true },
        { title: 'Age', field: 'age', width: 90, editable: true },
        { title: 'Gender', field: 'gender', width: 120, editable: true },
        { title: 'City', field: 'city', width: 120, editable: true },
        { title: 'School Fee', field: 'fee', width: 90, editable: true },
    ];

    return (
        <div className="wrapper-body">
            <Sidebar />
            <div className="wrapper-content">
                <Navbar />
                <div className="mainAccount">
                    <div className="navAccount">
                        <button className="createAccount" onClick={toggleShowCreate}>
                            Create Account
                        </button>
                    </div>
                    <Table {...{ columns, rows, setRows, height }} />
                </div>
            </div>

            {showCreate && (
                <div className="model">
                    <div onClick={toggleShowCreate} className="overlay"></div>
                    <form className="content" onSubmit={handleSubmit(onSubmit)}>
                        <label className="row">
                            Name
                            <input {...register('name')} placeholder="enter name" />
                        </label>
                        <label className="row">
                            Username
                            <input {...register('username')} placeholder="enter username" />
                        </label>
                        <label className="row">
                            Email
                            <input {...register('email')} placeholder="enter email" />
                        </label>
                        <label className="row">
                            Type Account
                            <select {...register('gender')}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                        </label>
                        <input type="submit" />
                    </form>
                </div>
            )}
        </div>
    );
}
