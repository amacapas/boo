"use strict";

const express = require("express");
const router = express.Router();

const profile = {
  id: 1,
  name: "A Martinez",
  description:
    "Adolph Larrue Martinez III. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl est, tincidunt ac massa et, consectetur finibus augue. In sed mauris quis nisl tincidunt malesuada. Integer dictum consectetur fermentum. Curabitur mattis, arcu a accumsan venenatis, ligula dui porttitor tortor, ac sagittis eros velit sollicitudin arcu. Integer vitae semper sapien, id semper augue. Mauris non risus id purus eleifend ultrices a ac diam. Phasellus molestie cursus congue.",
  mbti: "ISFJ",
  enneagram: "9w3",
  variant: "sp/so",
  tritype: 725,
  socionics: "SEE",
  sloan: "RCOEN",
  psyche: "FEVL",
  image:
    "https://cdn.allfamous.org/people/avatars/a-martinez-ifja-allfamous.org.jpg",
};

const settings = {
  MBTI: [
    "INFP",
    "INFJ",
    "ENFP",
    "ENFJ",
    "INTJ",
    "INTP",
    "ENTP",
    "ENTJ",
    "ISFP",
    "ISFJ",
    "ESFP",
    "ESFJ",
    "ISTP",
    "ISTJ",
    "ESTP",
    "ESTJ",
  ],
  Enneagram: [
    "1w2",
    "2w3",
    "3w2",
    "3w4",
    "4w3",
    "4w5",
    "5w4",
    "5w6",
    "6w5",
    "6w7",
    "7w6",
    "7w8",
    "8w7",
    "8w9",
    "9w8",
    "9w1",
  ],
  Zodiac: [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ],
};

module.exports = () => {
  router.get("/*", (req, res, next) => {
    res.render("profile_template", {
      profile,
      settings,
    });
  });

  return router;
};
