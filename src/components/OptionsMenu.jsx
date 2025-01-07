import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import VCard from "vcf";

import MenuIcon from "@mui/icons-material/Menu";
import QrCodeIcon from "@mui/icons-material/QrCode";
import DownloadIcon from "@mui/icons-material/Download";

export default function OptionsMenu({ setOpenQr, data }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDownload = (data) => {
    const vCard = new VCard();

    vCard.set("n", [data.lastName || "", data.firstName || "", "", "", ""]);
    vCard.set("fn", data.name);
    vCard.set("org", data.company);
    vCard.set("email", data.email);
    vCard.set("tel", data.phone);
    vCard.set("url", data.website);

    if (data.photo_avatar) {
      vCard.set("photo", data.photo_avatar);
    }

    const vcfData = vCard.toString();

    const blob = new Blob([vcfData], { type: "text/vcard" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "contact.vcf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleDownload(data)}>
          <DownloadIcon fontSize="small" />
          <p className="mx-2 text-sm">Download</p>
        </MenuItem>
        <MenuItem onClick={() => setOpenQr(true)}>
          <QrCodeIcon fontSize="small" />
          <p className="mx-2 text-sm">QR-Code</p>
        </MenuItem>
      </Menu>
    </div>
  );
}
