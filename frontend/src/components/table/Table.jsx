import { Box } from '@mui/material';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import React from 'react';
import { useState } from 'react';

const Table = ({
    columns,
    rows,
    setRows,
    height,
    rowModesModel,
    setRowModesModel,
    handleOnCellClick,
}) => {
    const [pageSize, setPageSize] = useState(10);

    const handleRowEditStart = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleRowEditStop = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const processRowUpdate = (newRow) => {
        console.log(newRow);
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const initState = {
        columns: {
            columnVisibilityModel: {
                id: false,
            },
        },
    };
    

    return (
        <div className="mainProduct">
            <Box
                className="box"
                sx={{
                    height: height,
                    width: '100%',
                }}
                style={{
                    cursor: 'pointer',
                }}
            >
                <DataGrid
                    initialState={initState}
                    className="datagid"
                    columns={columns}
                    checkboxSelection
                    rows={rows}
                    getRowId={rows.id}
                    pagination
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[10, 20, 40]}
                    editMode="row"
                    responsive
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
                    onRowEditStart={handleRowEditStart}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    experimentalFeatures={{ newEditingApi: true }}
                    onCellClick={handleOnCellClick}
                    onSelectionModelChange={(item) => console.log(item)}
                />
            </Box>
        </div>
    );
};

export default Table;
