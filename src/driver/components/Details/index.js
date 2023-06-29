import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { useDriverStats } from './api/get_driver_info';
import { useParams } from "react-router";
import { AccountCircle, DateRange, Flag, Fingerprint, Person, VpnKey } from '@mui/icons-material';

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
        <Paper elevation={3} sx={{ padding: '1.5rem', backgroundColor: '#EBB3A9', color: '#212121' }}>
            <Typography className="fw-bold" variant="h4" sx={{ marginBottom: '1rem' }}>
            Driver Profile
            </Typography>

            <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
                <Typography variant="subtitle1" className="fw-bold">
                <Fingerprint /> Driver ID:
                </Typography>
                <Typography variant="body1">{driverId}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle1" className="fw-bold">
                <VpnKey /> Permanent Number:
                </Typography>
                <Typography variant="body1">{permanentNumber}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle1" className="fw-bold">
                <Person /> First Name:
                </Typography>
                <Typography variant="body1">{firstName}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle1" className="fw-bold">
                <Person /> Last Name:
                </Typography>
                <Typography variant="body1">{lastName}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle1" className="fw-bold">
                <Flag /> Nationality:
                </Typography>
                <Typography variant="body1">{nationality}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle1" className="fw-bold">
                <DateRange /> DOB:
                </Typography>
                <Typography variant="body1">{dob}</Typography>
            </Grid>
            </Grid>
        </Paper>
        </Box>

    );
}

export default Details;

