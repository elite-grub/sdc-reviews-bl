import React from 'react';
import ReviewsList from './ReviewsList.jsx';


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    const API_URL = 'http://ec2-54-183-114-6.us-west-1.compute.amazonaws.com/api/reviews/1';

    fetch(API_URL)
      .then(res => res.json())
      .then(myJson => {
        this.setState({
          isLoaded: true,
          data: myJson,
        });
      });
  }

  render() {
    let { isLoaded, data } = this.state;

    if (!isLoaded) {
      return (
        <div>
          Loading..
        </div>
      )
    }
    return (
      <div>
        <ReviewsList
          reviews={data}
        />
      </div>
    );
  };
}

export default Reviews;