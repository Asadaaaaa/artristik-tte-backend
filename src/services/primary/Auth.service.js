import MasterdataCountryModel from "../../models/MasterdataCountry.model.js";

class AutService {
  constructor(server) {
    this.server = server;

    this.MasterdataCountryModel = new MasterdataCountryModel(this.server).table;
  }

  async register() {
    return true
  }
}

export default AutService;