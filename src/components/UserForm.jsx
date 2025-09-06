import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../features/users/userSlice";

const UserForm = ({ existingUser, onClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (existingUser) {
            setName(existingUser.name);
            setEmail(existingUser.email);
        }
    }, [existingUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { name, email };

        if (existingUser) {
            dispatch(updateUser({ id: existingUser.id, user: userData }));
        } else {
            dispatch(addUser(userData));
        }

        setName("");
        setEmail("");
        onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">{existingUser ? "Update" : "Add"} User</button>
        </form>
    );
};

export default UserForm;
