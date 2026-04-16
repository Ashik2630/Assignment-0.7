/* eslint-disable react-refresh/only-export-components */
import React, { createContext, use, useState } from "react";
import { toast } from "react-toastify";

export const FriendContext = createContext();

const friendPromise = fetch('/friends.json').then(res => res.json());

const FriendProvider = ({ children }) => {
  const [call, setCall] = useState([]);
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);

  const friends = use(friendPromise);

//   Call-handlerButton
  const handleCallButton = (currentCall) => {
    // Call exist
    const isExistCall = call.find((c) => c.id === currentCall.id);
    if (isExistCall) {
     setCall([...call, currentCall]);
      toast.success(`${currentCall.name} is called`)
    } else {
      setCall([...call, currentCall]);
      toast.success(`${currentCall.name} is called`)
    }
  };
//   Text-handlerButton
  const handleTextButton = (currentText) => {
    // Text exist
    const isExistText = text.find((t) => t.id === currentText.id);
    if (isExistText) {
      setText([...text, currentText]);
      toast.success(`${currentText.name} is Text`)
    } else {
      setText([...text, currentText]);
      toast.success(`${currentText.name} is Text`)
    }
  };
//   Video-handlerButton
  const handleVideoButton = (currentVideo) => {
    // video exist
    const isExistText = video.find((v) => v.id === currentVideo.id);
    if (isExistText) {
      setVideo([...video, currentVideo]);
      toast.success(`${currentVideo.name} is Video Call`)
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
    handleVideoButton,
    friends
  };
  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
