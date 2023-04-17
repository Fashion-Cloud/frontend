import * as React from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";

function alertType() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("This is a success message!", { variant });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickVariant("default")}>
        Show success snackbar
      </Button>
    </React.Fragment>
  );
}

export default function Alert() {
  return (
    <SnackbarProvider maxSnack={3}>
      {alertType()}
    </SnackbarProvider>
  );
}
