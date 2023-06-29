import { useDispatch, useSelector } from "react-redux";
import { Typography } from '@mui/material';
import 'bootstrap-icons/font/bootstrap-icons.css';

function SpeedItem({ speed, username, author, created }) {
    const { currentUser } = useSelector((state) => state.users);
    let isAdmin = false;
    if (currentUser) {
        isAdmin = (currentUser.data.role === "admin");
    }

    useDispatch();
    const deleteTuitHandler = (id) => {
        //dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item border-danger">
        <div className="row">
          <div className="col-auto">
            <img
              width={50}
              className="float-end rounded-circle"
              src={require(`./f1.jpg`)}
              alt="prof pic"
            />
          </div>
          <div className="col-10">
            {isAdmin && (
              <div>
                <i
                  className="bi bi-x-lg float-end"
                  onClick={() => deleteTuitHandler(speed._id)}
                  style={{ cursor: "pointer", color: "red" }}
                ></i>
              </div>
            )}
            <div>
              <Typography variant="body1">
                <a href={`profile/${author}`}>
                  <span className="text-danger">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <b className="text-danger" style={{ textDecoration: "none"}}>@{username}</b>
                </a>{" "}
                <span style={{ color: "gray" }}>{created.split("T")[0]}</span>
              </Typography>
            </div>
            <div>
              <Typography variant="body2">
                <span style={{ color: "green" }}>
                  <i className="bi bi-speedometer2"></i>
                </span>
                <span className="ms-3">{speed}</span>
              </Typography>
            </div>
          </div>
        </div>
      </li>
      

    );
};
export default SpeedItem;
