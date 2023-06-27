//import TuitStats from "./tuit-stats";
//import {deleteTuitThunk} from "../../services/tuits-thunks";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap-icons/font/bootstrap-icons.css';

function SpeedItem({ speed, username, author, created }) {
    const { currentUser } = useSelector((state) => state.users);
    let isAdmin = false;
    if (currentUser) {
        isAdmin = (currentUser.data.role === "admin");
    }

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        //dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item">
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
                                style={{ cursor: "pointer" }}
                            ></i>
                        </div>
                    )}
                    <div>
                        <a href={`profile/${author}`}>
                            <b>@{username}</b>
                        </a>{" "}
                        {created}
                    </div>
                    <div>{speed}</div>
                </div>
            </div>
        </li>

    );
};
export default SpeedItem;