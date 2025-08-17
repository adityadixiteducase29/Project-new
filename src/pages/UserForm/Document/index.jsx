import React from 'react'
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
import { CloudUpload } from '@mui/icons-material'

const Document = () => {
  return (
    <Paper elevation={1} sx={{ borderRadius: 3, border: '1px solid #E5E7EA' }}>
      <CardHeader
        title={
          <Typography variant="h5" sx={{ fontWeight: 500, color: '#4A4458' }}>
            Documents
          </Typography>
        }
        sx={{ pb: 1 }}
      />
      <Divider sx={{ mb: 2 }} />
      <CardContent sx={{ pt: 0 }}>
        
        {/* Details Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 500, color: '#3C2D63', mb: 3 }}>
            Details
          </Typography>
          <Row className="g-3">
            {/* Row 1: Aadhar Card Number (50%) + PAN Card Number (50%) */}
            <Col className="col-12 col-md-6">
              <TextField
                fullWidth
                label="Aadhar Card Number"
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
                label="PAN Card Number"
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

        <Divider sx={{ my: 3 }} />

        {/* Documents Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 500, color: '#3C2D63', mb: 3 }}>
            Documents
          </Typography>
          
          {/* Aadhar Card Front Side Upload */}
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
                  Upload Aadhar Card Front Side
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

          {/* Aadhar Card Back Side Upload */}
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
                  Upload Aadhar Card Back Side
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

          {/* Passport Size Photo Upload */}
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
                  Passport Size Photo
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

          {/* PAN Card Upload */}
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
                  Pan Card
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

          {/* Voter ID Upload */}
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
                  Voter ID
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

          {/* Driving License Upload */}
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
                  Driving License
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

          {/* Passport Upload */}
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
                  Passport
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

          {/* Electricity Bill Upload */}
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
                  Ele
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

          {/* Other Document Upload */}
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
                  Other document
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
  )
}

export default Document