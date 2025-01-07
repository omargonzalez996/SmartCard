import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { QRCodeCanvas } from "qrcode.react";

const QrModal = ({ openModal, data }) => {
  const handleOpen = () => openModal(true);
  const handleClose = () => openModal(false);
  const [text, setText] = useState("");

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={text}
      size={260}
      bgColor={"#fff"}
      level={"H"}
    />
  );

  useEffect(() => {
    setText(`${import.meta.env.VITE_ZCARD_URL}${data.uuid}`);
  }, []);

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            maxWidth: 500,
            maxHeight: 700,
            overflowY: "scroll",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            fontSize: 10,
            fontWeight: "semibold",
            "&::-webkit-scrollbar": { display: "none" },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            QRCode
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <div className="border-t border-gray-300 my-4" />
          <div className="flex items-center justify-center align-middle p-5">
            {qrcode}
          </div>
          <div className="border-t border-gray-300 my-4" />
          <div className="flex items-center justify-center align-middle">
            <Button
              onClick={() => handleClose()}
              type="button"
              variant="contained"
              style={{ marginTop: "10px", backgroundColor: "gray" }}
            >
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default QrModal;
