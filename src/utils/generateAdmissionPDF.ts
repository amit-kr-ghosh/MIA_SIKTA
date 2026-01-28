import jsPDF from "jspdf";

/* ---------------- TYPES ---------------- */

type AdmissionData = {
  branch?: string;
  session?: string;
  class?: string;
  student_name?: string;
  dob?: string;
  gender?: string;
  caste?: string;
  religion?: string;

  father_name?: string;
  father_qualification?: string;
  father_occupation?: string;
  father_income?: number | null;

  mother_name?: string;
  mother_qualification?: string;
  mother_occupation?: string;
  mother_income?: number | null;

  mobile_number?: string;
  contact_number?: string;
  email?: string;

  present_address?: string;
  permanent_address?: string;

  guardian?: string;
};

/* ---------------- HELPERS ---------------- */

const safe = (v: any) =>
  v === null || v === undefined || v === "" ? "N/A" : String(v);

/* ---------------- PDF ---------------- */

export function generateAdmissionPDF(
  data: AdmissionData,
  photoUrl?: string
) {
  const doc = new jsPDF("p", "mm", "a4");

  const PAGE_W = 210;
  const M = 15;

  const PHOTO_W = 30;
  const PHOTO_H = 40;
  const PHOTO_X = PAGE_W - M - PHOTO_W;
  const CONTENT_X = M;

  const LH = 6;

  /* ---------- COMMON PAGE RENDER ---------- */
  const renderPage = (copyLabel: string) => {
    let y = 12;

    /* HEADER */
    doc.addImage("/images/logo/logo1.png", "PNG", M, y, 22, 22);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.text(
      "MOTHER'S INTERNATIONAL ACADEMY",
      PAGE_W / 2,
      y + 8,
      { align: "center" }
    );

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("CBSE-affiliated School", PAGE_W / 2, y + 14, { align: "center" });

    doc.setFontSize(11);
    doc.text(`Admission Application Form – ${copyLabel}`, PAGE_W / 2, y + 22, {
      align: "center",
    });

    doc.line(M, y + 26, PAGE_W - M, y + 26);
    y += 32;

    /* PHOTO */
    doc.rect(PHOTO_X, y, PHOTO_W, PHOTO_H);
    doc.setFontSize(8);
    doc.text("Photograph", PHOTO_X + PHOTO_W / 2, y + PHOTO_H + 4, {
      align: "center",
    });

    if (photoUrl) {
      doc.addImage(
        photoUrl,
        "JPEG",
        PHOTO_X + 1,
        y + 1,
        PHOTO_W - 2,
        PHOTO_H - 2
      );
    }

    /* ROW HELPER */
    const row = (label: string, value: any, yPos: number) => {
      doc.setFont("helvetica", "bold");
      doc.text(label, CONTENT_X, yPos);
      doc.setFont("helvetica", "normal");
      doc.text(safe(value), CONTENT_X + 38, yPos);
    };

    /* BASIC */
    row("Branch:", data.branch, y);
    row("Session:", data.session, y + LH);
    row("Class:", data.class, y + LH * 2);
    y += LH * 4;

    row("Student Name:", data.student_name, y);
    row("DOB:", data.dob, y + LH);
    row("Gender:", data.gender, y + LH * 2);
    y += LH * 4;

    row("Religion:", data.religion, y);
    row("Caste:", data.caste, y + LH);
    y += LH * 3;

    /* FATHER */
    doc.setFont("helvetica", "bold");
    doc.text("Father's Details", CONTENT_X, y);
    y += LH;

    row("Name:", data.father_name, y);
    row("Qualification:", data.father_qualification, y + LH);
    row("Occupation:", data.father_occupation, y + LH * 2);
    row(
      "Income:",
      data.father_income ? `Rs. ${data.father_income}` : "N/A",
      y + LH * 3
    );
    y += LH * 5;

    /* MOTHER */
    doc.setFont("helvetica", "bold");
    doc.text("Mother's Details", CONTENT_X, y);
    y += LH;

    row("Name:", data.mother_name, y);
    row("Qualification:", data.mother_qualification, y + LH);
    row("Occupation:", data.mother_occupation, y + LH * 2);
    row(
      "Income:",
      data.mother_income ? `Rs. ${data.mother_income}` : "N/A",
      y + LH * 3
    );
    y += LH * 5;

    /* CONTACT */
    doc.setFont("helvetica", "bold");
    doc.text("Contact Information", CONTENT_X, y);
    y += LH;

    row("Mobile:", data.mobile_number, y);
    row("Alternate:", data.contact_number, y + LH);
    row("Email:", data.email, y + LH * 2);
    row("Guardian:", data.guardian, y + LH * 3);
    y += LH * 5;

    /* ADDRESS – NO BOXES */
    doc.setFont("helvetica", "bold");
    doc.text("Present Address:", CONTENT_X, y);
    doc.setFont("helvetica", "normal");
    doc.text(safe(data.present_address), CONTENT_X, y + LH, {
      maxWidth: PAGE_W - M * 2,
    });
    y += LH * 3;

    doc.setFont("helvetica", "bold");
    doc.text("Permanent Address:", CONTENT_X, y);
    doc.setFont("helvetica", "normal");
    doc.text(safe(data.permanent_address), CONTENT_X, y + LH, {
      maxWidth: PAGE_W - M * 2,
    });
    y += LH * 4;

    /* DECLARATION */
    doc.setFont("helvetica", "bold");
    doc.text("Declaration", CONTENT_X, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(
      "I hereby declare that the information provided above is true and correct to the best of my knowledge.",
      CONTENT_X,
      y + 6,
      { maxWidth: PAGE_W - M * 2 }
    );

    y += 20;
    doc.line(M, y, M + 60, y);
    doc.line(PAGE_W - M - 60, y, PAGE_W - M, y);
    doc.text("Parent / Guardian Signature", M, y + 6);
    doc.text("School Authority", PAGE_W - M - 60, y + 6);
  };

  /* ---------- PAGE 1: SCHOOL COPY ---------- */
  renderPage("School Copy");

  /* ---------- PAGE 2: PARENT COPY ---------- */
  doc.addPage();
  renderPage("Parent Copy");

  /* ---------- PREVIEW ---------- */
  const blob = doc.output("blob");
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");

  /* ---------- DOWNLOAD ---------- */
  doc.save(`Admission_${safe(data.student_name)}.pdf`);
}
