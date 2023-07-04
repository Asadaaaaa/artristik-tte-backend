import ResponsePreset from '../../helpers/ResponsePreset.helper.js';
import AuthValidator from '../../validators/primary/Auth.validator.js';
import AuthService from '../../services/primary/Auth.service.js';

// Library
import Ajv from 'ajv';

class AuthController {
  constructor(server) {
    this.server = server;

    this.ResponsePreset = new ResponsePreset();
    this.Ajv = new Ajv();
    this.AuthValidator = new AuthValidator();
    this.AuthService = new AuthService(this.server);
  }

  async register(req, res) {
    const schemeValidate = this.Ajv.compile(this.AuthValidator.register);
    
    if(!schemeValidate(req.body)) return res.status(400).json(this.ResponsePreset.resErr(
      400,
      schemeValidate.errors[0].message,
      'validator',
      schemeValidate.errors[0]
    ));
    
    const resRegister = await this.AuthService.register(req.body);
    
    return res.status(200).json(this.ResponsePreset.resOK('OK', { token: resRegister }));
  }
}

export default AuthController;