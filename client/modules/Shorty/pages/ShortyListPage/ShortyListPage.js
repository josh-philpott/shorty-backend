import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Components
import PostList from '../../../Post/components/PostList';
import PostCreateWidget from '../../../Post/components/PostCreateWidget/PostCreateWidget';
import ShortyList from '../../components/ShortyList';


// Import Actions
import { fetchShortys } from '../../ShortyActions';
import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
import { getShowAddPost } from '../../../App/AppReducer';
import { getPosts } from '../../../Post/PostReducer';

class ShortyListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchShortys());
  }

  handleDeletePost = post => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deletePostRequest(post));
    }
  };

  handleAddPost = (name, title, content) => {
    this.props.dispatch(toggleAddPost());
    this.props.dispatch(addPostRequest({ name, title, content }));
  };

  render() {
    return (
      <div>
        List The Shortys
        {/* <ShortyList shortys={this.props.shortys} /> */}

      </div>
    );
  }
}

// Actions required to provide data for this component to render in server side.
ShortyListPage.need = [() => { return fetchShortys(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    posts: getPosts(state),
  };
}

ShortyListPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  showAddPost: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

ShortyListPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(ShortyListPage);
