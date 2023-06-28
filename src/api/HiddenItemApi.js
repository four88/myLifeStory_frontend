class HiddenItemApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.statusText}`);
  }
  // create chapter @PARAM: token, form detail
  async createHiddenItem(token, form) {
    return fetch(`${this._baseUrl}/hidden-item`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: form.name,
        img: form.img,
        desc: form.desc,
        owner: form.owner,
      }),
    }).then((res) => this._checkResponse(res));
  }

  async editItem(token, itemId, form) {
    return fetch(`${this._baseUrl}/hidden-item/${itemId}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: form.name,
        img: form.img,
        desc: form.desc,
      }),
    }).then((res) => this._checkResponse(res));
  }

  // get chapter @PARAMS userId, token
  async getUserHiddenItem(token, userId) {
    return fetch(`${this._baseUrl}/hidden-item/${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._checkResponse(res));
  }

  // delete hiddenItem
  async deleteItem(token, itemId) {
    return fetch(`${this._baseUrl}/hidden-item/${itemId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._checkResponse(res));
  }
}

const hiddenItemApi = new HiddenItemApi({
  baseUrl: `http://localhost:3000`,
  // baseUrl: `https://api.mylifestory.chickenkiller.com`,
  // baseUrl: `https://api-mylifestroy.onrender.com/`,
});

export default hiddenItemApi;
