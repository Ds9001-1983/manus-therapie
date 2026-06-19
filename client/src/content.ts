/* =============================================================================
 * ZENTRALE INHALTS- & PLATZHALTER-DATEI — Manus-Therapie Akademie
 * -----------------------------------------------------------------------------
 * Alle veränderlichen Inhalte (Kontaktdaten, Seminartermine/-preise, Statistiken,
 * rechtliche Pflichtangaben) leben HIER an einem Ort. Die Komponenten lesen nur
 * aus dieser Datei — zum Befüllen vor dem Go-Live muss also nur diese eine Datei
 * bearbeitet werden.
 *
 * ⚠️  ALLES MIT  "TODO PLATZHALTER"  MUSS VOR DER VERÖFFENTLICHUNG ERSETZT WERDEN.
 *
 * Offene Punkte für den Go-Live (Stand der Übergabe):
 *   1. Kontakt: E-Mail bestätigt (info@manus-therapie.de); Social-Profile (Instagram,
 *      Facebook, TikTok) unter site.social eintragen, sonst werden die Icons ausgeblendet
 *   2. Seminar: Termin 02.–03.11.2026 (2 Tage) bestätigt; Frühbucher-Stichtag,
 *      Preise und Veranstaltungsort noch prüfen (Preis ggf. an 2-Tage-Format anpassen)
 *   3. Statistiken (1000+, 15 Jahre, 98 %, Anzahl Beschwerdebilder) verifizieren
 *   4. Impressum: Inhaber-/Steuerdaten beider Praxen eingetragen (mit Kunde bestätigt);
 *      Datenschutz rechtlich prüfen lassen, Beruf "Physiotherapeut" final bestätigen
 * ========================================================================== */

/** Allgemeine Seiten-/Kontaktdaten */
export const site = {
  name: "Manus-Therapie Akademie",
  email: "info@manus-therapie.de",
  // Telefon erscheint BEWUSST nicht auf der Startseite – nur im Impressum
  // (siehe legal.inhaber[].telefon). Daher hier kein phone-Feld.
  // TODO PLATZHALTER: finale Domain bestätigen
  website: "www.manus-therapie.de",
  standort: "Seminare bundesweit & online",
  // Social-Profile für Startseite (Kontakt) & Footer.
  // TODO PLATZHALTER: echte Profil-URLs eintragen. Leer ("") = Icon wird ausgeblendet.
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },
} as const;

/** Aktuelles Seminar-Angebot */
export const seminar = {
  level: "Basic",
  title: "Manus-Therapie Basic",
  subtitle: "Fundiertes Körperwissen in 2 Tagen – sofort anwendbar",
  // Seminartermin – mit Kunde bestätigt (2 Tage, November 2026)
  dates: "2 Tage – 2. bis 3. November 2026",
  // Kurzform für das Auswahlfeld im Kontaktformular (mit Termin synchron halten)
  datesShort: "2.–3. Nov. 2026",
  participants: "Max. 15 Personen",
  // TODO: Frühbucher-Stichtag (15. Juli) und Rabattbetrag mit Kunde bestätigen
  fruehbucher: "10% Frühbucherrabatt bis 15. Juli – nur 675 € netto (803,25 € brutto)",
  // TODO PLATZHALTER: Veranstaltungsort mit Kunde bestätigen
  location: "Fortbildungsakademie Plesch, Goltsteinstraße 91, 50968 Köln",
  cert: "Zertifikat inklusive",
  // TODO PLATZHALTER: Preise prüfen
  price: "750",
  priceGross: "892,50",
  topics: [
    "Körperlehre & Beschwerdebilder verstehen",
    "Wirbelsäulen- & Rückenwissen praxisnah",
    "Manus-Therapie Techniken & Grifftechniken",
    "Medizinisches Aufbautraining Grundlagen",
    "Rechtssichere Wellnesspositionierung",
  ],
  image: "/images/seminar_group_learning.jpg",
} as const;

/**
 * Kennzahlen für Hero & "Über uns".
 * TODO PLATZHALTER: alle Zahlen mit echten Werten des Kunden verifizieren.
 */
export const stats = {
  behandlungen: "1000+",
  // Hinweis: Es werden aktuell 5 Beschwerdebilder dargestellt (früher stand hier
  // fälschlich "9"). Mit Kunde abstimmen, sobald die finale Anzahl feststeht.
  krankheitsbilder: "5",
  jahre: "15 Jahre",
  weiterempfehlung: "98%",
  vorkenntnisse: "0",
} as const;

/**
 * Rechtliche Pflichtangaben für Impressum & Datenschutz.
 *
 * Die Manus-Therapie Akademie ist KEINE eigene Gesellschaft, sondern eine
 * Kooperation zweier selbstständiger Einzelunternehmer (freiberuflich). Beide
 * werden im Impressum vollständig mit Anschrift, Telefon und Steuerangaben
 * ausgewiesen (§ 5 DDG, vormals § 5 TMG). Abgerechnet wird jeweils über das
 * Einzelunternehmen des dozierenden Inhabers.
 *
 * Quelle der Daten: Impressen der bestehenden Praxen (chiroconcept.de /
 * integralreich.de) – mit Kunde abgeglichen.
 */
export const legal = {
  betreiber: "Manus-Therapie Akademie",
  email: "info@manus-therapie.de",
  land: "Deutschland",

  /** Beide Inhaber/Dozenten als Einzelunternehmer – im Impressum vollständig gelistet. */
  inhaber: [
    {
      name: "Eduard Birt",
      rolle: "Gründer & Leitender Dozent",
      // TODO: Berufsbezeichnung "Physiotherapeut" mit Kunde final bestätigen
      beruf: "Physiotherapeut",
      unternehmen: "ChiroConcept Birt – Praxis für Physiotherapie",
      strasse: "Kalver Straße 70",
      plzOrt: "58511 Lüdenscheid",
      telefon: "+49 2351 379 51 30",
      // Eduard Birt führt eine Steuernummer (keine USt-IdNr.)
      steuer: { label: "Steuernummer", wert: "332/5014/2239" },
    },
    {
      name: "Leo Reich",
      rolle: "Gründer & Dozent",
      // TODO: Berufsbezeichnung "Physiotherapeut" mit Kunde final bestätigen
      beruf: "Physiotherapeut",
      unternehmen: "Integral-Therapie",
      strasse: "Nordwall 36",
      plzOrt: "57439 Attendorn",
      telefon: "+49 2722 5569940",
      steuer: { label: "USt-IdNr. gemäß § 27a UStG", wert: "DE53914580624" },
    },
  ],

  /**
   * Inhaltlich verantwortliche Stelle (§ 18 Abs. 2 MStV) & datenschutzrechtlich
   * Verantwortlicher. Default: Leitender Dozent Eduard Birt – mit Kunde abstimmen.
   */
  verantwortlich: {
    name: "Eduard Birt",
    strasse: "Kalver Straße 70",
    plzOrt: "58511 Lüdenscheid",
    telefon: "+49 2351 379 51 30",
  },

  // TODO PLATZHALTER: Datum der letzten Aktualisierung der Datenschutzerklärung
  datenschutzStand: "Juni 2026",
} as const;
