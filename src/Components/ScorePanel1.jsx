export default function ScorePanel({ scores, total }) {
  const scoreValues = scores ?? {};

  const ageScore = Number(scoreValues.age ?? 0) || 0;
  const experienceScore =
    Number(
      scoreValues.experience ??
        scoreValues.overseas ??
        scoreValues.workExperience ??
        0,
    ) || 0;
  const languageScore =
    Number(scoreValues.language ?? scoreValues.english ?? 0) || 0;
  const languageProficiencyType = String(
    scoreValues.languageproficiency ??
      scoreValues.languageType ??
      "IELTS",
  )
    .trim()
    .toLowerCase();
  const languageProficiencyScore =
    languageProficiencyType === "ielts"
      ? Number(
          scoreValues.ielts ??
            scoreValues.ieltsScore ??
            scoreValues.languageProficiency ??
            scoreValues.language ??
            0,
        ) || 0
      : Number(
          scoreValues.otherProficiency ??
            scoreValues.languageProficiency ??
            scoreValues.language ??
            0,
        ) || 0;
  const educationScore = Number(scoreValues.education ?? 0) || 0;
  const adaptabilityScore = Number(scoreValues.adaptability ?? 0) || 0;

  return (
    <>
      <style>{`
        /* Preserve the current xl layout at 1280px and wider. */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .score-panel-wrapper {
            width: min(740px, calc(100% - 32px));
            height: auto;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-top: 0 !important;
          }

          .score-panel-wrapper .score-panel {
            width: 100% !important;
          }
        }

        @media (min-width: 641px) and (max-width: 1023px) {
          .score-panel-wrapper {
            width: calc(100% - 32px);
            max-width: 740px;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-top: 0 !important;
          }

          .score-panel-wrapper .score-panel {
            width: 100% !important;
            min-height: 400px;
          }

          .score-panel-wrapper .score-table {
            table-layout: fixed;
          }

          .score-panel-wrapper .td-left {
            white-space: normal !important;
            padding-right: 12px;
          }

          .score-panel-wrapper .td-right {
            width: 56px;
          }
        }

        @media (max-width: 640px) {
          .score-panel-wrapper {
            width: calc(100% - 32px);
            max-width: none;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-top: 0 !important;
          }

          .score-panel-wrapper .score-panel {
            width: 100% !important;
            min-height: 400px;
            padding: 18px 16px 24px !important;
          }

          .score-panel-wrapper .score-table {
            table-layout: fixed;
          }

          .score-panel-wrapper .td-left {
            white-space: normal !important;
            padding-right: 8px;
          }

          .score-panel-wrapper .td-right {
            width: 44px;
          }
        }
      `}</style>
      <div className="score-panel-wrapper ml-250 -mt-167 lg:mb-42 mb-55">
      <div
        className="score-panel"
        style={{
          width: "320px",
          minHeight: "400px",
          boxSizing: "border-box",
          padding: "22px 22px 24px",
          border: "1px solid #cad5e2",
          borderRadius: "30px",
          backgroundColor: "#fff",
        }}
      >
        <div
          className="score-summary"
          style={{
            height: "100px",
            marginBottom: "27px",
            paddingTop: "22px",
            boxSizing: "border-box",
            borderRadius: "16px",
            backgroundColor: "#dff2ff",
            textAlign: "center",
          }}
        >
        <div style={{ color: "#009dcc", fontSize: "17px", lineHeight: "26px" }}>
          Total Score
        </div>
        <div style={{ color: "#006b88", fontSize: "29px", lineHeight: "34px" }}>
          {total ?? 0}
        </div>
        </div>

      <table
        className="score-table"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          height: "220px",
          tableLayout: "fixed",
        }}
      >
        <tbody>
          {[
            { title: "Age", value: ageScore },
            { title: "Experience", value: experienceScore },
            { title: "Language", value: languageScore },
            {
              title: "Language Proficiency",
              value: languageProficiencyScore,
            },
            { title: "Education", value: educationScore },
            { title: "Adaptability", value: adaptabilityScore },
          ].map((row) => (
            <ScoreRow key={row.title} title={row.title} value={row.value} />
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </>
  );
}

function ScoreRow({ title, value }) {
  return (
    <tr style={{ height: "27px" }}>
      <td
        className="td-left section-title"
        style={{
          color: "#91a5c2",
          fontSize: "15px",
          fontWeight: 600,
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </td>
      <td
        className="td-right rs-vl"
        style={{
          color: "#526985",
          fontSize: "15px",
          fontWeight: 600,
          textAlign: "right",
        }}
      >
        {value ?? 0}
      </td>
    </tr>
  );
}
