import Welcome from '../model/Welcome';
import Loader from '../model/Loader';

export default {
  model: { Welcome, Loader },
  table: {
    say: {
      Welcome: 'say',
    },
  },
}
