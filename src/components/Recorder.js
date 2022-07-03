import { ReactMediaRecorder } from "react-media-recorder";

const Recorder = () => {
  // const initialState = JSON.parse(localStorage.getItem(' ')) || [{ }];

  // const handleSave = async (mediaBlobUrl) => {
  //   const audioBlob = await fetch(mediaBlobUrl).then((r) => r.blob());
  //   const audioFile = new File([audioBlob], 'voice.wav', { type: 'audio/wav' });
  //   const formData = new FormData(); // preparing to send to the server

  //   formData.append('file', audioFile);  // preparing to send to the server

  //   onSaveAudio(formData); // sending to the server
  // };

  return (
    <div>
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div className="flex flex-col text-center">
            <p>{status}</p>
            <div className="flex justify-between">
              <button onClick={startRecording}>Start Recording</button>
              <button onClick={stopRecording}>Stop Recording</button>
            </div>
            <video src={mediaBlobUrl} controls />
          </div>
        )}
      />
    </div>
  );
};

export default Recorder;
