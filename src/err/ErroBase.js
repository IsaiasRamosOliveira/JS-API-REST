class Errobase extends Error {
  constructor (
    message = 'Erro interno do servidor',
    status = 500
  ) {
    super();
    this.message = message;
    this.status = status;
  }

  sendResponse (res) {
    res.status(this.status).send({
      massege: this.message,
      status: this.status
    });
  }
}

export default Errobase;
