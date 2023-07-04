import { useState } from "react";
import { Select, Box, FormControl, MenuItem } from "@mui/material";

const Placeholder = ({ children }) => {
  return <Box sx={{ color: "#808080" }}>{children}</Box>;
};

export default function BasicSelect({
  data,
  placeholder,
  changeSelect,
  required,
}) {
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
    changeSelect && changeSelect(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ minWidth: 60 }} fullWidth size="small">
        <Select
          id={data[0].id}
          value={selected}
          displayEmpty
          required={required}
          onChange={handleChange}
          defaultValue={data[0].id}
          renderValue={
            selected !== ""
              ? undefined
              : () => <Placeholder>{placeholder}</Placeholder>
          }
        >
          {data.map((item, index) => (
            <MenuItem key={item.id} value={item.id}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
