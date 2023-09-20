import styles from "./style.module.css";

import { countriesData } from "./data";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function CountriesSection() {
  const { t } = useTranslation("pvoc");
  return (
    <div className={styles.countries_section}>
      {/* <div className={styles.countries_section_container"> */}
      <Grid
        container
        spacing={1}
        sx={{
          maxWidth: "1100px",
          position: "relative",
          margin: "0 auto",
          paddingTop: "29px",
        }}
      >
        <div className={styles.countries_section_header}>
          <h4 className={styles.countries_section_header_title}>
            {t("La liste des destinations")}
          </h4>
        </div>
        {countriesData.map((country) => (
          <Grid item xs={6} sm={3} key={country.name}>
            <div className={styles.countries_section_country}>
              <Image
                width={36}
                height={36}
                className={styles.country_section_country_img}
                src={country.flag}
                alt={country.name}
              />
              <h5 className={styles.country_section_country_name}>
                {t(country.name)}
              </h5>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
