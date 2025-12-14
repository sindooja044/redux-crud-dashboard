import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../features/users/usersSlice";

const UsersTable = ({ setEditUser }) => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.users);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {list.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>
              <button onClick={() => setEditUser(user)}>Edit</button>
              <button onClick={() => dispatch(deleteUser(user.id))}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
