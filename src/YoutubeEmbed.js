import React from "react";
import PropTypes from "prop-types";
import '../src/YoutubeEmbed.css'

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?controls=0;`}
      frameBorder="0"
      allow="accelerometer; autoplay=1;  modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};



export default YoutubeEmbed;
