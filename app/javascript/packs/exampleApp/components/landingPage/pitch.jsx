import React from 'react';

import {Api} from '../../middleware/api';

class Pitch extends React.Component {
  render() {
    return(
      <div>
        <h1>{Api.helloWorld()}</h1>
      </div>
    )
  }
}
export default Pitch