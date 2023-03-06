import { Box } from "@material-ui/core";
import "../Item/item.css";

export const ItemManga = (Items) => {
  return (
    <div>
      <Box className="item-container">
        <h2>{Items.name}</h2>
        <p>{Items.description}</p>
      </Box>
    </div>
  );
};
