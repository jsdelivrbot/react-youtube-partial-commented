import React from 'react';

const VideoListItem = ({video}) => {
	return (
		<li>
			<img src={video.snippet.thumbnails.default.url} />
		</li>
	);
};

export default VideoListItem;