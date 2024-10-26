import { Header } from "./header";

const CardInfo = ({ dataOfSingleCard }) => {
  console.log(dataOfSingleCard);
  return (
    <Header>
      <div className="center">
        <div className="body">
          <img src={dataOfSingleCard?.cover_image} alt="" />
          <div className="body-info">
            {dataOfSingleCard?.tags.map((item) => {
              return <div className="category">{item}</div>;
            })}
          </div>
          <div className="title info">{dataOfSingleCard?.title}</div>
          <div className="desc info">{dataOfSingleCard?.description}</div>
          <div className="displayFlex">
            <img src={dataOfSingleCard?.user.profile_image_90} alt="" />
            <div className="userName">{dataOfSingleCard?.user.name}</div>
            <div>{dataOfSingleCard?.published_at}</div>
          </div>
        </div>
      </div>
    </Header>
  );
};
export default CardInfo;
