import React, { useState } from "react";
import MenuItem from "../menuItem";
import { Container } from "./sidemenu.styles";
import { MdMenu } from "react-icons/md";
import OpenClose from "../../assets/openClose.svg";
export default function SideMenu() {
  const [items] = useState([
    { title: 1, x: 0, y: -150 },
    { title: 2, x: 105, y: -105 },
    { title: 3, x: 150, y: 0 },
    { title: 4, x: 105, y: 105 },
    { title: 5, x: 0, y: 150 }
  ]);

  const [open, setOpen] = useState(true);
  return (
    <Container>
      {items.map((item, pos) => (
        <MenuItem x={item.x} y={item.y} open={open} delay={(pos + 1) / 8}>
          {item.title}
        </MenuItem>
      ))}
      <MenuItem
        rotate={true}
        open={open}
        onClick={() => setOpen(!open)}
        style={{ fontSize: "30px" }}
      >
        <img src={OpenClose} width={"40px"} />
      </MenuItem>
    </Container>
  );
}
