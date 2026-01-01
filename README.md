# Mothers International Academy - CBSE +2 School Website

A full-stack modern school website built with React, Node.js, Express, and Supabase.

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Axios** for API calls
- **Lucide React** for icons

### Backend
- **Node.js** with Express
- **Supabase** for database (PostgreSQL)
- **Supabase Storage** for file uploads
- **Multer** for handling multipart/form-data

### Design
- Color Scheme: Blue (#3b82f6), Teal (#14b8a6), Yellow (#eab308)
- Fonts: Poppins (headings), Inter (body)
- Modern, responsive, mobile-first design

## Features

### Pages
1. **Home** - Hero section, highlights, CTAs
2. **About Us** - Mission, vision, principal's message
3. **Academics** - Primary, Secondary, Senior Secondary sections with streams
4. **Facilities** - Library, labs, sports, transportation, safety
5. **Gallery** - Image grid with lightbox modal
6. **Achievements** - Student achievements and awards
7. **Notices** - Notice board with important announcements
8. **Contact** - Contact form with location map
9. **Admissions** - Complete admission form with photo upload

### Admission Form Features
- Comprehensive student information collection
- Parent information (Father & Mother)
- Contact and address details
- Photo upload (JPG, JPEG, PNG, max 2MB)
- Form validation
- Data stored in Supabase
- Photos stored in Supabase Storage

## Project Structure

```
project/
├── src/                        # Frontend React application
│   ├── components/            # Reusable components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Footer.tsx        # Footer component
│   │   └── Layout.tsx        # Page layout wrapper
│   ├── pages/                # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Academics.tsx
│   │   ├── Facilities.tsx
│   │   ├── Gallery.tsx
│   │   ├── Achievements.tsx
│   │   ├── Notices.tsx
│   │   ├── Contact.tsx
│   │   └── Admissions.tsx   # Main admission form
│   ├── App.tsx               # Route configuration
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── backend/                  # Express API server
│   ├── config/
│   │   └── supabase.js      # Supabase client
│   ├── routes/
│   │   └── admissions.js    # Admission form API routes
│   ├── server.js            # Express server
│   └── package.json
└── .env                      # Environment variables

## Installation & Setup

### Prerequisites
- Node.js 18+ installed
- Supabase account (already configured)

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# The backend uses the same node_modules from root
```

### 2. Environment Variables

The `.env` file is already configured with:
```
VITE_SUPABASE_URL=https://ugjdvcoeegpnsnnmlsps.supabase.co
VITE_SUPABASE_ANON_KEY=<your-key>
VITE_API_URL=http://localhost:5000
```

### 3. Database Setup

The Supabase database is already configured with:
- `admissions_form` table with all required fields
- `admission-photos` storage bucket
- Row Level Security (RLS) policies
- Public access for form submissions

### 4. Run the Application

#### Start the Backend Server
```bash
# In a terminal
cd backend
node server.js
# Server runs on http://localhost:5000
```

#### Start the Frontend Development Server
```bash
# In another terminal (from project root)
npm run dev
# Frontend runs on http://localhost:5173
```

### 5. Build for Production

```bash
npm run build
# Creates optimized production build in dist/
```

## API Endpoints

### Admission Form APIs

**Base URL:** `http://localhost:5000/api`

#### POST /admissions-form
Submit a new admission application
- **Body:** FormData with student details and photo
- **Response:** Success message with created record

#### GET /admissions-form
Get all admission applications
- **Response:** Array of all applications

#### GET /admissions-form/:id
Get a specific admission application
- **Response:** Single application object

#### PUT /admissions-form/:id
Update application status
- **Body:** `{ status: "New" | "Under Review" | "Approved" | "Rejected" }`
- **Response:** Updated application

#### DELETE /admissions-form/:id
Delete an admission application
- **Response:** Success message

## Database Schema

### admissions_form Table

| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| branch | text | School branch (fixed) |
| session | text | Academic session |
| class | text | Class applying for |
| student_name | text | Student full name |
| dob | date | Date of birth |
| gender | text | Gender |
| caste | text | Caste category |
| religion | text | Religion |
| father_name | text | Father's name |
| father_qualification | text | Father's education |
| father_occupation | text | Father's occupation |
| father_occupation_details | text | Occupation details |
| father_income | numeric | Monthly income |
| mother_name | text | Mother's name |
| mother_qualification | text | Mother's education |
| mother_occupation | text | Mother's occupation |
| mother_occupation_details | text | Occupation details |
| mother_income | numeric | Monthly income |
| mobile_number | text | Primary contact (10 digits) |
| contact_number | text | Secondary contact |
| email | text | Email address |
| present_address | text | Current address |
| permanent_address | text | Permanent address |
| siblings | text | Sibling information |
| guardian | text | Guardian details |
| photo_url | text | Uploaded photo URL |
| status | text | Application status (default: 'New') |
| created_at | timestamptz | Submission timestamp |

## Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Backend (Vercel Serverless / Render / Railway)
1. Deploy Express server to your preferred platform
2. Update `VITE_API_URL` in frontend .env to production URL
3. Ensure CORS is configured for production domain

## Features Highlights

### Design
- Modern, bright, student-friendly interface
- Smooth animations with Framer Motion
- Fully responsive (mobile-first)
- Soft gradients and rounded corners
- Professional color scheme

### User Experience
- Intuitive navigation
- Fast page loads
- Image optimization
- Form validation
- Success/error feedback
- Loading states

### Security
- Row Level Security (RLS) enabled
- File upload validation
- Input sanitization
- Secure file storage
- Environment variables for sensitive data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Mothers International Academy. All rights reserved.

## Support

For technical support or inquiries:
- Email: info@mothersinternational.edu
- Phone: +91 98765 43210
