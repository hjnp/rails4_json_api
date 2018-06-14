class UsersApi {
  static requestHeaders() {
    return { AUTHORIZATION: `Bearer ${sessionStorage.jwt}` };
  }

  static withHeaders(methodHttp = "GET") {
    return {
      method: methodHttp,
      headers: this.requestHeaders()
    }
  }

  static getAllusers() {
    const request = new Request(`${process.env.API_HOST}/api/v1/cats`, this.withHeaders("GET"));
    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
}

export default UsersApi;
