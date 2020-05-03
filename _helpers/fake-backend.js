// array in local storage for registered users
let users = JSON.parse(localStorage.getItem("users")) || [];

export function configureFakeBackend() {
  let realFetch = window.fetch;
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.endsWith("#") && opts.method === "POST") {
          let params = JSON.parse(opts.body);

          if (filteredUsers.length) {
            return "Auth Done";
          } else {
            // else return error
            reject("Email or password is incorrect");
          }

          return;
        }

        realFetch(url, opts).then(response => resolve(response));
      }, 500);
    });
  };
}
