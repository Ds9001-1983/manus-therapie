/*
 * DESIGN: "Organische Expertise" – Allgemeine Geschäftsbedingungen (AGB)
 * -----------------------------------------------------------------------------
 * Vom Kunden gelieferter AGB-Text (Stand: Juni 2026), originalgetreu eingesetzt.
 * Hinweis laut Kunde: rechtliche Prüfung durch einen Rechtsanwalt wird empfohlen.
 * OFFENER PUNKT: § 3 Abs. 4 nennt als Frühbucher-Stichtag "15. Juli 2025" – das
 * liegt vor dem Seminartermin (Nov. 2026) und ist vermutlich ein Tippfehler
 * (2026?). Wert bewusst originalgetreu übernommen, mit Kunde klären.
 */
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { legal, site } from "@/content";

const h2Style = {
  fontFamily: "'Cormorant Garamond', serif",
  color: "#0D0D0D",
  fontSize: "1.5rem",
  fontWeight: 700,
  marginBottom: "0.75rem",
} as const;

const p = "text-[#1A1A1A]/80 leading-relaxed";

export default function AGB() {
  return (
    <div className="min-h-screen bg-[#FAF6EE]">
      {/* Header */}
      <div className="bg-[#0D0D0D] py-16">
        <div className="container">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-[#E8D08A] text-sm mb-6 hover:text-white transition-colors cursor-pointer" style={{ fontFamily: "'Lato', sans-serif" }}>
              <ArrowLeft size={16} />
              Zurück zur Startseite
            </span>
          </Link>
          <h1
            className="text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
            }}
          >
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          <p className="text-white/60 mt-3 text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
            Manus-Therapie Akademie – Massage und Trainingstherapie · Stand: Juni 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16 max-w-3xl">
        <div className="prose prose-lg" style={{ fontFamily: "'Lato', sans-serif", color: "#1A1A1A" }}>

          <section className="mb-10">
            <h2 style={h2Style}>§ 1 Geltungsbereich</h2>
            <p className={p}>
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, die zwischen der
              Manus-Therapie Akademie (nachfolgend „Veranstalter") und den Teilnehmern (nachfolgend
              „Teilnehmer") über die Buchung und Teilnahme an Seminaren, Workshops und
              Weiterbildungsveranstaltungen geschlossen werden.
            </p>
            <p className={`${p} mt-3`}>
              Abweichende oder ergänzende Bedingungen des Teilnehmers werden nicht Vertragsbestandteil,
              es sei denn, der Veranstalter stimmt ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>§ 2 Vertragsschluss und Anmeldung</h2>
            <p className={p}>
              (1) Die Anmeldung zu einem Seminar erfolgt schriftlich per E-Mail, über das Kontaktformular
              auf der Website {site.website} oder postalisch.
            </p>
            <p className={`${p} mt-3`}>
              (2) Mit der Anmeldung gibt der Teilnehmer ein verbindliches Angebot zum Abschluss eines
              Teilnahmevertrages ab. Der Vertrag kommt zustande, sobald der Veranstalter die Anmeldung
              schriftlich per E-Mail bestätigt.
            </p>
            <p className={`${p} mt-3`}>
              (3) Die Seminarplätze sind begrenzt. Die Vergabe erfolgt in der Reihenfolge des Eingangs der
              Anmeldungen. Ein Anspruch auf Zulassung zu einem bestimmten Seminar besteht nicht.
            </p>
            <p className={`${p} mt-3`}>
              (4) Minderjährige können nur mit schriftlicher Einwilligung eines Erziehungsberechtigten
              teilnehmen.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>§ 3 Seminargebühren und Zahlungsbedingungen</h2>
            <p className={p}>
              (1) Die aktuellen Seminargebühren sind der jeweiligen Seminarbeschreibung auf der Website zu
              entnehmen. Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer (derzeit 19 %),
              sofern nicht anders angegeben.
            </p>
            <p className={`${p} mt-3`}>
              (2) Der aktuelle Preis für das Seminar Manus-Therapie Basic beträgt 750,00 € netto
              (892,50 € brutto inkl. 19 % MwSt.) pro Person für 2 Seminartage.
            </p>
            <p className={`${p} mt-3`}>
              (3) Die Seminargebühr ist nach Erhalt der Buchungsbestätigung und der Rechnung innerhalb von
              14 Tagen, spätestens jedoch 14 Tage vor Seminarbeginn, auf das angegebene Konto zu überweisen.
              Bei Anmeldungen, die weniger als 14 Tage vor Seminarbeginn eingehen, ist die Gebühr sofort fällig.
            </p>
            <p className={`${p} mt-3`}>
              (4) Bei Zahlung bis zum 15. Juli 2025 gilt ein Frühbucherrabatt von 10 %. Der Frühbucherpreis
              beträgt 675,00 € netto (803,25 € brutto inkl. 19 % MwSt.).
            </p>
            <p className={`${p} mt-3`}>
              (5) Im Falle des Zahlungsverzugs ist der Veranstalter berechtigt, Verzugszinsen in gesetzlicher
              Höhe zu berechnen.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>§ 4 Leistungsumfang</h2>
            <p className={p}>
              (1) Der Veranstalter erbringt die im Seminarprogramm beschriebenen Leistungen. Dazu gehören
              insbesondere:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5 text-[#1A1A1A]/80">
              <li>Seminarunterlagen in digitaler oder gedruckter Form</li>
              <li>Praktische Übungseinheiten unter Anleitung der Dozenten</li>
              <li>Teilnahmezertifikat nach erfolgreichem Abschluss des Seminars</li>
              <li>Getränke und Pausenverpflegung gemäß Seminarprogramm</li>
            </ul>
            <p className={`${p} mt-3`}>
              (2) Reise- und Übernachtungskosten sowie sonstige persönliche Ausgaben sind nicht im
              Seminarpreis enthalten und vom Teilnehmer selbst zu tragen.
            </p>
            <p className={`${p} mt-3`}>
              (3) Die im Seminar vermittelten Inhalte dienen der Weiterbildung im Bereich Wellness-Massage
              und Trainingstherapie. Die Leistungen stellen ausdrücklich keine medizinische, therapeutische
              oder heilkundliche Behandlung dar und ersetzen nicht den Besuch bei einem Arzt oder einer
              anderen medizinischen Fachkraft.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>§ 5 Stornierung durch den Teilnehmer</h2>
            <p className={p}>
              (1) Stornierungen müssen schriftlich per E-Mail an {legal.email} erfolgen. Maßgeblich ist der
              Eingang der Stornierungserklärung beim Veranstalter.
            </p>
            <p className={`${p} mt-3`}>(2) Es gelten folgende Stornierungsfristen und -gebühren:</p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#C9A84C]/12 text-left">
                    <th className="border border-[#C9A84C]/25 px-4 py-2 font-bold text-[#0D0D0D]">Stornierungszeitpunkt</th>
                    <th className="border border-[#C9A84C]/25 px-4 py-2 font-bold text-[#0D0D0D]">Stornierungsgebühr</th>
                  </tr>
                </thead>
                <tbody className="text-[#1A1A1A]/80">
                  <tr>
                    <td className="border border-[#C9A84C]/25 px-4 py-2">Mehr als 30 Tage vor Seminarbeginn</td>
                    <td className="border border-[#C9A84C]/25 px-4 py-2">Kostenfreie Stornierung</td>
                  </tr>
                  <tr>
                    <td className="border border-[#C9A84C]/25 px-4 py-2">15 bis 30 Tage vor Seminarbeginn</td>
                    <td className="border border-[#C9A84C]/25 px-4 py-2">25 % der Seminargebühr</td>
                  </tr>
                  <tr>
                    <td className="border border-[#C9A84C]/25 px-4 py-2">8 bis 14 Tage vor Seminarbeginn</td>
                    <td className="border border-[#C9A84C]/25 px-4 py-2">50 % der Seminargebühr</td>
                  </tr>
                  <tr>
                    <td className="border border-[#C9A84C]/25 px-4 py-2">7 Tage oder weniger vor Seminarbeginn</td>
                    <td className="border border-[#C9A84C]/25 px-4 py-2">100 % der Seminargebühr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={`${p} mt-3`}>
              (3) Dem Teilnehmer steht es frei, einen Ersatzteilnehmer zu benennen. In diesem Fall wird keine
              Stornierungsgebühr erhoben. Der Veranstalter ist über die Namensänderung rechtzeitig schriftlich
              zu informieren.
            </p>
            <p className={`${p} mt-3`}>
              (4) Bereits bezahlte Seminargebühren werden nach Abzug der anfallenden Stornierungsgebühren
              innerhalb von 14 Tagen zurückerstattet.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>§ 6 Stornierung oder Änderung durch den Veranstalter</h2>
            <p className={p}>
              (1) Der Veranstalter behält sich das Recht vor, ein Seminar aus wichtigem Grund abzusagen oder
              zu verschieben, insbesondere bei:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5 text-[#1A1A1A]/80">
              <li>Erkrankung oder unvorhergesehenem Ausfall eines Dozenten</li>
              <li>Zu geringer Teilnehmerzahl (weniger als 5 angemeldete Teilnehmer)</li>
              <li>Höherer Gewalt, behördlichen Anordnungen oder anderen unvorhersehbaren Ereignissen</li>
            </ul>
            <p className={`${p} mt-3`}>
              (2) Im Falle einer Absage durch den Veranstalter werden bereits gezahlte Seminargebühren
              vollständig und unverzüglich erstattet. Weitergehende Ansprüche des Teilnehmers, insbesondere
              auf Ersatz von Reise- oder Übernachtungskosten, sind ausgeschlossen, sofern die Absage nicht
              auf Vorsatz oder grober Fahrlässigkeit des Veranstalters beruht.
            </p>
            <p className={`${p} mt-3`}>
              (3) Änderungen des Seminarorts, der Seminarzeiten oder des Seminarinhalts, die aus wichtigem
              Grund notwendig werden und den Gesamtcharakter des Seminars nicht wesentlich verändern,
              berechtigen den Teilnehmer nicht zur kostenfreien Stornierung.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>§ 7 Teilnahmevoraussetzungen</h2>
            <p className={p}>
              (1) Das Seminar Manus-Therapie Basic richtet sich an Personen, die im Bereich Wellness-Massage
              tätig sind oder eine Tätigkeit in diesem Bereich anstreben. Medizinische Vorkenntnisse sind
              ausdrücklich nicht erforderlich.
            </p>
            <p className={`${p} mt-3`}>
              (2) Der Teilnehmer erklärt mit seiner Anmeldung, dass er körperlich in der Lage ist, an den
              praktischen Übungseinheiten teilzunehmen. Bei gesundheitlichen Einschränkungen ist vor der
              Anmeldung Rücksprache mit dem Veranstalter zu halten.
            </p>
            <p className={`${p} mt-3`}>
              (3) Der Veranstalter behält sich vor, Teilnehmer von der Teilnahme auszuschließen, die trotz
              Aufforderung den Seminarablauf erheblich stören oder gegen diese AGB verstoßen. In diesem Fall
              besteht kein Anspruch auf Rückerstattung der Seminargebühr.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>§ 8 Urheberrecht und Nutzungsrechte</h2>
            <p className={p}>
              (1) Alle im Rahmen des Seminars ausgehändigten oder gezeigten Unterlagen, Präsentationen,
              Skripte und sonstigen Materialien sind urheberrechtlich geschützt und Eigentum des Veranstalters.
            </p>
            <p className={`${p} mt-3`}>
              (2) Die Unterlagen dürfen ausschließlich für den persönlichen Gebrauch des Teilnehmers verwendet
              werden. Eine Vervielfältigung, Weitergabe, Veröffentlichung oder kommerzielle Nutzung – auch
              auszugsweise – ist ohne ausdrückliche schriftliche Genehmigung des Veranstalters nicht gestattet.
            </p>
            <p className={`${p} mt-3`}>
              (3) Ton-, Bild- und Videoaufnahmen während des Seminars sind ohne ausdrückliche Genehmigung des
              Veranstalters und der betroffenen Personen nicht gestattet.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>§ 9 Haftung</h2>
            <p className={p}>
              (1) Der Veranstalter haftet für Schäden, die durch Vorsatz oder grobe Fahrlässigkeit des
              Veranstalters, seiner gesetzlichen Vertreter oder Erfüllungsgehilfen verursacht wurden,
              unbeschränkt.
            </p>
            <p className={`${p} mt-3`}>
              (2) Bei leichter Fahrlässigkeit haftet der Veranstalter nur bei Verletzung wesentlicher
              Vertragspflichten (Kardinalpflichten). In diesem Fall ist die Haftung auf den vorhersehbaren,
              vertragstypischen Schaden begrenzt.
            </p>
            <p className={`${p} mt-3`}>
              (3) Die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit bleibt
              von den vorstehenden Haftungsbeschränkungen unberührt.
            </p>
            <p className={`${p} mt-3`}>
              (4) Der Veranstalter übernimmt keine Haftung für persönliche Gegenstände der Teilnehmer, die
              während des Seminars abhandenkommen oder beschädigt werden.
            </p>
            <p className={`${p} mt-3`}>
              (5) Die im Seminar vermittelten Inhalte dienen ausschließlich der Weiterbildung. Der Veranstalter
              übernimmt keine Haftung für Schäden, die durch unsachgemäße Anwendung der erlernten Techniken
              entstehen.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>§ 10 Datenschutz</h2>
            <p className={p}>
              (1) Der Veranstalter erhebt und verarbeitet personenbezogene Daten der Teilnehmer ausschließlich
              zur Durchführung des Vertragsverhältnisses und zur Organisation der Seminare. Die
              Datenverarbeitung erfolgt auf Grundlage der Datenschutz-Grundverordnung (DSGVO) und des
              Bundesdatenschutzgesetzes (BDSG).
            </p>
            <p className={`${p} mt-3`}>
              (2) Die Daten werden nicht an Dritte weitergegeben, es sei denn, dies ist zur Vertragserfüllung
              erforderlich oder gesetzlich vorgeschrieben.
            </p>
            <p className={`${p} mt-3`}>
              (3) Weitere Informationen zum Datenschutz sind in der{" "}
              <Link href="/datenschutz">
                <span className="text-[#9A7A2E] underline cursor-pointer">Datenschutzerklärung</span>
              </Link>{" "}
              auf {site.website} zu finden.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>§ 11 Widerrufsrecht für Verbraucher</h2>
            <p className={p}>
              (1) Verbraucher haben grundsätzlich ein Widerrufsrecht gemäß § 312g BGB. Bei Verträgen über
              Freizeitveranstaltungen (§ 312g Abs. 2 Nr. 9 BGB), zu denen auch Seminare und
              Weiterbildungsveranstaltungen gehören, besteht kein Widerrufsrecht, wenn der Vertrag einen
              spezifischen Termin für die Erbringung der Dienstleistung vorsieht.
            </p>
            <p className={`${p} mt-3`}>
              (2) Für Stornierungen gelten daher ausschließlich die in § 5 dieser AGB geregelten Bedingungen.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>§ 12 Schlussbestimmungen</h2>
            <p className={p}>
              (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>
            <p className={`${p} mt-3`}>
              (2) Erfüllungsort und ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag
              ist der Sitz des Veranstalters, sofern der Teilnehmer Kaufmann, juristische Person des
              öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
            </p>
            <p className={`${p} mt-3`}>
              (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit
              der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen Bestimmung tritt die gesetzliche
              Regelung.
            </p>
            <p className={`${p} mt-3`}>
              (4) Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch für die
              Aufhebung des Schriftformerfordernisses.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-[#C9A84C]/20">
            <p className="text-[#1A1A1A]/60 text-sm italic">
              Manus-Therapie Akademie – Massage und Trainingstherapie · Stand: Juni 2026
            </p>
            <p className="text-[#1A1A1A]/45 text-sm mt-2">
              Hinweis: Diese AGB wurden nach bestem Wissen und Gewissen erstellt. Eine rechtliche Überprüfung
              durch einen zugelassenen Rechtsanwalt wird empfohlen.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
