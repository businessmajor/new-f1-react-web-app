// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { profileThunk, logoutThunk, updateUserThunk, getIdProfileThunk } from './users-thunks';
// import { useNavigate, matchPath, useParams } from 'react-router';
// import * as speedsService from '../driver/speeds-service';



function ProfileScreen() {
  // const { uid } = useParams();
  // const { currentUser } = useSelector((state) => state.users);
  // const [profile, setProfile] = useState(currentUser);
  // const [mySpeeds, setMySpeeds] = useState([]);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // let isCurrUser = true;
  // if (!currentUser || (uid && currentUser.data._id !== uid)) {
  //   isCurrUser = false;
  // }

  // const handleLogout = () => {
  //   dispatch(logoutThunk());
  //   navigate('../login');
  // };

  // const handleUpdate = async () => {
  //   try {
  //     await dispatch(updateUserThunk(profile));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       if (isCurrUser) {
  //         const { payload } = await dispatch(profileThunk());
  //         setProfile(payload.data);
  //       } else {
  //         const { payload } = await dispatch(getIdProfileThunk(uid));
  //         setProfile(payload.data);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       navigate('/driver/login');
  //     }
  //   };

  //   // const fetchMySpeeds = async () => {
  //   //   try {
  //   //     const tuits = await speedsService.findMySpeeds();
  //   //     setMySpeeds(tuits);
  //   //   } catch (error) {
  //   //     console.error(error);
  //   //   }
  //   // };

  //   fetchProfile();
  //   // if (isCurrUser) {
  //   //   fetchMySpeeds();
  //   // }
  // }, [dispatch]);

  // const favoriteTeam = profile.favoriteTeam || 'default';

  // return (
  //   <div>
  //     <h1 className="text-danger fw-bold" style={{ fontFamily: "Helvetica" }}>Profile</h1>
  //     {isCurrUser && (<div>
  //       {profile && (
  //         <>
  //           {/* <label className="text-danger" style={{ fontFamily: "Helvetica" }}>Speed ID</label> */}
  //           <input className="form-control mb-3 border-danger opacity-50 bg-danger text-white" value={profile._id ? profile._id : ''} readOnly />
  //           <label className="text-danger" style={{ fontFamily: "Helvetica" }}>Role</label>
  //           <input
  //             className="form-control mb-3 border-danger opacity-50 bg-danger text-white"
  //             value={profile.role ? profile.role : ''}
  //             readOnly
  //           />
  //           <label className="text-danger" style={{ fontFamily: "Helvetica" }}>Speed Username</label>
  //           <input className="form-control mb-3 border-danger opacity-50 bg-danger text-white" value={profile.username ? profile.username : ''} readOnly />
  //           <label className="text-danger" style={{ fontFamily: "Helvetica" }}>Password</label>
  //           <i class="bi bi-pencil text-danger ms-2"></i>
  //           <input
  //             className="form-control mb-3 border-danger"
  //             value={profile.password}
  //             type="password"
  //             onChange={(e) =>
  //               setProfile({ ...profile, password: e.target.value })
  //             }
  //           />
  //           <label className="text-danger" style={{ fontFamily: "Helvetica" }}>First Name</label>
  //           <i class="bi bi-pencil text-danger ms-2"></i>
  //           <input
  //             className="form-control mb-3 border-danger"
  //             value={profile.firstName}
  //             onChange={(e) =>
  //               setProfile({ ...profile, firstName: e.target.value })
  //             }
  //           />
  //           <label className="text-danger" style={{ fontFamily: "Helvetica" }}>Last Name</label>
  //           <i class="bi bi-pencil text-danger ms-2"></i>
  //           <input
  //             className="form-control mb-3 border-danger"
  //             value={profile.lastName}
  //             onChange={(e) =>
  //               setProfile({ ...profile, lastName: e.target.value })
  //             }
  //           />
  //           <label className="text-danger" style={{ fontFamily: "Helvetica" }}>Email</label>
  //           <i class="bi bi-pencil text-danger ms-2"></i>
  //           <input
  //             className="form-control mb-3 border-danger"
  //             value={profile.email}
  //             onChange={(e) =>
  //               setProfile({ ...profile, email: e.target.value })
  //             }
  //           />
  //           {/* <label className="text-danger" style={{fontFamily: "Helvetica"}}>Date of Birth</label>
  //         <i class="bi bi-pencil text-danger ms-2"></i>
  //         console.log(dob);
  //         <input
  //           type="date"
  //           className="form-control mb-3 border-danger"
  //           value={dob}
  //           onChange={(e) =>
  //             setProfile({ ...profile, dob: e.target.value })
  //           } */}
  //           {/* /> */}
  //           {/* <label className="text-danger" style={{fontFamily: "Helvetica"}}>Marrital Status</label>
  //         <input
  //           className="form-control mb-3 border-danger opacity-50 bg-danger text-white"
  //           value={`${profile.married ? "Married" : "Not Married"}`}
  //           readOnly
  //         /> */}
  //         </>
  //       )}
  //       <button onClick={handleLogout} className="btn btn-danger fw-bold mt-5 mb-3" style={{ fontFamily: "Helvetica" }}>
  //         Logout
  //       </button>
  //     </div>)}
  //     {!isCurrUser && (
  //       <div>
  //         <label className="text-danger" style={{ fontFamily: "Helvetica" }}>Speed Username</label>
  //         <input className="form-control mb-3 border-danger opacity-50 bg-danger text-white" value={profile.username} readOnly />

  //         <label className="text-danger" style={{ fontFamily: "Helvetica" }}>First Name</label>
  //         <input
  //           className="form-control mb-3 border-danger opacity-50 bg-danger text-white"
  //           value={profile.firstName}
  //           onChange={(e) =>
  //             setProfile({ ...profile, firstName: e.target.value })
  //           }
  //         />
  //         <label className="text-danger" style={{ fontFamily: "Helvetica" }}>Last Name</label>
  //         <input
  //           className="form-control mb-3 border-danger opacity-50 bg-danger text-white"
  //           value={profile.lastName}
  //           onChange={(e) =>
  //             setProfile({ ...profile, lastName: e.target.value })
  //           }
  //         />
  //         <label className="text-danger" style={{ fontFamily: "Helvetica" }}>Email</label>
  //         <input
  //           className="form-control mb-3 border-danger opacity-50 bg-danger text-white"
  //           value={profile.email}
  //           onChange={(e) =>
  //             setProfile({ ...profile, email: e.target.value })
  //           } />
  //       </div>
  //     )}
  //   </div>
  // );
}

export default ProfileScreen;
