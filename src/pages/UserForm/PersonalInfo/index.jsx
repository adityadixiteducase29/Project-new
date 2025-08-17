import React, { useState } from 'react'
import './index.css'
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Box,
  Divider,
  Paper,
  CardContent,
  CardHeader
} from '@mui/material'
import { Row, Col } from "reactstrap"
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Search as SearchIcon } from '@mui/icons-material'

const PersonalInformation = () => {
  const [date, setDate] = useState(null)
  const [useCurrentAddress, setUseCurrentAddress] = useState(false)
  const [gender, setGender] = useState('')
  const genderDropdown = [
    { id: 'male', label: 'Male' },
    { id: 'female', label: 'Female' },
    { id: 'other', label: 'Other' }
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper elevation={1} sx={{ borderRadius: 3, border: '1px solid #E5E7EA' }}>
        <CardHeader
          title={<Typography variant="h5" className="main-title">Personal Information</Typography>}
          sx={{ pb: 1 }}
        />
        <Divider sx={{ mb: 2 }} />
        <CardContent sx={{ pt: 0 }}>
          {/* Basic Details Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" className="section-header">Basic Details</Typography>
            {/* Row 1: Full Name (50%) + Email ID (50%) */}
            <Row className="g-3">
              <Col xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  placeholder="Enter your full name"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  className="form-field"
                />
              </Col>
              <Col xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email ID"
                  type="email"
                  placeholder="Enter your email address"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  className="form-field"
                />
              </Col>
            </Row>
            {/* Row 2: Gender (33%) + Contact Number (33%) + Languages (33%) */}
            <Row className="g-3 mt-1">
              <Col xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel className='gender-label' shrink>Gender</InputLabel>
                  <Select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    displayEmpty
                    renderValue={(value) => {
                      if (value === '') {
                        return <span style={{ color: '#999' }}>Select Gender</span>;
                      }
                      return genderDropdown.find(option => option.id === value)?.label;
                    }}
                  >
                    {genderDropdown.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Col>
              <Col xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Contact Number"
                  placeholder="Enter your phone number"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  className="form-field"
                />
              </Col>
              <Col xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Languages"
                  placeholder="Enter languages you know"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  className="form-field"
                  InputProps={{
                    startAdornment: <SearchIcon className="search-icon" />
                  }}
                />
              </Col>
            </Row>
            {/* Row 3: Date of Birth (50%) centered */}
            <Row className="g-3 mt-1">
              <Col xs={12} md={6}>
                <DatePicker
                  label="Date of Birth"
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      placeholder: "Enter Date of Birth",
                      variant: "outlined",
                      InputLabelProps: { shrink: true },
                      className: "form-field"
                    }
                  }}
                  format="dd/MM/yyyy"
                />
              </Col>
            </Row>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Family & Emergency Contacts Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" className="section-header">
              Family & Emergency Contacts
            </Typography>
            {/* Row: Father Name (33%) + Mother Name (33%) + Emergency Contact (33%) */}
            <Row className="g-3">
              <Col xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Father Name"
                  placeholder="Enter your father's name"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  className="form-field"
                />
              </Col>
              <Col xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Mother Name"
                  placeholder="Enter your mother's name"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  className="form-field"
                />
              </Col>
              <Col xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Emergency Contact"
                  placeholder="Enter emergency contact"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  className="form-field"
                />
              </Col>
            </Row>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Current Address Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" className="section-header">
              Current Address
            </Typography>
            {/* Row 1: House No. (50%) + Area/Locality (50%) */}
            <Row className="g-3">
              <Col xs={12} md={6}>
                <TextField
                  fullWidth
                  label="House No."
                  placeholder="Enter house number"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  className="form-field"
                />
              </Col>
              <Col xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Area/Locality"
                  placeholder="Enter area or locality"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  className="form-field"
                />
              </Col>
            </Row>
            {/* Row 2: Area/Locality 2 (50%) + District (50%) */}
            <Row className="g-3 mt-1">
              <Col xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Area/Locality 2"
                  placeholder="Enter additional area details"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  className="form-field"
                />
              </Col>
              <Col xs={12} md={6}>
                <TextField
                  fullWidth
                  label="District"
                  placeholder="Enter district name"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  className="form-field"
                />
              </Col>
            </Row>
            {/* Row 3: Police Station (33%) + Pincode (33%) + Tehsil (33%) */}
            <Row className="g-3 mt-1">
              <Col xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Police Station"
                  placeholder="Enter police station name"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  className="form-field"
                />
              </Col>
              <Col xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Pincode"
                  placeholder="Enter 6-digit pincode"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  className="form-field"
                />
              </Col>
              <Col xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Tehsil"
                  placeholder="Enter tehsil name"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  className="form-field"
                />
              </Col>
            </Row>
            {/* Row 4: Post Office (33%) + Landmark (33%) */}
            <Row className="g-3 mt-1">
              <Col xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Post Office"
                  placeholder="Enter post office name"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  className="form-field"
                />
              </Col>
              <Col xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Landmark"
                  placeholder="Enter nearby landmark"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  className="form-field"
                />
              </Col>
              <Col xs={12} md={4}></Col> {/* empty to complete row structure */}
            </Row>
            {/* Row 5: Current Address (100%) */}
            <Row className="g-3 mt-1">
              <Col xs={12}>
                <TextField
                  fullWidth
                  label="Current Address"
                  placeholder="Enter your complete current address"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  className="form-field"
                  multiline
                  minRows={2}
                />
              </Col>
            </Row>
          </Box>
        </CardContent>
      </Paper>
    </LocalizationProvider>
  )
}

export default PersonalInformation
