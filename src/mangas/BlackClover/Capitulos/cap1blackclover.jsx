import imagen1 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page.jpg";
import imagen2 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page2.jpg";
import imagen3 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page3.jpg";
import imagen4 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page4.jpg";
import imagen5 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page5.jpg";
import imagen6 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page6.jpg";
import imagen7 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page7.jpg";
import imagen8 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page8.jpg";
import imagen9 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page9.jpg";
import imagen10 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page10.jpg";
import imagen11 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page11.jpg";
import imagen12 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page12.jpg";
import imagen13 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page13.jpg";
import imagen14 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page14.jpg";
import imagen15 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page15.jpg";
import imagen16 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page16.jpg";
import imagen17 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page17.jpg";
import imagen18 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page18.jpg";
import imagen19 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page19.jpg";
import imagen20 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page20.jpg";
import imagen21 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page21.jpg";
import imagen22 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page22.jpg";
import imagen23 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page23.jpg";
import imagen24 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page24.jpg";
import imagen25 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page25.jpg";
import imagen26 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page26.jpg";
import imagen27 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page27.jpg";
import imagen28 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page28.jpg";
import imagen29 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page29.jpg";
import imagen30 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page30.jpg";
import imagen31 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page31.jpg";
import imagen32 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page32.jpg";
import imagen33 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page33.jpg";
import imagen34 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page34.jpg";
import imagen35 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page35.jpg";
import imagen36 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page36.jpg";
import imagen37 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page37.jpg";
import imagen38 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page38.jpg";
import imagen39 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page39.jpg";
import imagen40 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page40.jpg";
import imagen41 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page41.jpg";
import imagen42 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page42.jpg";
import imagen43 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page43.jpg";
import imagen44 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page44.jpg";
import imagen45 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page45.jpg";
import imagen46 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page46.jpg";
import imagen47 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page47.jpg";
import imagen48 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page48.jpg";
import imagen49 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page49.jpg";
import imagen50 from "../../../assets/images/imgcapmangas/Blackclover/Cap1/page50.jpg";
import "../../capitulos.scss";
import { ArrowBackIos } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";

export const Cap1Blackclover = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };

  const images = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
    imagen8,
    imagen9,
    imagen10,
    imagen11,
    imagen12,
    imagen13,
    imagen14,
    imagen15,
    imagen16,
    imagen17,
    imagen18,
    imagen19,
    imagen20,
    imagen21,
    imagen22,
    imagen23,
    imagen24,
    imagen25,
    imagen26,
    imagen27,
    imagen28,
    imagen29,
    imagen30,
    imagen31,
    imagen32,
    imagen33,
    imagen34,
    imagen35,
    imagen36,
    imagen37,
    imagen38,
    imagen39,
    imagen40,
    imagen41,
    imagen42,
    imagen43,
    imagen44,
    imagen45,
    imagen46,
    imagen47,
    imagen48,
    imagen49,
    imagen50,
  ];

  return (
    <div className="home">
      <Box className="chapter-container">
        <Box className="chapter-header">
          <ArrowBackIos className="back-button" onClick={handleGoBack} />
          <h1>Capítulo 1: Las Tres Hojas</h1>
        </Box>
        <Box className="chapter-pages">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Página ${index + 1}`} />
          ))}
        </Box>
      </Box>
    </div>
  );
};
