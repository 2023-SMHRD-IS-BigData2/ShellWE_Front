import React from 'react'
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";

const CommentModal = ({ isOpen, closeModal, children }) => {
    return (
        <Modal open={isOpen} onClose={closeModal}>
            <Paper
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: 800,
                    height: 400,
                    maxWidth: "100%",
                    maxHeight: "90%",
                    overflowY: "auto"
                }}>
                {children}
            </Paper>
        </Modal>
    )
}


export default CommentModal