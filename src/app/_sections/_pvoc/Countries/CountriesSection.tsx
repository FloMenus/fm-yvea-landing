import "./style.css";

import { countriesData } from "./data";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function CountriesSection() {
  return (
    <div className="countries_section">
      {/* <div className="countries_section_container"> */}
      <Grid
        container
        spacing={1}
        sx={{
          maxWidth: "1100px",
          position: "relative",
          margin: "0 auto",
        }}
      >
        <div className="countries_section_header">
          <h4 className="countries_section_header_title">
            La liste des destinations
          </h4>
        </div>
        {countriesData.map((country) => (
          <Grid item xs={6} sm={3} key={country.name}>
            <div className="countries_section_country">
              <img
                className="country_section_country_img"
                src={country.flag}
                alt={country.name}
              />
              <h5 className="country_section_country_name">{country.name}</h5>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
    // </div>
  );
}
