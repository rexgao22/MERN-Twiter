import React, { Component } from "react";
import TweetBox from './tweet_box'

class TweetCompose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      newTweet: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let tweet = {
      text: this.state.text,
    };

    this.props.composeTweet(tweet);
    this.setState({ text: "" });
  }

  update() {
    return (e) =>
      this.setState({
        text: e.currentTarget.value,
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="textarea"
              value={this.state.text}
              onChange={this.update()}
              placeholder="Write our tweet..."
            />
          </div>
          <input type="submit" value="Submit"/>
        </form>
        <br />
        <TweetBox text={this.state.newTweet} />
      </div>
    );
  }
}

export default TweetCompose;
