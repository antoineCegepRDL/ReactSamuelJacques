import { useState } from 'react';
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material/';

import { StepperElements } from 'ts/interfaces/IStepper';

import SubCard from 'components/elements/cards/SubCard'

interface HorizontalLinearStepperProps {
    steps: StepperElements[]
}

const HorizontalLinearStepper = ({steps}: HorizontalLinearStepperProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step
              key={step.label} 
              onClick={() => {setActiveStep(index)}}
              {...stepProps}
              sx={{
                textDecoration:'underline'
              }}
            >
              <StepLabel {...labelProps}>{step.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep >= steps.length ? (
        <>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button variant='outlined' onClick={handleReset}>Recommencer ↩️</Button>
          </Box>
          <Typography sx={{ mt: 2, mb: 1 }}>
            <SubCard title='Terminé'>
              <Typography variant='body1'>
               Vous êtes prêt ! 🚀
              </Typography>
              <Typography variant='body1'>
               Vous pouvez passer au sujet suivant ou recommencer 😎
              </Typography>
            </SubCard>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button variant='outlined' onClick={handleReset}>Recommencer ↩️</Button>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              👈 Précédent
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button variant='outlined' onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Terminé 🙌' : 'Suivant 👉'}
            </Button>
          </Box>
            {steps[activeStep].elements}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
               👈 Précédent
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button variant='outlined' onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Terminé 🙌' : 'Suivant 👉'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default HorizontalLinearStepper;