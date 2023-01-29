import React from 'react'
import { Button } from "@material-ui/core";
import { useState } from 'react';
import VideoCall from '../../agora/VideoCall';
import './LiveScreen.css'
const LiveScreen = () => {
    const [inCall, setInCall] = useState(false);
    return (
        <div className="liveScreen">
            <div className="screen">
                {inCall ? (
                    <VideoCall setInCall={setInCall} />
                ) : (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setInCall(true)}
                    >
                        Join Call
                    </Button>
                )}
            </div>
        </div>
    )
}

export default LiveScreen