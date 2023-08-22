import getImageByKey from "../Image";
import calander from "../assets/calander.png";

const Box = ({ data, name }) => {
  return (
    <>
      <div className="hackathon_wrapper">
        <h2 className="boxheading">
          <img src={calander} alt="calander" /> {name}
        </h2>
      </div>
      <div className="hackathons_box">
        {data &&
          data.map((item, idx) => (
            <div key={idx} className="h_card">
              <div className="h_img">
                <img src={getImageByKey(item.image)} alt="" />
              </div>
              <div className="h_info">
                <h2>{item.name}</h2>
                <h3>{item.project}</h3>
                <p>{item.desc}</p>
                <div className="cardlink">
                  <a target="_blank" rel="noreferrer" href={item.link}>
                    <ion-icon name="link-outline"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Box;
