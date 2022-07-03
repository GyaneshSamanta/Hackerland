import { ReactMediaRecorder } from "react-media-recorder";

const Recorder = () => {

  return (
    <div>
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div className="flex flex-col gap-5 text-center">
            <p>{status}</p>
            <video src={mediaBlobUrl} controls />
            <div className="flex justify-between">
              <button onClick={startRecording}>Start Recording 🎙️</button>
              <button onClick={stopRecording}>Stop Recording 🛑</button>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Recorder;
