import { Button, Grid, Link, OutlinedInput, Typography } from "@mui/material";
import {
  ButtonParent,
  ButtonStyle,
  FormParent,
  FormTopSection,
  GenralBody,
  Heading1,
  Heading2,
  OutlinedStyle,
  SubFormParent,
  TableCells,
} from "./Style";
import DashboardTable from "./DashboardTable";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Select,
  TextField,
  styled,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { cleanDigitSectionValue } from "@mui/x-date-pickers/internals/hooks/useField/useField.utils";

const TableProp = styled(Box)`
  display: flex;
  justify-content: right;
  & > div {
    margin-right: 15px;
  }
`;
const ExportButton = styled(Select)`
  width: 13%;
  background: #fa896b;
  height: 30px;
  color: #fff;
  & > svg {
    color: white;
  }
`;

const FilterButton = styled(Select)`
  width: 13%;
  background: #5d87ff;
  height: 30px;
  color: #fff;
  & > svg {
    color: white;
  }
`;

const Search = styled(TextField)`
  color: #fff;
  & > div > input {
    height: 20px;
    width: 150px;
    padding: 5px 5px;
  }
`;

const Column = [
  "ID",
  "File No.",
  "Subject",
  "Received Date",
  "Receiving From",
  "Sending Date",
  "Sending To",
  "Status",
  "Returning Date",
  "File Sending Date",
  "File Sending To",
  "Remark",
];

