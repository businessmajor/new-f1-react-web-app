import React, { useState, useEffect } from "react";
import * as speedsService from "../speeds-service";
import { AiOutlinePicture } from 'react-icons/ai';
import { HiOutlineGift } from 'react-icons/hi';
import { BsEmojiSmile } from 'react-icons/bs';
import { TiCalendar } from 'react-icons/ti';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { createSpeedThunk} from  '../speeds-thunks';
import { useSelector, useDispatch } from "react-redux";
//import { Avatar } from 'mui';

function WhatsHappening() {
    const { currentUser } = useSelector((state) => state.users);
    const [speed, setSpeed] = useState("");
    const [allSpeeds, setAllSpeeds] = useState([]);
    const [speedInput, setSpeedInput] = useState('');
    const dispatch = useDispatch();
    const speedClickHandler = () => {
        const newSpeed = {
            topic: "f1",
            title: "f1",
            speed: speedInput,
            username: "alice"
        }
        dispatch(createSpeedThunk(newSpeed, "64952694155b190206608300"));
        setSpeedInput("");
    }

    useEffect(() => {
        const fetchAllSpeeds = async () => {
            try {
                const speeds = await speedsService.findAllSpeeds();
                setAllSpeeds(speeds);
                setSpeedInput("");
            } catch (error) {
                console.error(error);
            }
        };
        fetchAllSpeeds();
    }, []);

    const handleSpeed = async () => {
        const newSpeed = {
            topic: "f1",
            title: "f1",
            speed: speed,
            username: "alice"
        }
        try {
            await speedsService.createSpeed(newSpeed, currentUser._id)//{ speed: speed });
            setSpeed("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="row" style={{ fontFamily: "Helvetica" }}>
            <div className="col-auto">
                <img src={require(`./businessmajor.jpeg`)} width={60} alt="Business Major" className="float-end rounded-circle" />
            </div>
            <div className="col-10">
                <textarea
                    value={speed}
                    placeholder="What's happening?"
                    className="form-control border-1 border-danger"
                    onChange={(e) => setSpeed(e.target.value)}
                ></textarea>
                <div>
                    <button
                        className="rounded-pill bg-danger border-0 btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={handleSpeed}>
                        Speed!
                    </button>
                    <div className="text-primary fs-2">
                        <AiOutlinePicture className="me-3 text-danger" />
                        <HiOutlineGift className="me-3 text-danger" />
                        <BsEmojiSmile className="me-3 text-danger" />
                        <TiCalendar className="me-3 text-danger" />
                        <HiOutlineLocationMarker className="me-3 text-danger" />
                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr className="text-danger" style={{ borderStyle: "dashed" }}/>
            </div>
        </div>
    );
}

export default WhatsHappening;
