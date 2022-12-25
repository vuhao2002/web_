import React from 'react';
import AlertMessage from '../layout/AlertMessage';

const ModalAccount = ({
    toggleShowCreate,
    handleSubmit,
    register,
    errors,
    onSubmit,
    isEdit,
    alert,
}) => {
    return (
        <div className="modal-product-line">
            <div onClick={toggleShowCreate} className="overlay"></div>
            <form className="content" onSubmit={handleSubmit(onSubmit)}>
                {isEdit ? (
                    <span className="center title-2">Edit Account</span>
                ) : (
                    <span className="center title-2">Add Account</span>
                )}
                <label className="row">
                    Name
                    <input
                        {...register('username', { required: true })}
                        placeholder="Name"
                        className="input"
                    />
                </label>
                {errors.username && <span className="error">This field is required</span>}

                <label className="row">
                    Password
                    <input
                        {...register('password', { required: true })}
                        placeholder="Password"
                        type="password"
                        minLength="6"
                    />
                </label>
                {errors.password && <span className="error">This field is required</span>}

                <label className="row">
                    Role
                    <select {...register('role')} className="">
                        <option value="admin">Admin</option>
                        <option value="agent">Agent</option>
                        <option value="manufacture">Manufacture</option>
                        <option value="warranty-center">Warranty Center</option>
                    </select>
                </label>

                {isEdit ? (
                    <button className="btn btn-success">Edit</button>
                ) : (
                    <button className="btn btn-success">Create</button>
                )}
            </form>
        </div>
    );
};

export default ModalAccount;
