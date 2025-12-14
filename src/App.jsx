import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";
import UserForm from "./components/UserForm";
import UsersTable from "./components/UsersTable";

function App() {
  const dispatch = useDispatch();
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Users Dashboard</h2>
      <UserForm editUser={editUser} setEditUser={setEditUser} />
      <UsersTable setEditUser={setEditUser} />
    </div>
  );
}

export default App;
