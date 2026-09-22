export default function ScorePanel({ scores, total }) {
  const scoreValues = scores ?? {};
  const australianEducationScore =
    Number(scoreValues.australianEdu) || 0;
  const regionalStudyScore = Number(scoreValues.regionalStudy) || 0;

  return (
    <>
      <style>{`
        /* Preserve the current xl layout at 1280px and wider. */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .score-panel-wrapper {
            width: 740px;
            height:580px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 0;
          }

          .score-panel-wrapper .score-panel {
            width: 100% !important;
          }
        }

        @media (min-width: 641px) and (max-width: 1023px) {
          .score-panel-wrapper {
            width: 100%;
            max-width: 740px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 0;
          }

          .score-panel-wrapper .score-panel {
            width: 100% !important;
            min-height: 500px;
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
            width: 92%;
            max-width: none;
            margin-left: auto;
            margin-right: auto;
            margin-top: 0;
          }

          .score-panel-wrapper .score-panel {
            width: 100% !important;
            min-height: 700px;
            padding-bottom: 40px;
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
      <div className="score-panel-wrapper ml-250 -mt-192 lg:mb-42 mb-55">
      <div
        className="score-panel"
        style={{
          width: "320px",
          minHeight: "500px",
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
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <tbody>
          <ScoreRow title="Visa Subclass" value={scoreValues.visa} />
          <ScoreRow title="Age" value={scoreValues.age} />
          <ScoreRow title="English Language" value={scoreValues.english} />
          <ScoreRow title="Overseas Work Experience" value={scoreValues.overseas} />
          <ScoreRow
            title="Australian Work Experience"
            value={scoreValues.australian}
          />
          <ScoreRow
            title="Educational Qualifications"
            value={scoreValues.education}
          />
          <ScoreRow
            title="Australian Educational Qualification"
            value={australianEducationScore + regionalStudyScore}
          />
          <ScoreRow
            title="Specialist Educational Qualification"
            value={scoreValues.specialEdu}
          />
          <ScoreRow
            title="Accredited Community Language"
            value={scoreValues.community}
          />
          <ScoreRow
            title="Partner Qualifications"
            value={scoreValues.partnerQualification}
          />
          <ScoreRow
            title="Professional Year in Australia"
            value={scoreValues.professional}
          />
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
