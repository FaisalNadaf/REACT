const Header = () => {
  return (
    <div className="flex h-24 items-center justify-between px-4 border-2 border-black rounded-2xl m-2 mb-4">
      <img
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w256-rw"
        className="h-20"
      />
      <ul className="flex ">
        <li key={1} className="px-2">
          home
        </li>
        <li key={2} className="px-2">
          about
        </li>
        <li key={3} className="px-2">
          contact
        </li>
        <li key={4} className="px-2">
          CART
        </li>
      </ul>
    </div>
  );
};

export default Header