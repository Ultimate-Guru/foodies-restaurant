import bgCoverImg from "../../assets/biryani_cover.jpg";

const CoverBanner = () => {
  const bgImage = {
    backgroundImage: `url(${bgCoverImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "200px",
    width: "100%",
  };

  return (
    <div style={bgImage}>
      <div className="h-[200px] flex justify-center items-center text-white backdrop-blur-sm">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Discover the Taste of Authentic Biryani
        </h1>
      </div>
    </div>
  );
};

export default CoverBanner;