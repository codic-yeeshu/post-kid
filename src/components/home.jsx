import React, { useContext, useState } from "react";

import Header from "./header";
import Form from "./form";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SelectTab from "./selectTab";
import Response from "./response";
import ErrorScreen from "./errorScreen";
import { DataContext } from "../context/dataProvider";
import { checkParams } from "../utils/common-utils";
import SnackBar from "./snackBar";
import { getData } from "../service/api";

const useStyles = makeStyles({
  component: {
    width: "60%",
    margin: "20px auto",
  },
});
const Home = () => {
  const classes = useStyles();
  const { formData, jsonText, paramData, headerData } = useContext(DataContext);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorResponse, setErrorResponse] = useState(false);
  const [apiResponse, setApiResponse] = useState("");

  const onSendClick = async (e) => {
    if (!checkParams(formData, jsonText, paramData, headerData, setErrorMsg)) {
      setError(true);
      return false;
    }
    let response = await getData(formData, jsonText, paramData, headerData);
    if (response === "error") {
      setErrorResponse(true);
      return;
    }
    setErrorResponse(false);
    setApiResponse(response.data);
  };
  return (
    <>
      <Header />
      <Box className={classes.component}>
        <Form onSendClick={onSendClick} />
        <SelectTab />
        {errorResponse ? <ErrorScreen /> : <Response data={apiResponse} />}

        {error && (
          <SnackBar error={error} setError={setError} errorMsg={errorMsg} />
        )}
      </Box>
    </>
  );
};

export default Home;
