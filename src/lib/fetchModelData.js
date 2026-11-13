export const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:8081";

function fetchModel(url) {
  return new Promise((resolve, reject) => {
    const targetUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `${SERVER_URL}${url.startsWith("/") ? "" : "/"}${url}`;

    fetch(targetUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        resolve({ data });
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default fetchModel;
