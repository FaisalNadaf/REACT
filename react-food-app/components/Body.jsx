import { useState } from "react";
import { data } from "../constant";
import RestaurantCard from "./RestaurantCard";

const filterCard = (searchText, resturants) => {
  return resturants.filter((resturant) => resturant.desc.includes(searchText));
};

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [resturants, setResturants] = useState(data);

  return (
    <div className="">
      <div>
        <input
          type="text"
          value={searchText}
          placeholder="Search"
          className="border border-black"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-black text-white"
          onClick={() => {
            const res = filterCard(searchText, resturants);
            res == " " ? setResturants(resturants) : setResturants(res);
          }}
        >
          search
        </button>
        {searchText}
      </div>
      <div className="flex flex-wrap ">
        {resturants.map((d, idx) => {
          return <RestaurantCard {...d} key={idx} />;
        })}
      </div>{" "}
    </div>
  );
};

export default Body;
