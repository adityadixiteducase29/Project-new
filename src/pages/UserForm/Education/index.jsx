import React, { useState } from 'react'
import {
  Typography,
  TextField,
  Box,
  Paper,
  CardContent,
  CardHeader,
  Divider,
  Button
} from '@mui/material'
import { Row, Col } from 'reactstrap'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { CloudUpload, ArrowDropDown } from '@mui/icons-material'

const Education = () => {
  const [fromDate, setFromDate] = useState(null)
  const [toDate, setToDate] = useState(null)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Paper elevation={1} sx={{ borderRadius: 3, border: '1px solid #E5E7EA' }}>
      <CardHeader
        title={
          <Typography variant="h5" sx={{ fontWeight: 500, color: '#4A4458' }}>
            Education
          </Typography>
        }
        sx={{ pb: 1 }}
      />
      <Divider sx={{ mb: 2 }} />
      <CardContent sx={{ pt: 0 }}>
          {/* Educational Details Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 500, color: '#3C2D63', mb: 3 }}>
            Educational Details
          </Typography>
            <Row className="g-3">
              {/* Row 1 */}
              <Col className="col-12 col-md-6">
              <TextField
                fullWidth
                  label="Highest Education Qualifications"
                placeholder="Enter"
                variant="outlined"
                  InputLabelProps={{ shrink: true }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: 56,
                    '& fieldset': {
                      borderColor: '#79747E'
                    },
                    '&:hover fieldset': {
                      borderColor: '#6750A4'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#6750A4'
                    }
                  }
                }}
              />
              </Col>
              <Col className="col-12 col-md-6">
              <TextField
                fullWidth
                  label="Institute Name"
                placeholder="Enter"
                variant="outlined"
                  InputLabelProps={{ shrink: true }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: 56,
                    '& fieldset': {
                      borderColor: '#79747E'
                    },
                    '&:hover fieldset': {
                      borderColor: '#6750A4'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#6750A4'
                    }
                  }
                }}
              />
              </Col>
              {/* Row 2 */}
              <Col className="col-12 col-md-6">
              <TextField
                fullWidth
                  label="Grades"
                placeholder="Enter"
                variant="outlined"
                  InputLabelProps={{ shrink: true }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: 56,
                    '& fieldset': {
                      borderColor: '#79747E'
                    },
                    '&:hover fieldset': {
                      borderColor: '#6750A4'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#6750A4'
                    }
                  }
                }}
              />
              </Col>
              <Col className="col-12 col-md-6">
              <TextField
                fullWidth
                  label="City"
                placeholder="Enter"
                variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    endAdornment: <ArrowDropDown />
                  }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: 56,
                    '& fieldset': {
                      borderColor: '#79747E'
                    },
                    '&:hover fieldset': {
                      borderColor: '#6750A4'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#6750A4'
                    }
                  }
                }}
              />
              </Col>
              {/* Row 3 - Date Range */}
              <Col className="col-12 col-md-6">
                <DatePicker
                  label="From"
                  value={fromDate}
                  onChange={(newDate) => setFromDate(newDate)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      placeholder: "Select Date",
                      variant: "outlined",
                      InputLabelProps: { shrink: true },
                      sx: {
                        '& .MuiOutlinedInput-root': {
                          height: 56,
                          '& fieldset': {
                            borderColor: '#79747E'
                          },
                          '&:hover fieldset': {
                            borderColor: '#6750A4'
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#6750A4'
                          }
                        }
                      }
                    }
                  }}
                  format="MM/dd/yyyy"
                />
                <Typography variant="caption" sx={{ color: '#49454F', mt: 0.5, display: 'block' }}>
                  MM/DD/YYYY
                </Typography>
              </Col>
              <Col className="col-12 col-md-6">
                <DatePicker
                  label="To"
                  value={toDate}
                  onChange={(newDate) => setToDate(newDate)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      placeholder: "Select Date",
                      variant: "outlined",
                      InputLabelProps: { shrink: true },
                      sx: {
                        '& .MuiOutlinedInput-root': {
                          height: 56,
                          '& fieldset': {
                            borderColor: '#79747E'
                          },
                          '&:hover fieldset': {
                            borderColor: '#6750A4'
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#6750A4'
                          }
                        }
                      }
                    }
                  }}
                  format="MM/dd/yyyy"
                />
                <Typography variant="caption" sx={{ color: '#49454F', mt: 0.5, display: 'block' }}>
                  MM/DD/YYYY
                </Typography>
              </Col>
              {/* Row 4 - Current Address */}
              <Col className="col-12">
                <TextField
                  fullWidth
                  label="Current Address"
                  placeholder="Enter"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  multiline
                  minRows={2}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#79747E'
                      },
                      '&:hover fieldset': {
                        borderColor: '#6750A4'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#6750A4'
                      }
                    }
                  }}
                />
              </Col>
            </Row>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Marksheets/Certificates Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 500, color: '#3C2D63', mb: 3 }}>
              Marksheets/Certificates
            </Typography>
            
            {/* 10th Marksheet Upload */}
            <Box sx={{ 
              border: '1px solid #DDE2E5', 
              borderRadius: 2, 
              p: 3, 
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CloudUpload sx={{ fontSize: 48, color: '#5E6366' }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 500, color: '#5E6366', mb: 1 }}>
                    Upload 10th Marksheet
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#5E6366', fontWeight: 300 }}>
                    Files Supported: JPEG, PDF and PNG (max size 2mb)
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#000',
                  color: '#fff',
                  fontWeight: 600,
                  px: 2.5,
                  py: 1.25,
                  borderRadius: 1,
                  boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)',
                  '&:hover': {
                    bgcolor: '#333'
                  }
                }}
              >
                Choose file
              </Button>
            </Box>

            {/* 12th Marksheet Upload */}
            <Box sx={{ 
              border: '1px solid #DDE2E5', 
              borderRadius: 2, 
              p: 3, 
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CloudUpload sx={{ fontSize: 48, color: '#5E6366' }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 500, color: '#5E6366', mb: 1 }}>
                    Upload 12th Marksheet
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#5E6366', fontWeight: 300 }}>
                    Files Supported: JPEG, PDF and PNG (max size 2mb)
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#000',
                  color: '#fff',
                  fontWeight: 600,
                  px: 2.5,
                  py: 1.25,
                  borderRadius: 1,
                  boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)',
                  '&:hover': {
                    bgcolor: '#333'
                  }
                }}
              >
                Choose file
              </Button>
            </Box>

            {/* Provisional Certificate/Degree Upload */}
            <Box sx={{ 
              border: '1px solid #DDE2E5', 
              borderRadius: 2, 
              p: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CloudUpload sx={{ fontSize: 48, color: '#5E6366' }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 500, color: '#5E6366', mb: 1 }}>
                    Provisional Certificate/Degree
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#5E6366', fontWeight: 300 }}>
                    Files Supported: JPEG, PDF and PNG (max size 2mb)
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#000',
                  color: '#fff',
                  fontWeight: 600,
                  px: 2.5,
                  py: 1.25,
                  borderRadius: 1,
                  boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)',
                  '&:hover': {
                    bgcolor: '#333'
                  }
                }}
              >
                Choose file
              </Button>
            </Box>
        </Box>
      </CardContent>
    </Paper>
    </LocalizationProvider>
  )
}

export default Education