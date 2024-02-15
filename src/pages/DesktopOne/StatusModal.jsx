import React from 'react'
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

const StatusModal = ({ handleModalOpen, handleModalClose, selectedSepsissLevel, setSelectedSepsissLevel, Button }) => {
    return (
        <Modal open={handleModalOpen} onClose={handleModalClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: 800,
                    height: 600,
                    maxWidth: "100%",
                    maxHeight: "90%",
                    overflowY: "auto"
                }}>
                {selectedSepsissLevel}
                {setSelectedSepsissLevel}
                {Button }
            </Box>
        </Modal>
    )
}


export default StatusModal