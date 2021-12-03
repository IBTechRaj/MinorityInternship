import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GETCOLLECTIONS } from '../redux/actions';
import Collection from '../components/collection';

const CollectionList = ({ getCollections, collections }) => {
  useEffect(() => {
    getCollections();
  }, [getCollections]);
  return collections.length === 0 ? <h1>Loading!!!!</h1> : (
    <>
      <h1>Here we can see all our collections</h1>
      <div className="flex-row">
        {collections ? collections[0].collections.map((collection) => (
          <Collection key={collection.created_date.toString()} collection={collection} />
        )) : 'no collection'}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  collections: state.collection.collections,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  getCollections: () => dispatch(GETCOLLECTIONS()),
});

CollectionList.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.any).isRequired,
  // collections: PropTypes.shape({
  // length: PropTypes.number.isRequired,
  // }).isRequired,
  getCollections: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionList);
