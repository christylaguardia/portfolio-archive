import React, { Component } from 'react';
import { ApiAiClient } from '../vendor/api-ai-javascript';

const client = new ApiAiClient({ accessToken: process.env.REACT_APP_CLIENT_ACCESS_TOKEN });

class Chat extends Component {

  state = {
    typing: false,
    user: '',
    bot: ''
  }

  componentDidMount() {
    // this.sendInitialMessage();
  }

  sendInitialMessage = () => {
    console.log('sendInitialMessage');
    this.sendMessage('hello');
    // client.textRequest('Hello!')
    //   .then(response => this.handleResponse(response))
    //   .catch(error => console.log(error));
  }

  sendMessage = (message) => {
    console.log('message', message);

    this.setState({
      typing: true,
      user: message
    });

    client.textRequest(message)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  handleResponse = (response) => {
    console.log('response', response);
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
    const samples = [
      'what do you do?',
      'tell me about yourself',
      'show me your portfolio'
    ];

    const { typing, user, bot } = this.state;

    return (

      <div className="columns is-centered">
        <div className="column is-half is-narrow">

          <section className="section">

            {user !== '' && <p>
              <span className="tag is-medium is-primary">
                {user}
              </span>
            </p>}

            {bot !== '' && <p>
              <span className="tag is-medium is-info">
                {bot}
              </span>
            </p>}
              
              {typing && <p><span className="tag is-medium is-info">...</span></p>}
            </section>

            <section className="section">
              <form onSubmit={event => {
                  event.preventDefault();
                  const { message } = event.target.elements;
                  this.sendMessage(message.value);
                  event.target.reset();
              }}>
                <div className="control">
                <input className="input" name="message" type="text" placeholder="Ask me anything." autoComplete="off" required/>
                </div>
              </form>
            </section>

            <section className="section">
              <p>Can't think of anything to say?</p>
              <div className="buttons is-centered">
                {samples.map((s, i) =>
                  <span className="button is-small is-rounded is-primary-inverted" onClick={() => this.sendMessage(s)}>{s}</span> )}
              </div>
            </section>

        </div>
      </div>
    )
  }
}

export default Chat;