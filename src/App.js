import "./App.css";
import FirstStep from "./Components/FirstStep";
import SecondStep from "./Components/SecondStep";
import ThirdStep from "./Components/ThirdStep";
import Nav from "./Components/Nav";
import FourthStep from "./Components/FourthStep";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { multiStepContext } from "./StepContext";
import { React, useContext } from "react";

function App() {
  const { currentStep, finalData } = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;

      case 2:
        return <SecondStep />;

      case 3:
        return <ThirdStep />;

      case 4:
        return <FourthStep />;
    }
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <div className="center-stepper">
          <Stepper
            style={{ width: "50%", background: "inherit" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
      </header>
    </div>
  );
}

export default App;
