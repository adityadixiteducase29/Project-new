import React, { useState } from 'react'
import {
  Typography,
  TextField,
  Box,
  Paper,
  CardContent,
  CardHeader,
  Divider
} from '@mui/material'
import { Row, Col } from 'reactstrap'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ArrowDropDown } from '@mui/icons-material'

const Residency = () => {
  const [residingDate, setResidingDate] = useState(null)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper elevation={1} sx={{ borderRadius: 3, border: '1px solid #E5E7EA' }}>
        <CardHeader
          title={
            <Typography variant="h5" sx={{ fontWeight: 500, color: '#4A4458' }}>
              Residential
            </Typography>
          }
          sx={{ pb: 1 }}
        />
        <Divider sx={{ mb: 2 }} />
        <CardContent sx={{ pt: 0 }}>
          
          {/* Neighbour - 1 Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 500, color: '#3C2D63', mb: 3 }}>
              Neighbour - 1
            </Typography>
            <Row className="g-3">
              {/* Row 1: Neighbour 1 Name (50%) + Neighbour 1 Mobile Number (50%) */}
              <Col className="col-12 col-md-6">
                <TextField
                  fullWidth
                  label="Neighbour 1 Name"
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
                  label="Neighbour 1 Mobile Number"
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
              {/* Row 2: Neighbour 1 Since (50%) + Neighbour 1 Remark (50%) */}
              <Col className="col-12 col-md-6">
                <TextField
                  fullWidth
                  label="Neighbour 1 Since"
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
                  label="Neighbour 1 Remark"
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
            </Row>
          </Box>

          {/* Neighbour - 2 Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 500, color: '#3C2D63', mb: 3 }}>
              Neighbour - 2
            </Typography>
            <Row className="g-3">
              {/* Row 1: Neighbour 2 Name (50%) + Neighbour 2 Mobile Number (50%) */}
              <Col className="col-12 col-md-6">
                <TextField
                  fullWidth
                  label="Neighbour 2 Name"
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
                  label="Neighbour 2 Mobile Number"
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
              {/* Row 2: Neighbour 2 Since (50%) + Neighbour 2 Remark (50%) */}
              <Col className="col-12 col-md-6">
                <TextField
                  fullWidth
                  label="Neighbour 2 Since"
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
                  label="Neighbour 2 Remark"
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
            </Row>
          </Box>

          {/* Family and Residing Information */}
          <Box sx={{ mb: 4 }}>
            <Row className="g-3">
              {/* Row 1: How Many Family Members (50%) + Residing Date (50%) */}
              <Col className="col-12 col-md-6">
                <TextField
                  fullWidth
                  label="How Many Family Members"
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
                <DatePicker
                  label="Residing Date"
                  value={residingDate}
                  onChange={(newDate) => setResidingDate(newDate)}
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
              {/* Row 2: Residing Remark (100%) */}
              <Col className="col-12">
                <TextField
                  fullWidth
                  label="Residing Remark"
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
              {/* Row 3: Place (100%) */}
              <Col className="col-12">
                <TextField
                  fullWidth
                  label="Place"
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
            </Row>
          </Box>

          {/* Appliance and Vehicle Information Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 500, color: '#3C2D63', mb: 3 }}>
              Appliance and Vehicle Information
            </Typography>
            <Row className="g-3">
              {/* Row 1: Bike Quantity (33%) + Car Quantity (33%) + AC Quantity (33%) */}
              <Col className="col-12 col-md-4">
                <TextField
                  fullWidth
                  label="Bike Quantity"
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
              <Col className="col-12 col-md-4">
                <TextField
                  fullWidth
                  label="Car Quantity"
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
              <Col className="col-12 col-md-4">
                <TextField
                  fullWidth
                  label="AC Quantity"
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
            </Row>
          </Box>

        </CardContent>
      </Paper>
    </LocalizationProvider>
  )
}

export default Residency