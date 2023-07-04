import MasterdataRoute from './Masterdata.route.js';
import AuthRoute from './Auth.route.js';

class PrimaryHandler {
  constructor(server) {
    new MasterdataRoute(server);
    new AuthRoute(server);
  }
}

export default PrimaryHandler;