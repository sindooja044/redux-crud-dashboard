import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../features/users/usersSlice";

const UserForm = ({ editUser, setEditUser }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(editUser?.name || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editUser) {
      dispatch(updateUser({ ...editUser, name }));
      setEditUser(null);
    } else {
      dispatch(addUser({ id: Date.now(), name }));
    }
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
      >
        {editUser ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default UserForm;
