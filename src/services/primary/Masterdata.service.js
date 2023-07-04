import MasterdataCountryModel from "../../models/MasterdataCountry.model.js";

class MasterdataService {
  constructor(server) {
    this.server = server;

    this.MasterdataCountryModel = new MasterdataCountryModel(this.server).table;
  }

  async getCountry() {
    return await this.MasterdataCountryModel.findAll({
      attributes: [ 'uuid',  'name', 'code', 'phone_code']
    });
  }
}

export default MasterdataService;