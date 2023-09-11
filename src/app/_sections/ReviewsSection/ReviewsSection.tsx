import "./style.css";
import Image from "next/image";

export default function ReviewsSection() {
  return (
    <div className="reviews_container">
      <h3 className="reviews_title">Ce qu'en disent vos pairs</h3>
      <div className="reviews">
        <div className="review">
          <div className="review_top">
            <p className="review_testimonial">
              "Une solution simple mais puissante pour les exportateurs. Merci
              YVEA !"
            </p>
          </div>
          <div className="review_bottom">
            <img
              className="review_image"
              src="/medias/avatars/businesswoman.png"
              alt="Businesswoman image"
            />
            <div className="review_author">
              <h5 className="review_name">Laurence RAGAIGNE</h5>
              <h6 className="review_job">
                Export Sales Administration,
                <br />
                DANUBE INTERNATIONAL
              </h6>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="review_top">
            <p className="review_testimonial">
              "Pas de perte de temps sur le dossier d'inspection documentaire,
              YVEA se charge de tout !
              <br />
              Je recommande vivement"
            </p>
          </div>
          <div className="review_bottom">
            <img
              className="review_image"
              src="/medias/avatars/businesswoman2.png"
              alt="Businesswoman image"
            />
            <div className="review_author">
              <h5 className="review_name">SABRINA DAEL</h5>
              <h6 className="review_job">
                Export Coordinator,
                <br />
                MIDAS (MESA SP)
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* <img  className="geometric" src="/medias/geometric1.svg" alt="earth" />
      <img  className="geometric2" src="/medias/geometric1.svg" alt="earth" />
      <img  className="geometric3" src="/medias/geometric2.svg" alt="earth" /> */}
      {/* <div className="contact_text">
        <h4 className="contact_title">Besoin d'informations spécifiques ?</h4>
        <p className="contact_paragraph">
          Notre expertise est à votre disposition ! Choisissez parmi les options
          qui vous conviennent pour solliciter notre assistance :
        </p>
      </div>
       */}
    </div>
  );
}

{
}
