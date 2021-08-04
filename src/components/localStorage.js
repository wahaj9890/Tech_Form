export const creatUserInLocalStorage = () => {
  let user;
  const check = localStorage.getItem("user");
  if (check == null) {
    user = [];
    JSON.parse(localStorage.setItem("user", JSON.stringify(user)));
    console.log("Method clal");
  }
};

export const getUsersFromStorage = (id, type) => {
  const userdata = JSON.parse(localStorage.getItem("user"));
  if (type === "Admin") {
    return userdata;
  } else {
    return userdata.filter((user) => user.id === id);
  }
};

export const setUsersInStorage = (user) => {
  let prevData = JSON.parse(localStorage.getItem("user"));
  let userArray;
  if (prevData == null) {
    userArray = [user];
    localStorage.setItem("user", JSON.stringify(userArray));
  } else {
    prevData.push(user);
    localStorage.setItem("user", JSON.stringify(prevData));
  }
};
