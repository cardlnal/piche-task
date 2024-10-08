import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const ErrorModal = ({ error }: { error: string }): JSX.Element => {
  const [show, setShow] = useState<Boolean>(!!error || false);
  return (
    <Modal
      open={!!show}
      onClose={() => setShow((prev) => !prev)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Something went wrong
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {error}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ErrorModal;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
