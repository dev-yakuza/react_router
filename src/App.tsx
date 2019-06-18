import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Router from './Router';

interface Props {}
const App = ({  }: Props) => {
  return <Router />;
};

ReactDOM.render(<App />, document.getElementById('app'));
