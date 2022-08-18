const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

export const getUser = (username, password) =>
  sleep(1000).then(() => {
    if (("ali" === username) & (1 === password)) {
      return {
        id: 1,
        username,
        email: "info@email.com",
      };
    }
    return null;
  });
