import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from 'transcend-react';
/* eslint-disable import/no-unresolved */
require('./stylesheets/index');
ReactDOM.render((
  <Checkbox defaultChecked label="Hello, world!" />
), window.document.getElementById('app'));