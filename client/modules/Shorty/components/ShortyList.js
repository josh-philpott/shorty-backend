import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import ShortyListItem from './ShortyListItem/ShortyListItem';

function ShortyList(props) {
  return (
    <div className="listView">
      {
        props.shortys.map(shorty => (
          <ShortyListItem
            shorty={shorty}
            key={shorty.cuid}
          />
        ))
      }
    </div>
  );
}

/*ShortyList.propTypes = {
  shortys: PropTypes.arrayOf(PropTypes.shape({
    cuid: PropTypes.string.isRequired,
    shortUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    dateAdded: PropTypes.string.isRequired,
  })).isRequired,
};*/

export default ShortyList;
