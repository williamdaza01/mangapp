import imagen from "../../../assets/images/imgcapmangas/Bleach/Cap2/image1.jpg";
import imagen2 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image2.jpg";
import imagen3 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image3.jpg";
import imagen4 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image4.jpg";
import imagen5 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image5.jpg";
import imagen6 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image6.jpg";
import imagen7 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image7.jpg";
import imagen8 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image8.jpg";
import imagen9 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image9.jpg";
import imagen10 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image10.jpg";
import imagen11 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image11.jpg";
import imagen12 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image12.jpg";
import imagen13 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image13.jpg";
import imagen14 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image14.jpg";
import imagen15 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image15.jpg";
import imagen16 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image16.jpg";
import imagen17 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image17.jpg";
import imagen18 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image18.jpg";
import imagen19 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image19.jpg";
import imagen20 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image20.jpg";
import imagen21 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image21.jpg";
import imagen22 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image22.jpg";
import imagen23 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image23.jpg";
import imagen24 from "../../../assets/images/imgcapmangas/Bleach/Cap2/image24.jpg";

import "../../capitulos.scss";
import { ArrowBackIos } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";

export const Cap2Bleach = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };

  const images = [
    imagen,
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
  ];

  return (
    <div className="home">
      <Box className="chapter-container">
        <Box className="chapter-header">
          <ArrowBackIos className="back-button" onClick={handleGoBack} />
          <h1>Capítulo 2</h1>
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
