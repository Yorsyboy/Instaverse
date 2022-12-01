import * as api from '../../api';

/* eslint-disable import/prefer-default-export */
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL_POSTS', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
