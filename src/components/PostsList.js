import React from "react";
import { Card, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchPostsAndUser } from "../actions";
import UserHeader from "./UserHeader";

class PostsList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUser();
  }

  render() {
    const posts = this.props.posts.map((post) => {
      return (
        <Card key={post.id}>
          <Card.Header>Post</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p> {post.title} </p>
              <footer className="blockquote-footer">
                <cite title="Source Title">
                  <UserHeader userId={post.userId} />
                </cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      );
    });
    if (this.props.posts.length !== 0) {
      // return <div>Posts Fetched : {this.props.posts.length}</div>;
      return <Container className="p-3">{posts}</Container>;
    }

    return "Loding!!!";
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps, { fetchPostsAndUser })(PostsList);
