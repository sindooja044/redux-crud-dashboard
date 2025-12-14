import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../features/users/usersSlice";

const UsersTable = ({ setEditUser }) => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.users);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <table
      border="1"
      className="w-full border border-gray-200 rounded-md overflow-hidden"
    >
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="px-4 py-2 text-left">ID</th>
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {list.map((user) => (
          <tr key={user.id} className="odd:bg-gray-100">
            <td className="px-4 py-2">{user.id}</td>
            <td className="px-4 py-2">{user.name}</td>
            <td className="px-4 py-2">
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => setEditUser(user)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteUser(user.id))}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
