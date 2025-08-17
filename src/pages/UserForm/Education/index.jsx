import React from 'react'
import {
  Typography,
  TextField,
  Box,
  Grid,
  Paper,
  CardContent,
  CardHeader,
  Divider
} from '@mui/material'

const Education = () => {
  return (
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
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 500, color: '#3C2D63', mb: 3 }}>
            Educational Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Highest Qualification"
                placeholder="Enter"
                variant="outlined"
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
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Institution Name"
                placeholder="Enter"
                variant="outlined"
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
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Year of Completion"
                placeholder="Enter"
                variant="outlined"
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
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Percentage/CGPA"
                placeholder="Enter"
                variant="outlined"
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
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Paper>
  )
}

export default Education