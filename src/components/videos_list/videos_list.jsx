import React from 'react';
import VideosItem from '../videos_item/videos_item';

const VideosList = (props) => (
	<ul>
		{props.videos.map(video => (
		<VideosItem key={video.id} video={video} />
		))}
	</ul>
)

export default VideosList;
