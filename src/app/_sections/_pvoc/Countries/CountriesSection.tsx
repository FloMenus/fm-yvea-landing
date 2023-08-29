import "./style.css";

import { countriesData } from "./data";

export default function CountriesSection() {
  return (
    <div className="countries_section">
      <div className="countries_section_container">
        <div className="countries_section_header">
          <h4 className="countries_section_header_title">
            La liste des destinations
          </h4>
        </div>
        {countriesData.map((country) => (
          <div className="countries_section_country">
            <img
              className="country_section_country_img"
              src={country.flag}
              alt={country.name}
            />
            <h5 className="country_section_country_name">{country.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
