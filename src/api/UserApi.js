class UserApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.statusText}`);
  }
  // admin login
  async loginUser(email, password) {
    return fetch(`${this._baseUrl}/login-user`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => this._checkResponse(res));
  }
}

const userApi = new UserApi({
  baseUrl: `http://localhost:3000`,
  // baseUrl: `https://api.mylifestory.chickenkiller.com`,

  // baseUrl: `https://api-mylifestroy.onrender.com`,
});

export default userApi;
