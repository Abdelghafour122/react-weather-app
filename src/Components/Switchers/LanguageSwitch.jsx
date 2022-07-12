import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Flag from "react-world-flags";

const LANGUAGES = [
  { name: "English", flagCode: "gb", code: "en" },
  { name: "Deutsch", flagCode: "de", code: "de" },
  { name: "Français", flagCode: "fr", code: "fr" },
  { name: "العربية", flagCode: "sa", code: "ar" },
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
        sx={{ letterSpacing: "3px", fontWeight: 700 }}
      >
        LANGUAGE
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
