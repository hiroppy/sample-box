// @flow

import React from 'react';
import { click } from './common';

type Props = {

};

function call() {
  console.log('web\'s button');
}

const Button = (props: Props) => (
  <button click={() => click(call)} />
);

export default Button;
