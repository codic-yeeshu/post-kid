import { Box, Select, MenuItem, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import { DataContext } from "../context/dataProvider";

const useStyles = makeStyles({
  component: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  select: {
    width: 150,
    height: 40,
  },
  textField: {
    width: "100%",
    backgroundColor: "#f6f6f6",
    marginLeft: [5, "!important"],
  },
  button: {
    width: 100,
    height: 40,
    marginLeft: [5, "!important"],
  },
});
const Form = ({ onSendClick }) => {
  const { formData, setFormData } = useContext(DataContext);
  const classes = useStyles();

  const onMethodChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
  };

  const onUrlChange = (e) => {
    setFormData({ ...formData, url: e.target.value });
  };
  return (
    <Box className={classes.component}>
      <Select
        value={formData.type}
        // label="POST"
        // onChange={handleChange}
        className={classes.select}
        onChange={(e) => onMethodChange(e)}
      >
        <MenuItem value={"POST"}>POST</MenuItem>
        <MenuItem value={"GET"}>GET</MenuItem>
      </Select>
      <TextField
        size="small"
        className={classes.textField}
        onChange={(e) => onUrlChange(e)}
      />
      <Button
        onClick={(e) => onSendClick(e)}
        variant="contained"
        className={classes.button}
      >
        Send
      </Button>
    </Box>
  );
};

export default Form;
