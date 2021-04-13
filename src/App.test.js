import { shallow } from 'enzyme/build';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});