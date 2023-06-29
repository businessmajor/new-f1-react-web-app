import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { useDriverStats } from './api/get_driver_info';
import { useParams } from "react-router";

function Details() {
    const { name } = useParams();
    let driverId = "driver Id"
    let firstName = "firstName"
    let lastName = "lastName"
    let permanentNumber = "permanentNumber"
    let nationality = "nationality"
    let dob = "dob"

    const driverDataQuery = useDriverStats(name);

    if (driverDataQuery.isSuccess) {
        const driver = driverDataQuery.data?.data?.MRData?.DriverTable?.Drivers[0];
    
        if (!driver.driverId) {
          return <h1>No data found!</h1>;
        }
        
        driverId = driver.driverId
        permanentNumber = driver.permanentNumber
        firstName = driver.givenName
        lastName = driver.familyName
        dob = driver.dateOfBirth
        nationality = driver.nationality
    }

    return (
        <Box sx={{ padding: '1rem' }}>
            <Paper elevation={3} sx={{ padding: '1.5rem' }}>
                <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
                    Driver Profile
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">Driver ID:</Typography>
                        <Typography variant="body1">{driverId}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">Permanent Number:</Typography>
                        <Typography variant="body1">{permanentNumber}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">First Name:</Typography>
                        <Typography variant="body1">{firstName}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">Last Name:</Typography>
                        <Typography variant="body1">{lastName}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">Permanent Number:</Typography>
                        <Typography variant="body1">{permanentNumber}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">Nationality:</Typography>
                        <Typography variant="body1">{nationality}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">DOB:</Typography>
                        <Typography variant="body1">{dob}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default Details;

