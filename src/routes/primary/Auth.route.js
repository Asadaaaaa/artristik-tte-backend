import Primary from './Primary.js';
import AuthController from '../../controllers/primary/Auth.controller.js';

class AuthRoute extends Primary {
  constructor(server) {
    super(server);

    this.endpointPrefix = this.endpointPrefix + '/auth';
    this.AuthController = new AuthController(this.server);

    this.routes();
  }

  routes() {
    // --- --- --- --- --- --- --- //


    // --- --- Post
    // --- Registration
    this.API.post(this.endpointPrefix + '/register', (req, res) => this.AuthController.register(req, res));
    this.API.post(this.endpointPrefix + '/valid-code', this.AuthorizationMiddleware.check(), (req, res) => this.AuthController.validationVerificationCode(req, res));
    this.API.post(this.endpointPrefix + '/resend-code', this.AuthorizationMiddleware.check(), (req, res) => this.AuthController.resendVerificationCode(req, res));

    // --- Login
    this.API.post(this.endpointPrefix + '/login', (req, res) => this.AuthController.login(req, res));

    // --- Forgot Password
    this.API.post(this.endpointPrefix + '/req-forgot-password', (req, res) => this.AuthController.reqForgetPassword(req, res));
    this.API.post(this.endpointPrefix + '/new-forgot-password', (req, res) => this.AuthController.newForgetPassword(req, res));
    
    
    // --- --- --- --- --- --- --- //


    // --- --- Get
    // --- Authorization
    this.API.get(this.endpointPrefix + '/refresh-token', this.AuthorizationMiddleware.check(), (req, res) => this.AuthController.refreshToken(req, res));
    this.API.get(this.endpointPrefix + '/token-check', this.AuthorizationMiddleware.check(), (req, res) => this.AuthController.tokenCheck(req, res));


    // --- --- --- --- --- --- --- //
  }
}

export default AuthRoute;