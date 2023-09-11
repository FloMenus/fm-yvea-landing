"use client";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ModalComponent({
  children,
  open,
  handleClose,
}: {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: isSmallScreen ? "95%" : 1000,
          height: isSmallScreen ? "75%" : 700,
          bgcolor: "background.paper",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </Modal>
  );
}
