import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    // Create a reference, attach to instance variable
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    // Destructuring
    this.setState({ spans });
  }

  render() {
    const { description, urls } = this.props.image;

    const thisStyle = {
      gridRowEnd: `span ${this.state.spans}`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };

    return (
      <div style={thisStyle}>
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
