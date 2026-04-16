/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [call, setCall] = useState([]);
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);

//   Call-handlerButton
  const handleCallButton = (currentCall) => {

    // Text exist error
    const existsInText = text.find((c) => c.id === currentCall.id);
    if(existsInText){
        toast.error('The Text is already exist in list');
        return;
    }
    // Video exist error
    const existsInVideo = video.find((c) => c.id === currentCall.id);
    if(existsInVideo){
        toast.error('The Text is already exist in list');
        return;
    }

    // Call exist
    const isExistCall = call.find((c) => c.id === currentCall.id);
    if (isExistCall) {
      toast.error("The Call is already exist");
    } else {
      setCall([...call, currentCall]);
      toast.success(`${currentCall.name} is called`)
    }
  };
//   Text-handlerButton
  const handleTextButton = (currentText) => {

    // text exist error
    const existsInCall = call.find((c) => c.id === currentText.id);
    if(existsInCall){
        toast.error('The Call is already exist in list');
        return;
    }
    // text exist error
    const existsInVideo = video.find((c) => c.id === currentText.id);
    if(existsInVideo){
        toast.error('The Call is already exist in list');
        return;
    }

    // Text exist
    const isExistText = text.find((t) => t.id === currentText.id);
    if (isExistText) {
      toast.error("The Call is already exist");
    } else {
      setText([...text, currentText]);
      toast.success(`${currentText.name} is Text`)
    }
  };
//   Video-handlerButton
  const handleVideoButton = (currentVideo) => {

    // call exist error
    const existsInCall = call.find((c) => c.id === currentVideo.id);
    if(existsInCall){
        toast.error('The Call is already exist in list');
        return;
    }

    // text exist error
     const existsInText = text.find((c) => c.id === currentVideo.id);
    if(existsInText){
        toast.error('The Text is already exist in list');
        return;
    }

    // video exist
    const isExistText = video.find((v) => v.id === currentVideo.id);
    if (isExistText) {
      toast.error("The Video Call is already exist");
    } else {
      setVideo([...video, currentVideo]);
      toast.success(`${currentVideo.name} is Video Call`)
    }
  };

  const data = {
    call,
    setCall,
    handleCallButton,
    text,
    setText,
    handleTextButton,
    video,
    setVideo,
    handleVideoButton
  };
  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
