import { ArrowBackIos } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
import "../perfilmanga.scss";
import { ItemManga } from "../../components/Itemmanga/itemmanga";
import { Items } from "../../items";
import { Button } from "@material-ui/core";

export const Dbz = () => {
  const history = useHistory();
  const allitems = Items;

  return (
    <div className="home">
      <ArrowBackIos
        className="iconsarrowback"
        onClick={() => history.push("/home")}
      ></ArrowBackIos>
      <div>
        <ItemManga {...allitems[2]} />
      </div>
      <Box className="cuadrodeopciones">
        <Button onClick={() => history.push("/dbzcap1")}>Capitulo 1</Button>
      </Box>
    </div>
  );
};