const RecentTransactions = () => {
  const [exp, setExp] = useState("null");
  const [filter, setFilter] = useState("null2");

  const [product, setProduct] = useState([]);

  const [addFormData, setAddFormData] = useState({
    id: "",
    fileNo: "",
    Subject: "",
    ReceivedDate: "",
    ReceivingFrom: "",
    SendingDate: "",
    SendingTo: "",
    Status: "",
    ReturningDate: "",
    FileSendingDate: "",
    FileSendingTo: "",
    Remark: "",
  });

  const HandleFormChange = (event: any) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData: any = { ...addFormData };

    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const HandleSubmit = (event: any) => {
    // event.preventDefault();

    const newConatct = {
      id: addFormData.id,
      fileNo: addFormData.fileNo,
      Subject: addFormData.Subject,
      ReceivedDate: addFormData.ReceivedDate,
      ReceivingFrom: addFormData.ReceivingFrom,
      SendingDate: addFormData.SendingDate,
      SendingTo: addFormData.SendingTo,
      Status: addFormData.Status,
      ReturningDate: addFormData.ReturningDate,
      FileSendingDate: addFormData.FileSendingDate,
      FileSendingTo: addFormData.FileSendingTo,
      Remark: addFormData.Remark,
    };

    let obj = {
      id: "",
      fileNo: "",
      Subject: "",
      ReceivedDate: "",
      ReceivingFrom: "",
      SendingDate: "",
      SendingTo: "",
      Status: "",
      ReturningDate: "",
      FileSendingDate: "",
      FileSendingTo: "",
      Remark: "",
    };

    setAddFormData(obj);

    const newContacts: any = [...product, newConatct];
    setProduct(newContacts);
  };

  console.log(product);

  return (
    <>
      <Grid
        //   container
        rowSpacing={1}
        columnSpacing={{ xs: 3, sm: 2, md: 3 }}
        sx={GenralBody}
      >
        <Grid item xs={12} sx={FormTopSection}>
          Dashboard
        </Grid>
        <Grid
          container
          spacing={1.5}
          columns={{ lg: 12, xs: 3, sm: 6, md: 9, xl: 12 }}
          sx={FormParent}
        >
          <Grid
            item
            xs={3}
            // sm={4}
          >
            <Heading2 sx={{ textAlign: { md: "left" } }}>ID</Heading2>
            <OutlinedInput
              size="small"
              name="id"
              type="number"
              sx={OutlinedStyle}
              value={addFormData.id}
              onChange={HandleFormChange}
              required
            />
          </Grid>
          <Grid
            item
            xs={3}
            // sm={4}
          >
            <Heading2 sx={{ textAlign: { md: "left" } }}>File No.</Heading2>
            <OutlinedInput
              size="small"
              name="fileNo"
              id="outlined-basic"
              type="text"
              sx={OutlinedStyle}
              value={addFormData.fileNo}
              onChange={HandleFormChange}
              required
            />
          </Grid>
          <Grid
            item
            xs={3}
            // sm={4}
          >
            <Heading2 sx={{ textAlign: { md: "left" } }}>Subject</Heading2>
            <OutlinedInput
              size="small"
              id="outlined-basic"
              type="text"
              sx={OutlinedStyle}
              value={addFormData.Subject}
              onChange={HandleFormChange}
              required
              name="Subject"
            />
          </Grid>
          <Grid
            item
            xs={3}
            // sm={4}
          >
            <Heading2 sx={{ textAlign: { md: "left" } }}>
              Received Date
            </Heading2>
            <OutlinedInput
              size="small"
              id="outlined-basic"
              type="date"
              sx={OutlinedStyle}
              value={addFormData.ReceivedDate}
              onChange={HandleFormChange}
              required
              name="ReceivedDate"
            />
          </Grid>
          <Grid
            item
            xs={3}
            // sm={4}
          >
            <Heading2 sx={{ textAlign: { md: "left" } }}>
              Received Form
            </Heading2>
            <OutlinedInput
              size="small"
              placeholder=""
              id="outlined-basic"
              type="date"
              sx={OutlinedStyle}
              value={addFormData.ReceivingFrom}
              onChange={HandleFormChange}
              required
              name="ReceivingFrom"
            />
          </Grid>
          <Grid
            item
            xs={3}
            // sm={4}
          >
            <Heading2 sx={{ textAlign: { md: "left" } }}>Sending Date</Heading2>
            <OutlinedInput
              size="small"
              placeholder=""
              id="outlined-basic"
              type="date"
              sx={OutlinedStyle}
              value={addFormData.SendingDate}
              onChange={HandleFormChange}
              required
              name="SendingDate"
            />
          </Grid>
          <Grid
            item
            xs={3}
            // sm={4}
          >
            <Heading2 sx={{ textAlign: { md: "left" } }}>Sending To</Heading2>
            <OutlinedInput
              size="small"
              placeholder=""
              id="outlined-basic"
              type="date"
              sx={OutlinedStyle}
              value={addFormData.SendingTo}
              onChange={HandleFormChange}
              required
              name="SendingTo"
            />
          </Grid>
          <Grid
            item
            xs={3}
            // sm={4}
          >
            <Heading2 sx={{ textAlign: { md: "left" } }}>Status</Heading2>
            <OutlinedInput
              size="small"
              placeholder=""
              id="outlined-basic"
              // type="date"
              sx={OutlinedStyle}
              value={addFormData.Status}
              onChange={HandleFormChange}
              required
              name="Status"
            />
          </Grid>
          <Grid
            item
            xs={3}
            // sm={4}
          >
            <Heading2 sx={{ textAlign: { md: "left" } }}>
              Returning Date
            </Heading2>
            <OutlinedInput
            type="date"
              size="small"
              placeholder=""
              id="outlined-basic"
              sx={OutlinedStyle}
              value={addFormData.ReturningDate}
              onChange={HandleFormChange}
              required
              name="ReturningDate"
            />
          </Grid>
          <Grid
            item
            xs={3}
            // sm={4}
          >
            <Heading2 sx={{ textAlign: { md: "left" } }}>
              File Sending Date
            </Heading2>
            <OutlinedInput
              size="small"
              placeholder=""
              id="outlined-basic"
              type="date"
              sx={OutlinedStyle}
              value={addFormData.FileSendingDate}
              onChange={HandleFormChange}
              required
              name="FileSendingDate"
            />
          </Grid>
          <Grid
            item
            xs={3}
            // sm={4}
          >
            <Heading2 sx={{ textAlign: { md: "left" } }}>
              File Sending To
            </Heading2>
            <OutlinedInput
              size="small"
              placeholder=""
              id="outlined-basic"
              type="date"
              sx={OutlinedStyle}
              value={addFormData.FileSendingTo}
              onChange={HandleFormChange}
              required
              name="FileSendingTo"
            />
          </Grid>
          <Grid
            item
            xs={3}
            // sm={4}
          >
            <Heading2 sx={{ textAlign: { md: "left" } }}>Remark</Heading2>
            <OutlinedInput
              size="small"
              placeholder=""
              id="outlined-basic"
              // type="date"
              sx={OutlinedStyle}
              value={addFormData.Remark}
              onChange={HandleFormChange}
              required
              name="Remark"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={ButtonParent}
            // sm={4}
          >
            <Button sx={ButtonStyle} onClick={HandleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* </DashboardCard> */}
      <TableProp sx={{ marginTop: "70px" }}>
        <FilterButton
          value={filter}
          name="filter"
          sx={{ background: "#6A5EC2", fontWeight: "700" }}
          onChange={(e: any) => {
            setFilter(e.target.value);
          }}
        >
          <MenuItem value={"null2"} disabled>
            Select Filter
          </MenuItem>
          <MenuItem value={"20"}>Type</MenuItem>
          <MenuItem value={"30"}>Mobile Number</MenuItem>
          <MenuItem value={"40"}>Name</MenuItem>
          <MenuItem value={"50"}>Date</MenuItem>
        </FilterButton>
        <Search
          id="email"
          variant="outlined"
          placeholder="Search here"
          disabled={filter === "null2" ? true : false}
        />
        <ExportButton
          value={exp}
          name="exp"
          sx={{ background: "#6A5EC2", fontWeight: "700" }}
          onChange={(e: any) => {
            setExp(e.target.value);
          }}
        >
          <MenuItem value={"null"} disabled>
            Export As
          </MenuItem>
          <MenuItem value={20}>PDF</MenuItem>
          <MenuItem value={30}>CSV</MenuItem>
        </ExportButton>
      </TableProp>
      <Box
        sx={{
          overflow: "auto",
          width: { xs: "280px", sm: "auto", xl: "100%" },
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          padding: "5px",
          marginTop: "10px",
        }}
      >
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            // mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              {Column.map((el) => {
                return (
                  <TableCell
                    sx={{
                      borderRight: "1px solid black",
                      borderLeft: "1px solid black",
                      borderBottom: "1px solid black",
                      borderTop: "1px solid black",
                    }}
                  >
                    <Typography variant="h6" fontWeight={600}>
                      {el}
                    </Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {product.map((ele: any) => {
              return (
                <TableRow key={1}>
                  <TableCell sx={TableCells}>
                    <Typography
                    >
                      {ele.id}
                    </Typography>
                  </TableCell>
                  <TableCell sx={TableCells}>
                    <Typography>
                      {ele.fileNo}
                    </Typography>
                  </TableCell>
                  <TableCell sx={TableCells}>
                    <Typography >
                      {ele.Subject}
                    </Typography>
                  </TableCell>
                  <TableCell sx={TableCells}>
                    <Typography> {ele.ReceivedDate}</Typography>
                  </TableCell>
                  <TableCell sx={TableCells}>
                    <Typography>{ele.ReceivingFrom}</Typography>
                  </TableCell>
                  <TableCell sx={TableCells}>
                    <Typography>{ele.SendingDate}</Typography>
                  </TableCell>
                  <TableCell sx={TableCells}>
                    <Typography >{ele.SendingTo}</Typography>
                  </TableCell>
                  <TableCell sx={TableCells}>
                    <Typography >{ele.Status}</Typography>
                  </TableCell>
                  <TableCell sx={TableCells}>
                    <Typography >{ele.ReturningDate}</Typography>
                  </TableCell>
                  <TableCell sx={TableCells}>
                    <Typography >{ele.FileSendingDate}</Typography>
                  </TableCell>
                  <TableCell sx={TableCells}>
                    <Typography >{ele.FileSendingTo}</Typography>
                  </TableCell>
                  <TableCell sx={TableCells}>
                    <Typography >{ele.Remark}</Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default RecentTransactions;
