import React, { Component } from 'react';
import Typist from 'react-typist';
import { ApiAiClient } from '../vendor/api-ai-javascript';

const client = new ApiAiClient({ accessToken: process.env.REACT_APP_CLIENT_ACCESS_TOKEN });

const Dots = () => (
  <div id="wave">
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
);

class Chat extends Component {

  state = {
    typing: false,
    user: '',
    bot: ''
  }

  componentDidMount() {
    // this.sendMessage('hello');
  }

  sendMessage = (message) => {
    this.setState({
      typing: true,
      user: message
    });

    client.textRequest(message)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  handleResponse = (response) => {
    setTimeout(() => {
      this.setState({
        typing: false,
        bot: response.result.fulfillment.speech
      });
    }, 1000);
  }

  handleError = (error) => {
    console.log('error', error);
  }

  render() {
    const { typing, bot } = this.state;

    return (
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container">

            <div className="columns is-vcentered">
              <div className="column is-half is-right">
                <p id="message" className="title">
                  {typing
                    ? <Dots />
                    : bot ? <Typist>{bot}</Typist> : 'Ask me anything.'}
                </p>
              </div>

              <div className="column">
                <form onSubmit={event => {
                  event.preventDefault();
                  const { message } = event.target.elements;
                  this.sendMessage(message.value);
                  event.target.reset();
                }}>
                  <input class="input-underlined"
                    name="message"
                    type="text"
                    placeholder="type something"
                    autoComplete="off"
                    required />
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Chat;

// const samples = [
//   'what do you do?',
//   'tell me about yourself',
//   'show me your portfolio'
// ];

// {/* <p>Can&#39;t think of anything to say?</p>
// <div className="buttons is-centered">
//   {samples.map((s, i) =>
//     <span key={i}
//       className="button is-small is-rounded is-primary-inverted"
//       onClick={() => this.sendMessage(s)}>
//       {s}
//     </span>)}
// </div> */}