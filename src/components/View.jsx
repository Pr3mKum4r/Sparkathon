import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";

const VideoPlayer = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3100/getvideotest'); // Replace with your API endpoint
                const data = response.data;

                setMessage(data.message);
                setVideoUrl(data.youtube_result.video_id);
                console.log(data.youtube_result);
                console.log(data);
            } catch (error) {
                console.error('Error fetching the video data:', error);
            }
        };

        fetchVideoData();
    }, []);

    const YoutubeEmbed = ({ videoId }) => (
        <div className="video-responsive w-full px-5 h-[40vh] md:h-[70vh] mb-10">
            <iframe
                width='100%'
                height='100%'
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );

    YoutubeEmbed.propTypes = {
        videoId: PropTypes.string.isRequired,
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
             <h1 className="text-5xl text-purple-700 font-bold mb-10">Ad Created Successfully</h1>
            {videoUrl && (
                <div className="w-full max-w-2xl">
                    <YoutubeEmbed videoId={'pSGVb60-BSw?si=iHqc3oZNDYKUyuuu'} />
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;