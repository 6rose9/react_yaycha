import { useContext, useRef } from "react";
import { AppContext } from "../ThemedApp";

import {
    Box,
    TextField,
    Button,
} from "@mui/material";



export default function Form({ add }) {

    // const { mode } = useContext(AppContext);
    const contentRef = useRef();
    const nameRef = useRef();

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const content = contentRef.current.value;
            const name = nameRef.current.value;
            add(content, name);
            e.currentTarget.reset(); // clear form input
        }}>
            <Box sx={{ mb: 4, textAlign: "right" }}>
                <TextField
                    inputRef={contentRef}
                    type="text"
                    placeholder="Content"
                    fullWidth
                    multiline
                    sx={{ mb: 1 }}
                />
                <TextField
                    inputRef={nameRef}
                    type="text"
                    placeholder="Name"
                    fullWidth
                    multiline
                    sx={{ mb: 1 }}
                />
                <Button
                    variant="contained"
                    type="submit">
                    Post
                </Button>
            </Box>
        </form>
    );

    // return (
    //     <form onSubmit={(e) => {
    //         e.preventDefault();
    //         const content = contentRef.current.value;
    //         const name = nameRef.current.value;
    //         add(content, name);
    //         e.currentTarget.reset(); // clear form input
    //     }}
    //         style={{
    //             display: "flex",
    //             flexDirection: "column",
    //             gap: 3,
    //             padding: 10,
    //             borderRadius: 8,
    //             marginBottom: 20,
    //             background: mode === "dark" ? "#555" : "#def",
    //         }}>
    //         <input
    //             ref={contentRef}
    //             type="text"
    //             placeholder="Content"
    //             style={{ padding: 5 }}
    //         />
    //         <input
    //             ref={nameRef}
    //             type="text"
    //             placeholder="Name"
    //             style={{ padding: 5 }}
    //         />
    //         <button
    //             type="submit"
    //             style={{
    //                 padding: 8,
    //                 background: "#0d6efd",
    //                 color: "White",
    //                 border: "0 none",
    //             }}>
    //             Post
    //         </button>
    //     </form>
    // );
}