import { Button, Container } from "./LikeButton.styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const LikeButton: React.FunctionComponent = () => {
  return (
    <Container>
      <Button>
        <FavoriteBorderIcon />
      </Button>
    </Container>
  );
};
