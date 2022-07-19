import {atom} from 'recoil';

const currentIDState = atom({
  key: 'currentIDState',
  default: -1,
});

export default currentIDState;
