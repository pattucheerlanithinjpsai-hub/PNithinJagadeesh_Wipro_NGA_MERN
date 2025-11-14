import React, { Component } from "react";

class AuthorInfo extends Component {
  componentDidMount() {
    console.log("AuthorInfo Mounted Author data loaded");
  }

  render() {
    const { bio, topBooks } = this.props.author;

    return (
      <div className="card p-3 mt-3">
        <h4>About the Author</h4>
        <p>{bio}</p>

        <h5>Top Books</h5>
        <ul>
          {topBooks.map((book, idx) => (
            <li key={idx}>{book}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AuthorInfo;
