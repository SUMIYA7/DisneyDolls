
const Banner = () => {
  return (
    <div
      className="hero max-h-fit"
      style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJe6A2i06QRb5g5-wEtCyWToK8qa4bTsWHw&usqp=CAU")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">DisneyDolls</h1>
          <p className="mb-5">
            This site will take you to the collection of all favourite characters and animation toys of our Disneyland.So check on your Disney Toys Here.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
