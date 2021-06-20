import React from "react";
import { connect } from "react-redux";

const UserHeader = ({ user }) => {
  if (!user) return null;
  return <div>{user.username}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((u) => u.id === ownProps.userId),
  };
};
export default connect(mapStateToProps)(UserHeader);
