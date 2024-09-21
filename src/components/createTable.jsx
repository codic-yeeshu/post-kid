import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React, { useState } from "react";
import AddRow from "./addRow";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tablecell: {
    border: "1px solid rgba(224, 224, 224, 1)",
    borderCollapse: "collapse",
    padding: ["7px 5px", "!important"],
  },
});

const CreateTable = ({ text, data, setData }) => {
  const classes = useStyles();

  const [rows, setRows] = useState([0]);

  return (
    <Box>
      <Typography mt={2} mb={2}>
        {text}
      </Typography>
      <Table
        sx={{ minWidth: "100%", border: "1px solid rgba(224, 224, 224, 1)" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell className={classes.tablecell}></TableCell>
            <TableCell className={classes.tablecell}>KEY</TableCell>
            <TableCell className={classes.tablecell}>VALUE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => {
            return (
              <AddRow
                key={idx}
                rowId={idx}
                setRows={setRows}
                data={data}
                setData={setData}
              />
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default CreateTable;
