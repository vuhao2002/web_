import './productLine.css';
import '../../../../assets/css/common.css';
import Sidebar from '../../sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import Table from '../../../../components/table/Table';
import ModalProductLine from '../../../../components/modal/ModalProductLine';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { GridActionsCellItem, GridRowModes } from '@mui/x-data-grid';

import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ModalMessage from '../../../../components/layout/ModalMessage';

export default function Products() {
    const height = 631;

    const [rowModesModel, setRowModesModel] = React.useState({});
    const [showCreate, setShowCreate] = useState(false);
    const [show, setShow] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState(false);
    let idRef = React.useRef(0);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm();

    const handleEditClick = (id) => () => {
        console.log(id);
        setShowCreate(!showCreate);
        setIsEdit(true);

        // goi query den database => lay gia tri r dien vao
        setValue('code', '15');
        setValue('name', '1545');
        setValue('description', '1545');
    };

    const handleDeleteClick = (id) => () => {
        console.log(id);
        // setRows(rows.filter((row) => row.id !== id));
        setShow(true);
        idRef.current = id;
    };

    const handleDelete = () => {
        const id = idRef.current || 1;
        console.log('id: ', id);
        setRows(rows.filter((row) => row.id !== id));
        setShow(false);
    };

    const [rows, setRows] = useState([
        {
            id: 1,
            name: 'Raj',
            email: 'Raj@gmail.comaj@gmail.comaj@gmail.comaj@gmail.comaj@gmail.com   ',
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
        { title: 'Id', field: 'id', flex: 1, editable: true, hidden: true },
        { title: 'Name', field: 'name', flex: 1 },
        { title: 'Email', field: 'email', flex: 1, editable: false },
        { title: 'Phone Number', field: 'phone', flex: 1, editable: true },
        { title: 'Age', field: 'age', flex: 1, editable: true },
        { title: 'Gender', field: 'gender', flex: 1, editable: true },
        { title: 'City', field: 'city', flex: 1, editable: true },
        { title: 'School Fee', field: 'fee', flex: 1, editable: true },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    const toggleShowCreate = () => {
        setShowCreate(!showCreate);
        setIsEdit(false);
        reset({
            code: '',
            name: '',
            description: '',
        });
    };

    // Submit btn
    const onSubmit = (data) => {
        console.log(data);

        if (isEdit) {
        } else {
        }

        reset(data);
    };

    const argsModal = {
        title: 'Remove product line',
        body: 'Do you want to delete this product line?',
        handleDelete,
        setShow,
        show,
    };

    const argsModalProductLine = {
        toggleShowCreate,
        handleSubmit,
        register,
        errors,
        onSubmit,
        isEdit,
    };

    return (
        <div className="wrapper-body">
            <Sidebar />
            <div className="wrapper-content">
                <Navbar title="ProductLine" />
                <div className="group-btn">
                    <div className="center">
                        <input type="text" className="input" />
                        <button className="c-btn">Search</button>
                    </div>
                    <button className="btn btn-success" onClick={toggleShowCreate}>
                        Add Product
                    </button>
                </div>

                <Table
                    {...{
                        columns,
                        rows,
                        setRows,
                        height,
                        rowModesModel,
                        setRowModesModel,
                    }}
                />
                
                {showCreate &&
                    (isEdit ? (
                        <ModalProductLine {...argsModalProductLine} />
                    ) : (
                        <ModalProductLine {...argsModalProductLine} />
                    ))}

                {show && <ModalMessage {...argsModal} />}
            </div>
        </div>
    );
}
