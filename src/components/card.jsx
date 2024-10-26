import { useRouter } from "next/navigation";
const Card = ({ item }) => {
  const router = useRouter();
  const toDetailedCard = () => {
    router.push(`/${item.id}`);
  };
  return (
    <div className="card" onClick={toDetailedCard}>
      <img src={item.cover_image} alt="" className="coverImg" />
      {!item.flare_tag ? null : (
        <p className="category">{item.flare_tag.name}</p>
      )}
      <div className="title">{item.title}</div>
      <div className="displayFlex">
        <img src={item.user.profile_image_90} alt="" />
        <div className="userName">{item.user.name}</div>
        <div>{item.published_at}</div>
      </div>
    </div>
  );
};
export default Card;
