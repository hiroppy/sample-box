// @flow

import { button } from 'react-native';
import { click } from './common';

type Props = {
  onClick: () => {};
};

function call() {
  console.log('android\'s button');
}

const Button = (props: Props) => (
  <button onPress={() => props.onClick(click(call))} />
);

export default Button;
