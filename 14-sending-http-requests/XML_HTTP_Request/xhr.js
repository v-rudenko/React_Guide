const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // Підготуватися до запиту
    xhr.open(method, url);

    // Цей рядок для того, аби не перетворювати JSON на Javascript;
    xhr.responseType = "json";

    // Додати заголовок
    if (data) {
      xhr.setRequestHeader("Content-Type", "application/json");
    }

    // Надіслати запит

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject("Something went wrong");
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
};

const getData = () => {
  sendHttpRequest("GET", "https://reqres.in/api/users?page=2").then(
    (responseData) => {
      console.log(responseData);
    }
  );
};

const sendData = () => {
  sendHttpRequest("POST", "https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    password: "pistol",
  })
    .then((responseData) => {
      console.log(responseData);
      // throw Error (responseData);
    })
    .catch((err) => {
      console.log(err);
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
