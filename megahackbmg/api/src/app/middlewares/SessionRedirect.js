class SessionRedirect {
  async storeValidation(req, res, next) {
    res.redirect('/users');
  }
}

export default new SessionRedirect();
