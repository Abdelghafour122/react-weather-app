import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Flag from "react-world-flags";

import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { name: "English", flagCode: "gb", code: "en-GB" },
  { name: "Deutsch", flagCode: "de", code: "de-DE" },
  { name: "Français", flagCode: "fr", code: "fr-FR" },
  { name: "العربية", flagCode: "sa", code: "ar-SA" },
];

const LanguageSwitch = ({ handleChangeLanguage }) => {
  const language = localStorage.getItem("i18nextLng");
  const [lang, setLang] = useState(language);
  const handleChange = (e, lang) => {
    if (lang !== null) {
      setLang(lang);
      handleChangeLanguage(lang);
      localStorage.setItem("i18nextLng", `${lang}`);
    }
  };

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "10px",
        padding: "20px",
      }}
    >
      <Typography
        component="p"
        variant="body2"
        color="text.secondary"
        sx={{
          letterSpacing: "3px",
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        {t("Navbar.Settings_Backdrop.Language.title")}
      </Typography>
      <ToggleButtonGroup
        exclusive
        orientation="vertical"
        value={lang}
        onChange={handleChange}
        sx={{ width: "100%", justifyContent: "center" }}
      >
        {LANGUAGES.map((language, ind) => {
          return (
            <ToggleButton
              key={ind}
              value={language.code}
              sx={{ flex: 1, gap: "5px", justifyContent: "flex-start" }}
              aria-label={`${language.name}`}
            >
              {language.name}
              <Flag code={language.flagCode} height="20px" width="24px" />
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Box>
  );
};

export default LanguageSwitch;
