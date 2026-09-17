# BBIT Evening Class Portal 🎓

A modern, responsive, and user-friendly academic portal designed specifically for the **Bachelor of Business Information Technology (BBIT) Evening** program. Built with clean HTML5, modern CSS (with dark/light study modes), and modular JavaScript.

---

## 🌟 Key Features

1. **All 8 Semesters Covered**:
   - Complete 8-semester curriculum balancing Information Technology and Business Management.
   - Interactive semester tabs and summary dashboard showing course counts, credits, and slide tallies.
2. **Course & Subject Resource Breakdown**:
   - Organized into **Lecture Slides** (PPTX, PDF) and **Class Notes & Resources** (Books, Cheatsheets, Past Papers, Drive links).
   - Direct "View" and "Download" actions with colored format badges (`PDF`, `PPTX`, `Drive`, `DOCX`, `Code`).
3. **CR Announcements / Notice Board**:
   - Real-time notice board with priority tags (`🚨 Urgent`, `📅 Exam`, `⏳ Deadline`, `💡 General`).
   - One-click **"Copy Notice"** to clipboard formatted with timestamps for quick pasting into WhatsApp.
   - **"Share to WhatsApp"** direct button.
4. **Global Real-Time Search (`Ctrl + K` or `/`)**:
   - Instantly searches across course names, course codes, topic names, and individual slide titles with match highlighting.
5. **Dark & Light Mode Toggle**:
   - Tailored sleek dark theme for late-night studying and crisp light theme for daytime reading.
   - Saves student preference in `localStorage`.
6. **Zero Dependencies & Zero Build Steps**:
   - No `npm install`, Node.js, or complex compilation required.
   - Works immediately out of the box in any web browser.

---

## 🚀 How to Run Locally

Simply double-click `index.html` in your file explorer, or open it with any web browser (Chrome, Edge, Firefox, Safari).

---

## 📝 How the Class Representative (CR) Can Update Data

All data is cleanly separated in `js/data.js`. You don't need any programming experience to update it.

### 1. Adding a New Announcement
Open `js/data.js` and locate the `announcements` array:

```javascript
{
  id: "ann-5",
  title: "📢 Midterm Exam Rescheduled",
  category: "Exam", // Options: "Urgent", "Exam", "Deadline", "General"
  date: "October 02, 2026",
  pinned: true, // true to pin at top, false otherwise
  content: "The Web Technologies midterm has been moved to Room 204 at 6:00 PM.",
  tag: "Exam Update",
  author: "Class Representative"
}
```

### 2. Adding Lecture Slides to a Course
Locate the desired semester and course in `js/data.js`, then append a new item into its `slides` array:

```javascript
{
  id: "cs401-s7",
  title: "Week 7: Node.js & REST API Architecture",
  topic: "Backend Development",
  format: "PPTX", // Options: "PPTX", "PDF"
  date: "Oct 12",
  size: "4.8 MB",
  url: "https://drive.google.com/your-slide-link" // Paste your Google Drive link here
}
```

### 3. Adding Google Drive Folders or Past Papers
In the course's `resources` array:

```javascript
{
  id: "cs401-r5",
  title: "Final Exam Solved Past Papers (2020-2025)",
  type: "Past Papers",
  format: "PDF", // Options: "Drive", "PDF", "DOCX", "Book", "Code"
  size: "12.4 MB",
  url: "https://drive.google.com/your-drive-file"
}
```

### 4. Updating CR Contact & WhatsApp Group Link
In `js/data.js`, edit `portalInfo`:
```javascript
portalInfo: {
  crName: "Your Name (CR)",
  crPhone: "+92 300 0000000",
  whatsappGroupLink: "https://chat.whatsapp.com/your-actual-group-invite",
  driveFolderUrl: "https://drive.google.com/your-main-drive-folder"
}
```

---

## 🌐 How to Host Online for Free (For Classmates on Mobile)

### Option A: GitHub Pages (Recommended - 2 minutes)
1. Create a free repository on GitHub named `bbit-class-portal`.
2. Upload the files (`index.html`, `css/`, `js/`, `assets/`, `README.md`).
3. Go to **Settings > Pages > Branch: main / root > Save**.
4. Your portal will be live at `https://<your-username>.github.io/bbit-class-portal/`!

### Option B: Netlify Drop (30 seconds)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the `BBIT` folder.
3. Netlify will give you a live free URL instantly (e.g. `bbit-evening.netlify.app`).
