/** Verified Wikimedia Commons thumb URLs (HTTP 200). */

const kristiansandHarbour =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Kristiansand_harbour.jpg/1280px-Kristiansand_harbour.jpg";
const fiskebrygga =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Fiskebrygga%2C_Kristiansand.jpg/1280px-Fiskebrygga%2C_Kristiansand.jpg";
const christiansholmFortress =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Christiansholm_festning_02.jpg/1280px-Christiansholm_festning_02.jpg";
const bystranda =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bystranda_2014-07-21.JPG/1280px-Bystranda_2014-07-21.JPG";
const baneheia =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Baneheia_Kjempesteinen.JPG/1280px-Baneheia_Kjempesteinen.JPG";
const ravnedalen =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ravnedalen.jpg/1280px-Ravnedalen.jpg";
const kilden =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Kristiansand_Kilden_teater_og_konserthus.jpg/1280px-Kristiansand_Kilden_teater_og_konserthus.jpg";
const domkirke =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Kristiansand_domkirke.jpg/1280px-Kristiansand_domkirke.jpg";

export const siteImages = {
  hero: kristiansandHarbour,
  harbour: kristiansandHarbour,
  fiskebrygga,
  christiansholmFortress,
  bystranda,
  baneheia,
  ravnedalen,
  kilden,
  domkirke,
  portGuide: kristiansandHarbour,
  worthVisiting: fiskebrygga,
  oneDay: christiansholmFortress,
  bestTime: bystranda,
  highlightsTour: kristiansandHarbour,
  natureTrekTour: baneheia,
  walkingTour: fiskebrygga,
  harbourWalkTour: christiansholmFortress,
  familyBeachTour: bystranda,
  flamPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/5/56/Fl%C3%A5m_fr%C3%A5_cruiseskip_ved_kai.jpg",
  bergenPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/f/fe/Harbour_Bergen_Norway_2009_5.jpg",
  stavangerPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/3/3a/Stavanger_havn.jpg",
  alesundPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/%C3%85lesund_Hafen_lub_2025-07-28_img04.jpg",
  geirangerPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/1/10/Flydalsjuvet_Geiranger_Geirangerfjorden.jpg",
  oldenPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/c/ca/Briksdalsbreen_Glacier_-Norway.jpg",
  eidfjordPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Voringsfossen_waterfall_at_Eidfjord%2C_Norway.jpg",
  moldePortCard:
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Molde_Hafen.jpg",
  honningsvagPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Puerto_de_Honningsv%C3%A5g%2C_Noruega%2C_2019-09-03%2C_DD_88.jpg/1280px-Puerto_de_Honningsv%C3%A5g%2C_Noruega%2C_2019-09-03%2C_DD_88.jpg",
} as const;

export const imageAlts = {
  hero: "Kristiansand harbour with cruise ships and waterfront, Kristiansand Shore Excursions",
  harbour:
    "Kristiansand cruise harbour and marina with southern Norway coastal scenery",
  fiskebrygga:
    "Fiskebrygga fish market and waterfront restaurants in Kristiansand harbour",
  christiansholmFortress:
    "Christiansholm Fortress on the Kristiansand harbourfront, 17th-century coastal defence",
  bystranda:
    "Bystranda city beach in central Kristiansand with sandy shore and promenade",
  baneheia:
    "Baneheia forest trails and viewpoints above Kristiansand city centre",
  ravnedalen:
    "Ravnedalen valley park with woodland paths and lakes near Kristiansand",
  kilden:
    "Kilden Performing Arts Centre on Kristiansand harbour with distinctive wooden architecture",
  domkirke:
    "Kristiansand Domkirke cathedral in the Kvadraturen town centre grid",
  portGuide:
    "Kristiansand cruise port harbour, port guide for shore excursion passengers",
  worthVisiting:
    "Fiskebrygga fish market on Kristiansand waterfront, is Kristiansand worth visiting",
  oneDay:
    "Christiansholm Fortress and harbourfront, one day in Kristiansand cruise itinerary",
  bestTime:
    "Bystranda beach in summer, best time to visit Kristiansand on a cruise",
  highlightsCard:
    "Kristiansand harbour and city highlights shore excursion for first-time visitors",
  natureTrekCard:
    "Baneheia forest trails, nature trek shore excursion from Kristiansand cruise port",
  walkingCard:
    "Fiskebrygga fish market, walking exploration shore excursion in Kristiansand",
  harbourWalkCard:
    "Christiansholm Fortress and harbour walk, short-port shore excursion Kristiansand",
  familyBeachCard:
    "Bystranda city beach, family and beach day shore excursion Kristiansand",
  flamPortCard:
    "Flam harbour with a cruise ship at the pier, Flam Shore Excursions",
  bergenPortCard:
    "Bergen harbour and waterfront, Bergen Shore Excursions",
  stavangerPortCard:
    "Stavanger harbour with cruise-friendly waterfront, Stavanger Shore Excursions",
  alesundPortCard:
    "Alesund harbour with cruise-friendly waterfront, Alesund Shore Excursions",
  geirangerPortCard:
    "Geirangerfjord viewpoint with cruise ship, Geiranger Shore Excursions",
  oldenPortCard:
    "Briksdal Glacier and Nordfjord scenery, Olden Shore Excursions",
  eidfjordPortCard:
    "Vøringsfossen waterfall and Hardanger scenery, Eidfjord Shore Excursions",
  moldePortCard:
    "Molde harbour and Atlantic coast, Molde Shore Excursions",
  honningsvagPortCard:
    "Honningsvåg cruise harbour, Honningsvag Shore Excursions",
} as const;
