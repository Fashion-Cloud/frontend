import React from "react"
import { 
    Toolbar, 
    Typography,
    MenuItem,
    FormControl
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function AddReview() {
    const [review, setreview] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setreview(event.target.value);
      };

    return(
        <Toolbar>
            <Typography fontFamily='BalooBhaijaan' fontWeight='700' fontSize='16pt'>
                Review: 
            </Typography>
            <FormControl size="small" sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={review}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>적당했다.</MenuItem>
                <MenuItem value={20}>추웠다.</MenuItem>
                <MenuItem value={30}>더웠다.</MenuItem>
                </Select>
            </FormControl>
        </Toolbar>
    )
}