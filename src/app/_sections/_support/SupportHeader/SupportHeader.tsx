import "./style.css";

export default function SupportHeader() {
  return (
    <div className="support_header">
      <h2 className="support_header_title">
        <span>Optimisez</span> votre temps,
        <br />
        <span>maximisez</span> votre valeur grâce à votre partenaire dédié
      </h2>
      <div className="support_header_quote">
        <p className="support_header_quote_text">
          "Avoir du temps, c’est posséder le bien le plus précieux pour celui
          qui aspire à de grandes choses."
        </p>
        <p className="support_header_quote_author">
          Plutarque, philosophe grec, 46 après J.-C.
        </p>
      </div>
    </div>
  );
}
