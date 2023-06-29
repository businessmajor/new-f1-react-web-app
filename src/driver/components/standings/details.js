import React, { useEffect } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { useDriverStats } from './api/get_driver_info';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { AccountCircle, DateRange, Flag, Fingerprint, Person, VpnKey } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { useState } from "react";
import { updateUserThunk } from '../../../users/users-thunks';


const Card = ({ input, name, currentUser }) => {

    const [profile, setProfile] = useState(currentUser);

    const [followText, setFollowText] = useState('Follow');

    const dispatch = useDispatch();

    const navigate = useNavigate()
    useEffect(() => {
        if (currentUser && currentUser.data.drivers.includes(name)) {
            setFollowText("Unfollow")
        }
    }, [currentUser, name]);

    let driverId = "driver Id"
    let firstName = "firstName"
    let lastName = "lastName"
    let permanentNumber = "permanentNumber"
    let nationality = "nationality"
    let dob = "dob"
    let driver;

    driverId = input.driverId
    permanentNumber = input.permanentNumber
    firstName = input.givenName
    lastName = input.familyName
    dob = input.dateOfBirth
    nationality = input.nationality

    function handleFollow() {
        if (!currentUser) {
            navigate(`/driver/login`);
        }
        if (followText === "Follow") {
            setProfile(currentUser.data)
            //const newdDrivers = profile.drivers.map(driver => driver)
            const drivers = [...profile.data.drivers, name]
            let user = profile.data;
            const newVariable = { ...user, propertyToModify: true }
            newVariable.drivers = [...drivers]



            const fetchProfile = async () => {
                try {
                    await dispatch(updateUserThunk(newVariable));
                    setFollowText("Unfollow")
                } catch (error) {
                    console.error(error);
                    navigate("/driver/login");
                }
            };

            fetchProfile();
        } else {
            const drivers = profile.data.drivers.filter((driver) => (driver != name))
            let user = profile.data;
            const newVariable = { ...user, propertyToModify: true }
            newVariable.drivers = [...drivers]

            const fetchProfile = async () => {
                try {
                    await dispatch(updateUserThunk(newVariable));
                    setFollowText("Unfollow")
                } catch (error) {
                    console.error(error);
                    navigate("/driver/login");
                }
            };

            fetchProfile();
        }

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
                    <Grid>
                        <button onClick={handleFollow} className="btn btn-danger fw-bold mt-5 mb-3" style={{ fontFamily: "Helvetica" }}>
                            {followText}
                        </button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>

    );
};

function Details() {
    const { currentUser, setUser } = useSelector((state) => state.users);
    const { name } = useParams();

    const driverDataQuery = useDriverStats(name);

    if (driverDataQuery.isSuccess) {
        const driver = driverDataQuery.data?.data?.MRData?.DriverTable?.Drivers[0];

        if (!driver.driverId) {
            return <h1>No data found!</h1>;
        }

        return (
            <Card input={driver} name={name} currentUser={currentUser}
            />
        );
    }
}

export default Details;

