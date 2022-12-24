import './productLine.css';
import '../../../../assets/css/common.css';
import Sidebar from '../../sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import Table from '../../../../components/table/Table';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
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
    let idRef = React.useRef(0);

    const handleEditClick = (id, name, email) => () => {
        // setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
        console.log(id);
        console.log(name);
        setShowCreate(!showCreate);
        setValue('code', '15');
        setValue('name', '1545');
        setValue('description', '1545');
    };

    const handleSaveClick = (id) => () => {
        console.log(rowModesModel);
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
        console.log(rowModesModel[id]);
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

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow.isNew) {
            setRows(rows.filter((row) => row.id !== id));
        }
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
            getActions: ({ id, name }) => {
                handleEditClick(id, name);
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

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
        reset({
            code: '',
            name: '',
            description: '',
        });
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset(data);
    };

    const argsModal = {
        title: 'Remove product line',
        body: 'Do you want to delete this product line?',
        handleDelete,
        setShow,
        show,
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
                {showCreate && (
                    <div className="modal-product-line">
                        <div onClick={toggleShowCreate} className="overlay"></div>
                        <form className="content" onSubmit={handleSubmit(onSubmit)}>
                            <span className="center title-2">Create Product Line</span>
                            <label className="row">
                                Code
                                <input
                                    {...register('code', { required: true })}
                                    placeholder="XM_2512"
                                    className="input"
                                />
                            </label>
                            {errors.code && <span className="error">This field is required</span>}
                            <label className="row">
                                Name
                                <input
                                    {...register('name', { required: true })}
                                    placeholder="Honda"
                                    className="input"
                                />
                            </label>
                            {errors.name && <span className="error">This field is required</span>}
                            <label className="row">
                                Description
                                <textarea
                                    {...register('description', { required: true })}
                                    placeholder="..."
                                    className="textarea"
                                />
                            </label>
                            {errors.description && (
                                <span className="error">This field is required</span>
                            )}
                            <button className="btn btn-success">Create</button>
                        </form>
                    </div>
                )}

                {show && <ModalMessage {...argsModal} />}

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
            </div>
        </div>
    );
}
