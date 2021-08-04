import React, { useEffect, useState } from "react";
import { getUsersFromStorage } from "./localStorage";
import { useParams } from "react-router";
import { setUsersInStorage } from "./localStorage";

const Dashboard = () => {
  const params = useParams();
  const [user, setUser] = useState([]);
  const getUserDetails = (id) => {
    const temp = [JSON.parse(getUsersFromStorage())];
    const Data = temp.filter((user) => user.id === id);
    setUser(Data);
    console.log(Data);
    // setUser(temp.filter((user) => user.id == id));
    console.log(temp);
  };

  const { id, type } = params;
  useEffect(() => {
    setUser(getUsersFromStorage(id, type));
  }, []);

  const deleteUser = (id) => {
    const newUserData = user.filter((user) => user.id !== id);
    localStorage.setItem("user", JSON.stringify(newUserData));
    setUser(getUsersFromStorage(id, type));
  };

  return (
    <div>
      <h1>Dashboard Page</h1>
      <table class="table table-striped   table-bordered">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Type</th>
            <th>Password</th>
            {params.type !== "user" && <th>Delete</th>}
          </tr>
        </thead>
        <tbody>
          {user.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.type}</td>
                <td>{user.password}</td>
                {params.type !== "user" && (
                  <td onClick={() => deleteUser(user.id)}>
                    <i className="fa fa-times-circle fa-2x text-danger delete"></i>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
