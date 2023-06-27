//import TuitStats from "./tuit-stats";
//import {deleteTuitThunk} from "../../services/tuits-thunks";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap-icons/font/bootstrap-icons.css';

function SpeedItem({speed, username, author, created}) {
    const { currentUser } = useSelector((state) => state.users);
    const isAdmin = (currentUser.data.role == "admin");
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        //dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    {//<img width={50} className="float-end rounded-circle" src={`${speed.image}`} />
                    }
                </div>
                <div className="col-10">
                    {isAdmin &&
                    <div><i className="bi bi-x float-end"
                        onClick={() => deleteTuitHandler(speed._id)}></i>
                    </div>
                    }
                    <div>
                    <a href={`profile/${author}`}><b>{username}</b></a> {created}
                    </div>


                    <div>{speed} </div>

                </div>
            </div>
        </li>
    );
};
export default SpeedItem;