import React from "react";

export default function CTA() {
  const openPDF = () => {
    window.open("/cm_resume.pdf", "_blank");
  };
  return (
    <div className="cta">
      <button onClick={() => openPDF()} className="btn resume-btn">
        Download Resume
      </button>
      <a href="/#contact" className="btn btn-primary">
        Contact
      </a>
    </div>
  );
}
