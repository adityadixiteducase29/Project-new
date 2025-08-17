import React, { useState } from 'react'
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Divider,
  Container,
  Paper
} from '@mui/material'
import Document from './Document'
import EmploymentDetails from './Employment'
import Residency from './Residency'
import Tenancy from './Tenancy'
import Education from './Education'
import PersonalInformation from './PersonalInfo'
import Reference from './Reference'

const UserForm = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    { id: 1, title: 'Personal Information', component: PersonalInformation },
    { id: 2, title: 'Education', component: Education },
    { id: 3, title: 'Reference', component: Reference },
    { id: 4, title: 'Document', component: Document },
    { id: 5, title: 'Employment', component: EmploymentDetails },
    { id: 6, title: 'Tenancy', component: Tenancy },
    { id: 7, title: 'Residency', component: Residency },
  ]

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex)
  }

  const ActiveComponent = steps[activeStep]?.component || PersonalInformation

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#FAFAFA', p: 3 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
          <Box
            sx={{
              width: 64,
              height: 64,
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.25rem'
            }}
          >
            RPI
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 600, color: '#4A4458' }}>
            Background Verification Details
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          {/* Left Sidebar - Steps */}
          <Box sx={{ width: 384 }}>
            <Paper elevation={1} sx={{ borderRadius: 3, border: '1px solid #E5E7EA' }}>
              <CardHeader
                title={
                  <Typography variant="h5" sx={{ fontWeight: 500, color: '#4A4458' }}>
                    Steps
                  </Typography>
                }
                sx={{ pb: 1 }}
              />
              <Divider sx={{ mb: 2 }} />
              <CardContent sx={{ pt: 0 }}>
                <Stepper orientation="vertical" activeStep={activeStep}>
                  {steps.map((step, index) => (
                    <Step key={step.id} completed={index < activeStep}>
                      <StepLabel
                        onClick={() => handleStepClick(index)}
                        sx={{
                          cursor: 'pointer',
                          '& .MuiStepLabel-iconContainer': {
                            '& .MuiStepIcon-root': {
                              color: index === activeStep ? '#4F378B' : index < activeStep ? '#4F378B' : '#CED2D6',
                              '& .MuiStepIcon-text': {
                                fill: index === activeStep || index < activeStep ? 'white' : '#9EA5AD',
                                fontSize: '0.75rem',
                                fontWeight: 500
                              }
                            }
                          },
                          '& .MuiStepLabel-label': {
                            color: index === activeStep ? '#3C2D63' : index < activeStep ? '#3C2D63' : '#9EA5AD',
                            fontWeight: 500,
                            fontSize: '1rem',
                            '&:hover': {
                              color: '#4F378B'
                            }
                          }
                        }}
                      >
                        {step.title}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </CardContent>
            </Paper>
          </Box>

          {/* Right Content - Active Component */}
          <Box sx={{ flex: 1 }}>
            <ActiveComponent />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default UserForm