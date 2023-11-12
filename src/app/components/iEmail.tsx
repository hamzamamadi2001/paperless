import React from "react";
import {Input} from "@nextui-org/react";

export default function App({change}) {
  return (
    <Input
      isClearable
      type="username"
      label="username"
      variant="bordered"
      placeholder="Enter username"
      defaultValue="Admin"
      onClear={() => console.log(change)}
      className="max-w-xs"
    />
  );
}
