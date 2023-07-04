import * as React from "react";
import styled from "@emotion/styled";
import { Modal, Typography, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = ({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "white",
  border: "1px solid #000",
  boxShadow: 24,
  p: 2,
  borderRadius: "8px",
});

const ThemeLabel = styled("span")(({ theme }) => ({
  borderBottom: "1px solid",
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  fontSize: "small",
  verticalAlign: "top",
  marginLeft: "0.4em",
}));

export default function BasicModal({ label, title, substance }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const str = substance;

  return (
    <>
      <ThemeLabel onClick={handleOpen}>{label}</ThemeLabel>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            sx={{ position: "absolute", top: "0", right: "0" }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            sx={{ mb: 2 }}
            id="modal-modal-title"
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>

          {<Box dangerouslySetInnerHTML={{ __html: str }}></Box>}
        </Box>
      </Modal>
    </>
  );
}
