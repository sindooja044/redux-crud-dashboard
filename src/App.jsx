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
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Users Dashboard</h2>
        <UserForm editUser={editUser} setEditUser={setEditUser} />
        <UsersTable setEditUser={setEditUser} />
      </div>
    </div>
  );
}

export default App;
