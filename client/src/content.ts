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
 *   1. Kontakt: echte Telefonnummer + E-Mail bestätigen
 *   2. Seminar: Termin 04.–06.11.2026 bestätigt; Frühbucher-Stichtag,
 *      Preise und Veranstaltungsort noch prüfen
 *   3. Statistiken (1000+, 15 Jahre, 98 %, Anzahl Beschwerdebilder) verifizieren
 *   4. Impressum/Datenschutz: Inhaber, Anschrift, Telefon, USt-IdNr. eintragen
 *      (TMG §5 / DSGVO — Pflicht!) und Datenschutz rechtlich prüfen lassen
 * ========================================================================== */

/** Allgemeine Seiten-/Kontaktdaten */
export const site = {
  name: "Manus-Therapie Akademie",
  // TODO PLATZHALTER: echte E-Mail-Adresse bestätigen
  email: "info@manus-therapie.de",
  // TODO PLATZHALTER: echte Telefonnummer eintragen
  phone: "+49 (0) XXX XXX XXXX",
  // tel:-Link — solange null, wird die Nummer als reiner Text (kein Link) gezeigt.
  // TODO PLATZHALTER: z. B. "tel:+4922112345678"
  phoneHref: null as string | null,
  // TODO PLATZHALTER: finale Domain bestätigen
  website: "www.manus-therapie.de",
  standort: "Seminare bundesweit & online",
} as const;

/** Aktuelles Seminar-Angebot */
export const seminar = {
  level: "Basic",
  title: "Manus-Therapie Basic",
  subtitle: "Fundiertes Körperwissen in 3 Tagen – sofort anwendbar",
  // Seminartermin – mit Kunde bestätigt (November 2026)
  dates: "3 Tage – 04. bis 06. November 2026",
  // Kurzform für das Auswahlfeld im Kontaktformular (mit Termin synchron halten)
  datesShort: "04.–06. Nov. 2026",
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
 * TODO PLATZHALTER: Alle [eckigen Klammern] vor Go-Live ersetzen (TMG §5 / DSGVO).
 */
export const legal = {
  betreiber: "Manus-Therapie Akademie",
  inhaber: "[Vorname Nachname]",
  strasse: "[Straße und Hausnummer]",
  plzOrt: "[PLZ Ort]",
  land: "Deutschland",
  telefon: "[Ihre Telefonnummer]",
  email: "[Ihre E-Mail-Adresse]",
  ustId: "[Ihre USt-IdNr.]",
  // Verantwortlich nach § 55 Abs. 2 RStV (häufig identisch mit dem Inhaber)
  rstvName: "[Vorname Nachname]",
  rstvStrasse: "[Straße und Hausnummer]",
  rstvPlzOrt: "[PLZ Ort]",
  // TODO PLATZHALTER: Datum der letzten Aktualisierung der Datenschutzerklärung
  datenschutzStand: "Juni 2026",
} as const;
