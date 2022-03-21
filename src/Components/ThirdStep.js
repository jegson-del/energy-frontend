import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

export default function ThirdStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <div
      style={{
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
        padding: 20,
        width: 700,
        marginTop: 10,
      }}
    >
      <h3 style={{ color: "red" }}> Lets get your house a quote</h3>
      <div>
        <TextField
          label="street_name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["street_name"]} onChange={(e)=>setUserData({...userData, "street_name" : e.target.value})}
        />
      </div>
      <div>
        <TextField
          label="house_number"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["house_number"]} onChange={(e)=>setUserData({...userData, "house_number" : e.target.value})}
        />
      </div>
      <div>
        <TextField
          label="house_type"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["house_type"]} onChange={(e)=>setUserData({...userData, "house_type" : e.target.value})}
        />
      </div>
      <Button
        onClick={() => setStep(2)}
        variant="contained"
        color="secondary"
        style={{ marginRight: 10 }}
      >
        Back
      </Button>
      <Button onClick={() => setStep(4)} variant="contained" color="primary">
        Next
      </Button>
    </div>
  );
}
