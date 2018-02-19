import React, { Component } from 'react';
import { ApiAiClient } from 'api-ai-javascript';

const client = new ApiAiClient({ accessToken: process.env.REACT_APP_CLIENT_ACCESS_TOKEN });

class Chat extends Component {

  state = {
    typing: false,
    messages: []
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
      messages: [
        ...this.state.messages,
        {
          source: 'user',
          speech: message
        }
      ]
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
        messages: [
          ...this.state.messages,
          {
            sessionId: response.sessionId,
            timestamp: response.timestamp,
            source: response.result.source,
            speech: response.result.fulfillment.speech,
          }
        ]
      });
    }, 1000);
  }

  handleError = (error) => {
    console.log('error', error);
  }

  render() {
    console.log('messages', this.state.messages);
    return (
      <section className="section">
        <div className="container">

          {this.state.messages.length > 0 &&
            this.state.messages.map((msg, i) => {
              return (
                <p key={i}>
                  <span className={`tag is-medium ${msg.source === 'user' ? 'is-primary  is-right' : 'is-info is-left'}`}>
                    {msg.speech}
                  </span>
                </p>
              );
            })}
            
            {this.state.typing && <p><span className="tag is-medium is-info">...</span></p>}

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
            
        </div>
      </section>
    )
  }
}

export default Chat;