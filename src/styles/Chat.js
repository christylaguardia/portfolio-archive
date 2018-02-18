import React from 'react';

class Chat extends React.Component {

  sendMessage = () => {
    const client = new ApiAi.ApiAiClient({ accessToken: 'YOUR_ACCESS_TOKEN' });
    const promise = client.textRequest(longTextRequest);

    promise
      .then(handleResponse)
      .catch(handleError);

    function handleResponse(serverResponse) {
      console.log(serverResponse);
    }
    function handleError(serverError) {
      console.log(serverError);
    }
  }

  render() {
    return (
      <div>
        <p>messages go here</p>
      </div>
    )
  }
}