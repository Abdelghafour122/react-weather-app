import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

const LANGUAGES = [
  { name: "English", code: "gb" },
  { name: "Deutsch", code: "de" },
  { name: "Français", code: "fr" },
  { name: "العربية", code: "ksa" },
];

const LanguageSwitch = () => {
  const [lang, setLang] = useState("english");
  const handleChangeLanguage = (e, lang) => {
    setLang(lang);
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
        value={lang}
        onChange={handleChangeLanguage}
        sx={{ width: "100%", justifyContent: "center" }}
      >
        {LANGUAGES.map((language, ind) => {
          return (
            <ToggleButton
              key={ind}
              value={language.name}
              sx={{ flex: 1, gap: "5px" }}
              aria-label={`${language.name}-mode`}
            >
              {language.name}
              {/* HERE COMES THE FLAG */}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Box>
  );
};

export default LanguageSwitch;
