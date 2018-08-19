import React from 'react';
import PropTypes from 'prop-types';

function ShortyListItem(props) {
  return (
    <div>
      <p>{props.shorty.shortUrl}</p>
      <p>{props.shorty.url}</p>
      <p>{props.shorty.cuid}</p>
      <p>{props.shorty.dateAdded}</p>
    </div>
  );
}

ShortyListItem.propTypes = {
  shorty: PropTypes.shape({
    cuid: PropTypes.string.isRequired,
    shortUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    dateAdded: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShortyListItem;
