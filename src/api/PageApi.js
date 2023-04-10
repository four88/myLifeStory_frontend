class PageApi {
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
  async createPage(token, form) {
    return fetch(`${this._baseUrl}/page`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        no: form.no,
        story: form.story,
        pageImg: form.pageImg,
        chapter: form.chapter,
      }),
    }).then((res) => this._checkResponse(res));
  }

  // get chapter @PARAMS userId, token
  async getUserPage(token, chapterId) {
    return fetch(`${this._baseUrl}/page/${chapterId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._checkResponse(res));
  }

  // delete page @PARAMS pageId, token
  async deletePage(token, pageId) {
    return fetch(`${this._baseUrl}/page/${pageId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._checkResponse(res));
  }

  // edit page @PARAM pageId, form and token
  async editPage(token, pageId, form) {
    return fetch(`${this._baseUrl}/page/${pageId}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        no: form.no,
        story: form.story,
        pageImg: form.pageImg,
      }),
    }).then((res) => this._checkResponse(res));
  }
}

const pageApi = new PageApi({
  // baseUrl: `http://104.196.253.173`,

  baseUrl: `https://api.mylifestory.chickenkiller.com`,
});

export default pageApi;
