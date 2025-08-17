import React from 'react'
import {
  Typography,
  TextField,
  Box,
  Grid,
  Paper,
  CardContent,
  CardHeader,
  Divider,
  Button
} from '@mui/material'
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material'

const Document = () => {
  return (
    <Paper elevation={1} sx={{ borderRadius: 3, border: '1px solid #E5E7EA' }}>
      <CardHeader
        title={
          <Typography variant="h5" sx={{ fontWeight: 500, color: '#4A4458' }}>
            Document
          </Typography>
        }
        sx={{ pb: 1 }}
      />
      <Divider sx={{ mb: 2 }} />
      <CardContent sx={{ pt: 0 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 500, color: '#3C2D63', mb: 3 }}>
            Document Upload
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', p: 3, border: '2px dashed #79747E', borderRadius: 2 }}>
                <CloudUploadIcon sx={{ fontSize: 48, color: '#79747E', mb: 2 }} />
                <Typography variant="h6" sx={{ color: '#79747E', mb: 1 }}>
                  Upload Aadhar Card
                </Typography>
                <Button variant="outlined" component="label" sx={{ mt: 1 }}>
                  Choose File
                  <input type="file" hidden />
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', p: 3, border: '2px dashed #79747E', borderRadius: 2 }}>
                <CloudUploadIcon sx={{ fontSize: 48, color: '#79747E', mb: 2 }} />
                <Typography variant="h6" sx={{ color: '#79747E', mb: 1 }}>
                  Upload PAN Card
                </Typography>
                <Button variant="outlined" component="label" sx={{ mt: 1 }}>
                  Choose File
                  <input type="file" hidden />
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', p: 3, border: '2px dashed #79747E', borderRadius: 2 }}>
                <CloudUploadIcon sx={{ fontSize: 48, color: '#79747E', mb: 2 }} />
                <Typography variant="h6" sx={{ color: '#79747E', mb: 1 }}>
                  Upload Passport Size Photo
                </Typography>
                <Button variant="outlined" component="label" sx={{ mt: 1 }}>
                  Choose File
                  <input type="file" hidden />
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', p: 3, border: '2px dashed #79747E', borderRadius: 2 }}>
                <CloudUploadIcon sx={{ fontSize: 48, color: '#79747E', mb: 2 }} />
                <Typography variant="h6" sx={{ color: '#79747E', mb: 1 }}>
                  Upload Resume
                </Typography>
                <Button variant="outlined" component="label" sx={{ mt: 1 }}>
                  Choose File
                  <input type="file" hidden />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Paper>
  )
}

export default Document