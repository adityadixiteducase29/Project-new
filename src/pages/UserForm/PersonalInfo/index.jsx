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
  Grid,
  Paper,
  CardContent,
  CardHeader
} from '@mui/material'
import { Row, Col } from "reactstrap"
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Search as SearchIcon } from '@mui/icons-material'
import { format } from 'date-fns'

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
          title={
            <Typography variant="h5" className="main-title">
              Personal Information
            </Typography>
          }
          sx={{ pb: 1 }}
        />
        <Divider sx={{ mb: 2 }} />
        <CardContent sx={{ pt: 0 }}>
          {/* Basic Details Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" className="section-header">
              Basic Details
            </Typography>
            <Grid container spacing={3}>
              {/* First Name */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  placeholder="Enter your first name"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    }
                  }}
                  className="form-field"
                />
              </Grid>
              {/* Last Name */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  placeholder="Enter your last name"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    }
                  }}
                  className="form-field"
                />
              </Grid>
              {/* Gender */}
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel className="gender-label" shrink>
                    Gender
                  </InputLabel>
                  <Select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="select-field"
                  >
                    {genderDropdown.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* Contact Number */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Contact Number"
                  placeholder="Enter your phone number"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    }
                  }}
                  className="form-field"
                />
              </Grid>
              {/* Languages */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Languages"
                  placeholder="Enter languages you know"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                    input: {
                      startAdornment: <SearchIcon className="search-icon" />
                    }
                  }}
                  className="form-field"
                />
              </Grid>
              {/* Date of Birth */}
              <Grid item xs={12} md={6}>
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
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Family & Emergency Contacts Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" className="section-header">
              Family & Emergency Contacts
            </Typography>
            <Grid container spacing={3}>
              {/* Father Name */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Father Name"
                  placeholder="Enter your father's name"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    }
                  }}
                  className="form-field"
                />
              </Grid>
              {/* Mother Name */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Mother Name"
                  placeholder="Enter your mother's name"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    }
                  }}
                  className="form-field"
                />
              </Grid>
              {/* Emergency Contact Number */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Emergency Contact Number"
                  placeholder="Enter emergency contact"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    }
                  }}
                  className="form-field"
                />
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Current Address Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" className="section-header">
              Current Address
            </Typography>
            <Grid container spacing={3}>
              {/* House No./Building/Apartment */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="House No./Building/Apartment"
                  placeholder="Enter house number or building name"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    }
                  }}
                  className="form-field"
                />
              </Grid>
              {/* Area/Locality/Sector */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Area/Locality/Sector"
                  placeholder="Enter area, locality or sector"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    }
                  }}
                  className="form-field"
                />
              </Grid>
              {/* Area/Locality/Sector 2 */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Area/Locality/Sector 2"
                  placeholder="Enter additional area details"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    }
                  }}
                  className="form-field"
                />
              </Grid>
              {/* District */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="District"
                  placeholder="Enter district name"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    }
                  }}
                  className="form-field"
                />
              </Grid>
              {/* Police Station */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Police Station"
                  placeholder="Enter police station name"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    }
                  }}
                  className="form-field"
                />
              </Grid>
              {/* Pincode */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Pincode"
                  placeholder="Enter 6-digit pincode"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    }
                  }}
                  className="form-field"
                />
              </Grid>
              {/* Tehsil */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Tehsil"
                  placeholder="Enter tehsil name"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    }
                  }}
                  className="form-field"
                />
              </Grid>
              {/* Post Office */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Post Office"
                  placeholder="Enter post office name"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    }
                  }}
                  className="form-field"
                />
              </Grid>
              {/* Landmark */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Landmark"
                  placeholder="Enter nearby landmark"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    }
                  }}
                  className="form-field"
                />
              </Grid>
              {/* Current Address */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Current Address"
                  placeholder="Enter your complete current address"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    }
                  }}
                  className="form-field"
                />
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Permanent Address Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" className="section-header">
              Permanent Address
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={useCurrentAddress}
                  onChange={(e) => setUseCurrentAddress(e.target.checked)}
                  className="checkbox-field"
                />
              }
              label="Use current address as permanent address"
              sx={{ mb: 3 }}
            />
            {!useCurrentAddress && (
              <Grid container spacing={3}>
                {/* House No./Building/Apartment */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="House No./Building/Apartment"
                    placeholder="Enter house number or building name"
                    variant="outlined"
                    slotProps={{
                      inputLabel: {
                        shrink: true,
                      }
                    }}
                    className="form-field"
                  />
                </Grid>
                {/* Area/Locality/Sector */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Area/Locality/Sector"
                    placeholder="Enter area, locality or sector"
                    variant="outlined"
                    slotProps={{
                      inputLabel: {
                        shrink: true,
                      }
                    }}
                    className="form-field"
                  />
                </Grid>
                {/* Area/Locality/Sector 2 */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Area/Locality/Sector 2"
                    placeholder="Enter additional area details"
                    variant="outlined"
                    slotProps={{
                      inputLabel: {
                        shrink: true,
                      }
                    }}
                    className="form-field"
                  />
                </Grid>
                {/* District */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="District"
                    placeholder="Enter district name"
                    variant="outlined"
                    slotProps={{
                      inputLabel: {
                        shrink: true,
                      }
                    }}
                    className="form-field"
                  />
                </Grid>
                {/* Police Station */}
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Police Station"
                    placeholder="Enter police station name"
                    variant="outlined"
                    slotProps={{
                      inputLabel: {
                        shrink: true,
                      }
                    }}
                    className="form-field"
                  />
                </Grid>
                {/* Pincode */}
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Pincode"
                    placeholder="Enter 6-digit pincode"
                    variant="outlined"
                    slotProps={{
                      inputLabel: {
                        shrink: true,
                      }
                    }}
                    className="form-field"
                  />
                </Grid>
                {/* Tehsil */}
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Tehsil"
                    placeholder="Enter tehsil name"
                    variant="outlined"
                    slotProps={{
                      inputLabel: {
                        shrink: true,
                      }
                    }}
                    className="form-field"
                  />
                </Grid>
                {/* Post Office */}
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Post Office"
                    placeholder="Enter post office name"
                    variant="outlined"
                    slotProps={{
                      inputLabel: {
                        shrink: true,
                      }
                    }}
                    className="form-field"
                  />
                </Grid>
                {/* Landmark */}
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Landmark"
                    placeholder="Enter nearby landmark"
                    variant="outlined"
                    slotProps={{
                      inputLabel: {
                        shrink: true,
                      }
                    }}
                    className="form-field"
                  />
                </Grid>
              </Grid>
            )}
            <Grid container spacing={3} sx={{ mt: 3 }}>
              {/* Permanent Address */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Permanent Address"
                  placeholder="Enter your complete permanent address"
                  variant="outlined"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    }
                  }}
                  className="form-field"
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Paper>
    </LocalizationProvider>
  )
}

export default PersonalInformation