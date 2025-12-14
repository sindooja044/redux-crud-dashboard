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
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">{editUser ? "Update" : "Add"}</button>
    </form>
  );
};

export default UserForm;
