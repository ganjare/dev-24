"use client"
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    styled,
    Button,
    Select,
    MenuItem,
    TextField
} from '@mui/material';
import React, { useState } from 'react';
import CustomTextField from '../forms/theme-elements/CustomTextField';

const products = [
    {
        id: "1",
        fileNo: "001",
        subject : "upsc",
        recDate: "7/7/1998",
        recFrom: "15/7/2023",
        sendingDate: "2/2/2009",
        sendingTo: "15/7/2023",
        status: "1/1/1998",
        returingDate: "3/3/2007",
        fileSenDate: "1/1/2000",
        filrSenTo: "2/2/2004",
        remark: "Done"
    },



];
const TableProp = styled(Box)`
display:flex;
justify-content:right;
&>div{
    margin-right:15px;
}
`;
const ExportButton = styled(Select)`
width:13%;
background:#FA896B; 
height:30px;
color:#fff;
&>svg{
    color:white;
}
`;

const FilterButton = styled(Select)`
width:13%;
background:#5d87FF;
height:30px;
color:#fff;
&>svg{
    color:white;
}
`;

const Search = styled(TextField)`
color:#fff;
&>div>input{
    height:20px;
    width:150px;
    padding:5px 5px
}
`;

const ProductPerformance = () => {

    const [exp, setExp] = useState("null");
    const [filter, setFilter] = useState("null2");

    return (

        <>
            <TableProp sx={{ marginTop: "20px" }}>
                <FilterButton
                    value={filter}
                    name="filter"
                    sx={{ backgroundColor: "rgb(20, 27, 45)", fontWeight: "700" }}
                    onChange={(e: any) => {
                        setFilter(e.target.value)
                    }}>
                    <MenuItem value={"null2"} disabled>Select Filter</MenuItem>
                    <MenuItem value={"20"}>Type</MenuItem>
                    <MenuItem value={"30"}>Mobile Number</MenuItem>
                    <MenuItem value={"40"}>Name</MenuItem>
                    <MenuItem value={"50"}>Date</MenuItem>
                </FilterButton>
                <Search id="email" variant="outlined" placeholder="Search here" disabled={filter === "null2" ? true : false} />
                <ExportButton
                    value={exp}
                    name="exp"
                    sx={{ backgroundColor: "rgb(20, 27, 45)", fontWeight: "700" }}
                    onChange={(e: any) => {
                        setExp(e.target.value)
                    }}>
                    <MenuItem value={"null"} disabled>Export As</MenuItem>
                    <MenuItem value={20}>PDF</MenuItem>
                    <MenuItem value={30}>CSV</MenuItem>
                </ExportButton>
            </TableProp>
            <Box sx={{
                overflow: 'auto', width: { xs: '280px', sm: 'auto', xl: "100%" },
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", padding: "5px", marginTop: "10px"
            }}>

                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell >
                                <Typography variant="h5" fontWeight={600}>
                                    Id
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h5" fontWeight={600}>
                                    File No.
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h5" fontWeight={600}>
                                    Subject
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h5" fontWeight={600}>
                                    Received Date
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h5" fontWeight={600}>
                                    Received From
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="h5" fontWeight={600}>
                                    Sending Date
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="h5" fontWeight={600}>
                                    Sending To
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="h5" fontWeight={600}>
                                    Status
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="h5" fontWeight={600}>
                                    Returning Date
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="h5" fontWeight={600}>
                                    File Sending Date
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="h5" fontWeight={600}>
                                    Final Sending To
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="h5" fontWeight={600}>
                                    Remark
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {product.fileNo}
                                            </Typography>

                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="textSecondary"
                                        sx={{
                                            fontSize: "13px",
                                        }}
                                    >
                                        {product.subject}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.recDate}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            // backgroundColor: product.pbg,
                                            color: "black",
                                        }}
                                        size="small"
                                        label={product.recFrom}
                                    ></Chip>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">{product.sendingDate}</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">{product.sendingTo}</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">{product.status}</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">{product.returingDate}</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">{product.fileSenDate}</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">{product.filrSenTo}</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">{product.remark}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </>

    );
};

export default ProductPerformance;
