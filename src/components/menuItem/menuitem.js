import React from "react";

import { Item } from "./menuitem.styles";

export default function MenuItem({ children, ...props }) {
  return <Item {...props}>{children}</Item>;
}
