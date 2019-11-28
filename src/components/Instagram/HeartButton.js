import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function HeartButton() {
  const [like, setLike] = React.useState(false);

  return (
    <>
      <IconButton
        disableFocusRipple
        disableRipple
        size="small"
        color="inherit"
        onClick={() =>
          setLike(!like)}
      >
        {like ? (
          <FavoriteIcon color="error" />
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>
    </>
  );
}
export default HeartButton;
