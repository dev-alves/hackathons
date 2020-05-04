class SessionRedirect {
  async redirect(req, res, next) {
    res.redirect('/users');
  }
}

export default new SessionRedirect();
