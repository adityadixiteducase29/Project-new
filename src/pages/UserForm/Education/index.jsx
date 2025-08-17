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
import { Row, Col, Input, Label } from 'reactstrap'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ArrowDropDown } from '@mui/icons-material'
import Upload from '../Svg/Upload.svg'
import './index.css'

const Education = () => {
  const [fromDate, setFromDate] = useState(null)
  const [toDate, setToDate] = useState(null)
  const [selectedFiles, setSelectedFiles] = useState({
    tenthMarksheet: null,
    twelfthMarksheet: null,
    provisionalCertificate: null
  })

  const handleFileChange = (field, file) => {
    setSelectedFiles(prev => ({
      ...prev,
      [field]: file
    }))
  }

  const CustomFileUpload = ({ field, accept, id }) => {
    return (
      <div className="file-upload-container">
        <Input
          id={id}
          type="file"
          onChange={(e) => handleFileChange(field, e.target.files[0])}
          accept={accept}
          className="file-upload-input"
        />
        <Label 
          for={id} 
          className="btn btn-outline-secondary mb-0 file-upload-button file-upload-label"
        >
          Choose file
        </Label>
      </div>
    )
  }

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
            <div className="upload-box">
              <div className="upload-content">
                <img src={Upload} alt="Upload" className="upload-icon" />
                <div>
                  <Typography variant="h6" className="upload-title">
                    Upload 10th Marksheet
                  </Typography>
                  <Typography variant="body2" className="upload-description">
                    Files Supported: JPEG, PDF and PNG (max size 2mb)
                  </Typography>
                </div>
              </div>
              <CustomFileUpload 
                field="tenthMarksheet"
                accept=".jpg,.jpeg,.png,.pdf"
                id="tenthMarksheetUpload"
              />
            </div>

            {/* 12th Marksheet Upload */}
            <div className="upload-box">
              <div className="upload-content">
                <img src={Upload} alt="Upload" className="upload-icon" />
                <div>
                  <Typography variant="h6" className="upload-title">
                    Upload 12th Marksheet
                  </Typography>
                  <Typography variant="body2" className="upload-description">
                    Files Supported: JPEG, PDF and PNG (max size 2mb)
                  </Typography>
                </div>
              </div>
              <CustomFileUpload 
                field="twelfthMarksheet"
                accept=".jpg,.jpeg,.png,.pdf"
                id="twelfthMarksheetUpload"
              />
            </div>

            {/* Provisional Certificate/Degree Upload */}
            <div className="upload-box">
              <div className="upload-content">
                <img src={Upload} alt="Upload" className="upload-icon" />
                <div>
                  <Typography variant="h6" className="upload-title">
                    Provisional Certificate/Degree
                  </Typography>
                  <Typography variant="body2" className="upload-description">
                    Files Supported: JPEG, PDF and PNG (max size 2mb)
                  </Typography>
                </div>
              </div>
              <CustomFileUpload 
                field="provisionalCertificate"
                accept=".jpg,.jpeg,.png,.pdf"
                id="provisionalCertificateUpload"
              />
            </div>
          </Box>
        </CardContent>
      </Paper>
    </LocalizationProvider>
  )
}

export default Education