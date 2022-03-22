import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

export default function FourthStep() {
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);
    const onSumbitRequest = async () => {
        console.log(userData);
    }
  return (
    <div>
      <h3 style={{ color: "red" }}> Whats your energy usage</h3>
      <Button
        variant="contained"
        color="default"
        marging="normal"
        style={{ width: 200, height: 70 }}
        onClick={(e) => setUserData({ ...userData, energy_usage: "Always On" })}
      >
        Always On
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{ width: 200, height: 70, marginLeft: 20 }}
        onClick={(e) => setUserData({ ...userData, energy_usage: "Economy" })}
      >
        Economy
      </Button>
      <Button
        variant="contained"
        color="inherit"
        style={{ width: 200, height: 70, marginLeft: 20 }}
        onClick={(e) =>
          setUserData({ ...userData, energy_usage: "Suplementary" })
        }
      >
        Suplementary
      </Button>
      <div>
        <Button
          onClick={() => setStep(1)}
          variant="contained"
          color="secondary"
          style={{ marginTop: 20, marginRight: 10 }}
        >
          Back
        </Button>
        <Button
          onClick={() => {submitData(); onSumbitRequest()}}
          variant="contained"
          color="primary"
          style={{ marginTop: 20 }}
          
        >
        Submit
        </Button>
      </div>
    </div>
  );
}
