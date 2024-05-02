
const RestaurantCard = ({ name, img, rate, desc, adress }) => {
  return (
    <div className=" h-60 mx-10 mb-6 w-1/6 border border-black flex flex-wrap rounded-xl p-4">
      <div className="w-full">
        <p>{name}</p>
        <img src={img} className="h-20 w-full bg-cover  " />
      </div>
      <div>
        <p>{rate}</p>
        <p>{desc}</p>
        <p>{adress}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
