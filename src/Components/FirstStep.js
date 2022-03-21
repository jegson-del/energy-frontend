import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

export default function FirstStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  
  return (
    <div
      style={{
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
        padding: 20,
      }}
    >
      <div>
        <TextField 
          label="postcode" 
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["postcode"]} onChange={(e)=>setUserData({...userData, "postcode" : e.target.value})}
        /> 
      </div>
      <div>
        <TextField
          label="email"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["email"]} onChange={(e)=>setUserData({...userData, "email" : e.target.value})}
        />
      </div>
      <Button onClick={() => setStep(2)} variant="contained" color="primary">
        Join 121energy
      </Button>
    </div>
  );
}
