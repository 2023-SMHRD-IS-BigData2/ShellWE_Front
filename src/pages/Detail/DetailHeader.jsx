import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import CommentModal from '../DesktopOne/CommentModal'

const DetailHeader = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            <Button onClick={openModal}>Open Modal</Button>
            <CommentModal
                isOpen={isModalOpen} closeModal={closeModal}>
                <Box>
                    <Typography>
                        
                    </Typography>
                </Box>
            </CommentModal>
        </div>
    )
}

export default DetailHeader