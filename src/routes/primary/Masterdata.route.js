import Primary from './Primary.js';
import MasterdataController from '../../controllers/primary/Masterdata.controller.js';

class MasterdataRoute extends Primary {
  constructor(server) {
    super(server);

    this.endpointPrefix = this.endpointPrefix + '/masterdata';
    this.MasterdataController = new MasterdataController(this.server);

    this.routes();
  }

  routes() {
    // --- --- --- --- --- --- --- //


    // --- --- Get
    // --- Country
    this.API.get(this.endpointPrefix + '/country', (req, res) => this.MasterdataController.getCountry(req, res));


    // --- --- --- --- --- --- --- //
  }
}

export default MasterdataRoute;