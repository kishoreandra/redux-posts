import axios from "axios";

export const fetchPostsAndUser = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const posts = getState().posts;
  const userIds = [...new Set(posts.map((post) => post.userId))];
  userIds.forEach((id) => {
    dispatch(fetchUser(id));
  });
};

export const fetchPosts = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};

export const fetchUser = function (id) {
  return async function (dispatch) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({
      type: "FETCH_USER",
      payload: response.data,
    });
  };
};

// export const fetchUser = (id) => async (dispatch) => {
//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/users/${id}`
//   );
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });
// };
