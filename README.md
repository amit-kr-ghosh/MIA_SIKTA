# 🏫 Mother’s International Academy (MIA)

A **full-stack school website and admin panel** built for **Mother’s International Academy (MIA)** featuring online admissions, secure admin access, professional PDF generation, and role-based controls.

---

## 🌐 Project Overview

This project consists of **two major parts**:

### 1️⃣ Public School Website

- School information pages
- Online admission form
- Notices, gallery, achievements
- Mobile-friendly, modern UI

### 2️⃣ Admin Panel

- Secure admin login
- View, edit, delete admission applications
- Admission detail modal
- Professional admission PDF generation
- Role-based admin protection

---

## 🧱 Tech Stack

### Frontend

- React (TypeScript)
- Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons
- React Router DOM

### Backend / Services

- Supabase
  - Authentication (Email + Password)
  - PostgreSQL Database
  - Storage (Student photos)
  - Row Level Security (RLS)

### PDF

- jsPDF
- Single-page professional layout
- Two copies in one PDF (School + Parent)
- Auto preview + auto download

---

## 📂 Folder Structure (ACTUAL)

public/
└── images/
├── gallery/
├── home/
├── logo/
└── videos/

src/
├── admin/
│ ├── pages/
│ │ ├── AddNotice.tsx
│ │ ├── AdmissionDetails.tsx
│ │ ├── ContactDetails.tsx
│ │ ├── Dashboard.tsx
│ │ ├── EditNotice.tsx
│ │ ├── Notices.tsx
│ │ ├── UpdateAdmissions.tsx
│ │ └── UpdateAdmissionsList.tsx
│ └── components/
│ ├── LightRays.tsx
│ ├── Footer.tsx
│ ├── Header.tsx
│ ├── Layout.tsx
│ ├── LoadingScreen.tsx
│ └── ScrollToTop.tsx
│
├── lib/
│ └── supabaseClient.ts
│
├── pages/
│ ├── About.tsx
│ ├── Academics.tsx
│ ├── Achievements.tsx
│ ├── AdminLogin.tsx
│ ├── AdmissionInstructions.tsx
│ ├── Admissions.tsx
│ ├── Contact.tsx
│ ├── Facilities.tsx
│ ├── Gallery.tsx
│ ├── Home.tsx
│ ├── Notices.tsx
│ └── Spotlight.tsx
│
├── routes/
│ └── AdminProtectedRoute.tsx
│
├── utils/
│ └── generateAdmissionPDF.ts
│
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts

.env

yaml
Copy code

---

## 🌍 Public Website Routes

| Route           | Page                  |
| --------------- | --------------------- |
| `/`             | Home                  |
| `/about`        | About                 |
| `/academics`    | Academics             |
| `/facilities`   | Facilities            |
| `/gallery`      | Gallery               |
| `/achievements` | Achievements          |
| `/notices`      | Notices               |
| `/contact`      | Contact               |
| `/admissions`   | Online Admission Form |

---

## 📝 Admission Form (`/admissions`)

### Features

- Branch selection:
  - Mother's International Academy
  - Vatika Vihar Play School
- Session auto-filled (2025–2026)
- Student, parent, contact, and address details
- Passport-size photo upload (≤ 2MB)
- Instruction modal before submission
- Fully responsive UI

### On Submit

1. Photo uploaded to **Supabase Storage**
2. Admission data saved in **`admissions_form`**
3. PDF preview opens automatically
4. PDF downloads automatically
5. Contains **2 copies in one file**
   - School Copy
   - Parent Copy

---

## 📄 Admission PDF (`generateAdmissionPDF.ts`)

### PDF Characteristics

- Single page per copy
- Two copies in the same PDF
- Fixed passport photo slot (no overlap)
- Clean text layout (no address boxes)
- Auto `"N/A"` for empty fields
- Declaration + signature space

### Sections

- School header & logo
- Student details
- Father & mother details
- Contact information
- Address section
- Declaration
- Signature placeholders

---

## 🗄️ Database (Supabase)

### Table: `admissions_form`

Includes:

- Student details
- Parent details
- Contact & address
- Guardian & siblings
- Photo URL
- Timestamp

> Structure is **fully aligned** with the admission form and admin panel views.

---

## 🔐 Admin System

### Admin Login

- Route: `/admin/login`
- Supabase email/password authentication
- Role check using `user_roles` table
- Only users with `role = admin` are allowed

### Admin Route Protection

- Implemented using `AdminProtectedRoute.tsx`
- Prevents unauthorized access
- Auto logout if role is invalid

---

## 🧑‍💼 Admin Panel Routes

| Route                         | Description         |
| ----------------------------- | ------------------- |
| `/admin/dashboard`            | Admin dashboard     |
| `/admin/admissions`           | View all admissions |
| `/admin/update-admission/:id` | Edit admission      |
| `/admin/notices`              | Manage notices      |
| `/admin/add-notice`           | Add notice          |
| `/admin/edit-notice/:id`      | Edit notice         |

---

## 📋 Admin Admission Management

### Features

- List view (latest first)
- Modal view with all details
- Scroll only inside modal
- Mobile-friendly layout
- Passport photo preview

### Actions

- 👁 View details
- ✏️ Edit admission
- 🗑 Delete admission (with confirmation)

---

## 🧾 Update Admission Page

- Pre-filled editable form
- Updates all database columns
- Clean grouped UI
- Save button with loading state

---

## 🎨 UI / UX Design

- **Public site:** clean, modern, school-friendly
- **Admin panel:** dark, professional, focused
- Fully responsive
- No layout breaks for long text
- Designed for non-technical staff

---

## 🌐 Footer & Social Media

Connected official links:

- 📸 Instagram – `Mother's_bhawra_`
- 📘 Facebook – Mother's International Academy
- ▶️ YouTube – `@miasikta`

---

## 🔐 Environment Variables

Create a `.env` file:

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key

yaml
Copy code

---

## 🚀 Deployment

### Frontend

- Vercel
- Netlify

### Backend

- Supabase (Auth, Database, Storage)

No separate backend server required.

---

## ✅ Project Status

**Production Ready**  
Secure, scalable, and designed for real school operations.

---
