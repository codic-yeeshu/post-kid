import { Box, Tab, Tabs } from "@mui/material";
import React, { useContext, useState } from "react";
import { makeStyles } from "@mui/styles";
import CreateTable from "./createTable";
import CreateJsonText from "./createJsonText";
import { DataContext } from "../context/dataProvider";

const useStyles = makeStyles({
  component: {
    marginTop: 20,
  },
  tab: {
    textTransform: ["none", "!important"],
  },
});
const SelectTab = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const { paramData, setParamData, headerData, setHeaderData } =
    useContext(DataContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.component}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          sx: { backgroundColor: "#F26B3A", height: 4, bottom: 2 },
        }}
        textColor="none"
      >
        <Tab label="Params" className={classes.tab} />
        <Tab label="Headers" className={classes.tab} />
        <Tab label="Body" className={classes.tab} />
      </Tabs>
      <Box role="tabpanel" hidden={value !== 0} id={`simple-tab-panel-${0}`}>
        <CreateTable
          text={"Query Params"}
          data={paramData}
          setData={setParamData}
        />
      </Box>
      <Box role="tabpanel" hidden={value !== 1} id={`simple-tab-panel-${1}`}>
        <CreateTable
          text={"Headers"}
          data={headerData}
          setData={setHeaderData}
        />
      </Box>
      <Box role="tabpanel" hidden={value !== 2} id={`simple-tab-panel-${2}`}>
        <CreateJsonText />
      </Box>
    </Box>
  );
};

export default SelectTab;
