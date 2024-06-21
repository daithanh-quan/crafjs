import { useNode } from "@craftjs/core";
import React from "react";

import { ToolbarItem, ToolbarItemProps } from "./ToolbarItem";

export type ToolbarItemPreCheckProps = {
  preCheckKey?: any;
  preCheckIndex?: any;
  checkShow?: (value: any) => boolean;
} & ToolbarItemProps;
export const ToolbarItemPreCheck = ({preCheckKey, preCheckIndex, checkShow, ...props}: ToolbarItemPreCheckProps) => {
  const {
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props[preCheckKey],
  }));
  const value = Array.isArray(propValue) ? propValue[preCheckIndex] : propValue;
  const show = checkShow(value)

  if (!show) return null
  return <ToolbarItem {...props}/>
};
