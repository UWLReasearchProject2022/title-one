import { Button, Container } from "./LikeButton.styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const LikeButton = () => {
  return (
    <Container>
      <Button>
        <FavoriteBorderIcon />
      </Button>
    </Container>
  );
};
