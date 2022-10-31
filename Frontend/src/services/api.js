const HOST = "http://localhost:5000/";

export const doApiGet = async (_url) => {
  try {
    let resp = await fetch(HOST + _url);
    let data = await resp.json();
    return data;
  } catch (err) {
    alert("There's a problem, try again later.");
    console.log(err);
  }
};

export const doApiMethod = async (_url, _method, _body) => {
  try {
    console.log({_url, _method, _body})
    const response = await fetch(HOST + _url, {
      method: _method,
      body: JSON.stringify(_body || {}),
      headers: {
        token: localStorage["tok"] || "",
        "content-type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    alert("There's a problem, try again later.");
    console.log(err);
  }
};
