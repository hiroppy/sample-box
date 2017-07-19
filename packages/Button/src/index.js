import ios from './ios';
import web from './web';
import android from './android';

let Button;

switch(process.env.PLATFORM) {
  case 'ios':
    Button = ios;
    break;
  case 'android':
    Button = android;
    break;
  case 'web':
  default:
    Button = web;
}

export default Button;
