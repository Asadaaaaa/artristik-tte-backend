import ResponsePreset from '../../helpers/ResponsePreset.helper.js';
import MasterdataService from '../../services/primary/Masterdata.service.js';

class MasterdataController {
  constructor(server) {
    this.server = server;

    this.ResponsePreset = new ResponsePreset();
    this.MasterdataService = new MasterdataService(this.server);
  }

  async getCountry(req, res) {
    const getCountrySrv = await this.MasterdataService.getCountry();
    return res.status(200).json(this.ResponsePreset.resOK('OK', getCountrySrv));
  }
}

export default MasterdataController;