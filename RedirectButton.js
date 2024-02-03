import React from 'react';

class RedirectButton extends React.Component {
  handleRedirect = () => {
    // Redirect to the HTML page
    <a href = 'E:\YUSUF-SK-(SLYR)-BATCH-3\project.html'>HTML</a>
  };

  render() {
    return (
      <div>
        <button onClick={this.handleRedirect}>Go to HTML Page</button>
      </div>
    );
  }
}

export default RedirectButton;
