import imgBanner from '../images/imgBanner.jpg';

function Banner() {
  return (
    <div className="bannerContainer">
      <div className="imageContainer">
        <img className="imageBanner" src={ imgBanner } alt="banner " />
      </div>
      <div className="textContainer">
        <h1 className="textTitle">
          Conheça a
        </h1>
        <h3 className="textSpan">
          Sairaf Store
        </h3>
        <p className="textDescription">
          Calçados, Vestuários e Acessórios para esporte.
        </p>
      </div>
    </div>
  );
}

export default Banner;