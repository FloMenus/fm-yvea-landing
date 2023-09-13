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
            <Image
              width={52}
              height={52}
              className="review_image"
              src="/medias/avatars/businesswoman.png"
              alt="Businesswoman image"
            />
            <div className="review_author">
              <h4 className="review_name">Laurence RAGAIGNE</h4>
              <h5 className="review_job">
                Export Sales Administration,
                <br />
                DANUBE INTERNATIONAL
              </h5>
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
            <Image
              width={52}
              height={52}
              className="review_image"
              src="/medias/avatars/businesswoman2.png"
              alt="Businesswoman image"
            />
            <div className="review_author">
              <h4 className="review_name">Sabrina DAEL</h4>
              <h5 className="review_job">
                Export Coordinator,
                <br />
                MIDAS (MESA SP)
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
}
