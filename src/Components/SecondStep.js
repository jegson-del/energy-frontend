import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

export default function SecondStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <div
      style={{
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "white",
        padding: 20,
        marginTop: 20,
      }}
    >
      <h3 style={{ color: "red" }}> What do you use</h3>
      <Button
        variant="contained"
        color="secondary"
        marging="normal"
        style={{ width: 200, height: 70 }}
        onClick ={(e)=>setUserData({...userData, "energy" : "Gas Only"})}
      >
        Gas Only
      </Button>
      <Button
        variant="contained"
        color="info"
        style={{ width: 200, height: 70, marginLeft: 20 }}
        onClick ={(e)=>setUserData({...userData, "energy" : "Electric & Gas"})}
      >
        Electric & Gas
      </Button>
      <div>
      <Button
          onClick={() => setStep(1)}
          variant="contained"
          color="secondary"
          style={{ marginRight: 10, marginTop:20 }} >
              Back
            </Button>
        <Button
          onClick={() => setStep(3)}
          variant="contained"
          color="primary"
          style={{ marginTop: 20 }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
