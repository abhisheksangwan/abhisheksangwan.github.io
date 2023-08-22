
import coursy from "./assets/projectsImg/coursy.png";
import organisy from "./assets/projectsImg/organisy.png";
import princy from "./assets/projectsImg/princy.png";
import wrappy from "./assets/projectsImg/wrappy.png";
import whackamole from "./assets/projectsImg/whackamole.png";
import notesy from "./assets/projectsImg/notesy.png";

const images = {

  coursy,
  organisy,
  princy,
  wrappy,
  whackamole,
  notesy,
};

function getImageByKey(key) {
  return images[key];
}

export default getImageByKey;
