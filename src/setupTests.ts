import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

enzyme.configure({ adapter: new Adapter() });
