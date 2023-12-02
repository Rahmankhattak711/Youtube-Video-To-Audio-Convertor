import React, { useState } from "react";
import axios from "axios";

const YoutubeDownloader = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const downloadVideo = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/youtube/download",
        { url }
      );
      setResult(response.data);
    } catch (error) {
      setResult(
        "Failed to download the video. Please check the URL and try again."
      );
    }
  };

  return (
    <div className="bg-black h-[100vh] w-[100%] flex justify-center items-center flex-col text-white">
      <div className=" w-[50%] rounded-md h-[50%] bg-gray-800 text-center">
        <h1 className="text-3xl font-bold mt-4 mb-2">
          YouTube <span className="text-yellow-500">Video</span> to{" "}
          <span className="text-yellow-500">Audio</span> <br /> Downloader
        </h1>
        <label htmlFor="urlInput" className="text-lg">
          YouTube Video URL Here 🤙
        </label>
        <br />
        <input
          type="text"
          id="urlInput"
          className="w-[400px] h-10 rounded-sm pl-2 border-none outline-none bg-gray-600"
          placeholder="Enter YouTube URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <br />
        <button
          onClick={downloadVideo}
          className="h-10 mt-4 w-60 rounded-sm bg-gray-600"
        >
          Download Now
        </button>
        <br />
        <div className="flex justify-center mt-4">
          <div className="bg-gray-600 text-lg p-2 w-[400px] rounded-sm">
            {result ? result : "No Download Yet"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeDownloader;
