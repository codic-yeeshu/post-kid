import { Checkbox, TableCell, TableRow, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyles = makeStyles({
  tablecell: {
    border: "1px solid rgba(224, 224, 224, 1)",
    borderCollapse: "collapse",
    padding: ["7px 5px", "!important"],
  },
  checkbox: {
    padding: ["2px 5px", "!important"],
  },
  textfield: {
    width: "100%",
  },
});
const AddRow = ({ setRows, rowId, data, setData }) => {
  const classes = useStyles();

  const [checkCheckBox, setCheckCheckBox] = useState(false);

  const handleChange = (e) => {
    let result = data.filter((value) => value.id === Number(e.target.name))[0];
    if (!checkCheckBox) {
      setCheckCheckBox(true);
      setRows((prev) => [...prev, rowId]);
      result = { ...result, id: rowId, check: true };
    } else {
      setCheckCheckBox(false);
      result = { ...result, id: rowId, check: false };
    }

    let index = data.findIndex((value) => value.id === Number(e.target.name));

    if (index === -1) {
      setData((oldArr) => [...oldArr, result]);
    } else {
      const newArr = Object.assign([...data], { [index]: result });
      setData(newArr);
    }
  };

  const handleTextChange = (e) => {
    // console.log(e.target.name, e.target.value);
    let result = data.filter((value) => value.id === rowId)[0];

    result = { ...result, id: rowId, [e.target.name]: e.target.value };

    let index = data.findIndex((value) => value.id === rowId);

    if (index === -1) {
      setData((oldArr) => [...oldArr, result]);
    } else {
      const newArr = Object.assign([...data], { [index]: result });
      setData(newArr);
    }
  };

  return (
    <TableRow>
      <TableCell className={classes.tablecell}>
        <Checkbox
          checked={checkCheckBox}
          onChange={(e) => handleChange(e)}
          size="large"
          className={classes.checkbox}
          name={rowId}
        />
      </TableCell>
      <TableCell className={classes.tablecell}>
        <TextField
          className={classes.textfield}
          slotProps={{
            input: { style: { height: 30, padding: "0 5px" } },
          }}
          name="key"
          onChange={(e) => handleTextChange(e)}
        />
      </TableCell>
      <TableCell className={classes.tablecell}>
        <TextField
          className={classes.textfield}
          slotProps={{
            input: { style: { height: 30, padding: "0 5px" } },
          }}
          name="value"
          onChange={(e) => handleTextChange(e)}
        />
      </TableCell>
    </TableRow>
  );
};

export default AddRow;
