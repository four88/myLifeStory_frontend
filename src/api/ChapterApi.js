class ChapterApi {
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
  async createChapter(token, form) {
    return fetch(`${this._baseUrl}/chapter`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        no: form.no,
        name: form.name,
        thumbNail: form.img,
        owner: form.owner,
      }),
    }).then((res) => this._checkResponse(res));
  }

  // get chapter @PARAMS userId, token
  async getUserChapter(token, userId) {
    return fetch(`${this._baseUrl}/chapter/${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._checkResponse(res));
  }

  // delete chapter
  async deleteChapter(token, chapterId) {
    return fetch(`${this._baseUrl}/chapter/${chapterId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._checkResponse(res));
  }

  // edit chapter
  async editChapter(token, chapterId, form) {
    return fetch(`${this._baseUrl}/chapter/${chapterId}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        no: form.no,
        name: form.name,
        thumbNail: form.img,
      }),
    }).then((res) => this._checkResponse(res));
  }
}

const chapterApi = new ChapterApi({
  baseUrl: `http://104.196.253.173`,
});

export default chapterApi;
