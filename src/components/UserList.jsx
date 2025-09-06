import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../features/users/userSlice";
import UserForm from "./UserForm";

const UserList = () => {
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => state.users);
    const [editingUser, setEditingUser] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleEdit = (user) => {
        setEditingUser(user);
        setShowForm(true);
    };

    return (
        <div>
            <h2>User List</h2>
            <button onClick={() => { setEditingUser(null); setShowForm(true); }}>Add User</button>

            {showForm && (
                <UserForm existingUser={editingUser} onClose={() => setShowForm(false)} />
            )}

            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} ({user.email})
                            <button onClick={() => handleEdit(user)}>Edit</button>
                            <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList;
