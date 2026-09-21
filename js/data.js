/**
 * BBIT Evening Class Portal - Data Store
 * =====================================
 * This file contains all the announcements, semester curriculum, courses,
 * lecture slides, and resource links.
 * 
 * NOTE FOR CR (Class Representative):
 * You can easily update this file to add new slides, edit announcements,
 * or add Google Drive links without writing any complex code!
 */

const PORTAL_DATA = {
  portalInfo: {
    title: "BBIT Evening Class Portal",
    subtitle: "Bachelor of Business Information Technology â€¢ Evening Program",
    batch: "Session 2023 - 2027",
    department: "Faculty of Computing & Business Information Systems",
    currentSemester: 1, // Default active semester
    crName: "CR - BBIT Evening",
    crPhone: "+923216416769",
    whatsappGroupLink: "https://chat.whatsapp.com/BbYU3D0f3rd1u5Ezdz4oF6",
    driveFolderUrl: "https://drive.google.com/drive/folders/sample-bbit-evening-hub"
  },

  announcements: [
    {
      id: "ann-1",
      title: "ðŸš¨ Revised Evening Timetable for Fall / Spring Semester",
      category: "Urgent",
      date: "September 15, 2026",
      timestamp: 1789516800000,
      pinned: true,
      content: "Please note that the Database Systems Lab scheduled on Wednesday has been moved from 5:30 PM to 6:45 PM in Lab 4 (Computing Block). Please arrive 10 minutes early for attendance.",
      tag: "Timetable Change",
      author: "Class Representative"
    },
    {
      id: "ann-2",
      title: "ðŸ“… Midterm Examination Date Sheet & Seating Plan Released",
      category: "Exam",
      date: "September 12, 2026",
      timestamp: 1789257600000,
      pinned: true,
      content: "The Midterm exams will commence from the 28th of this month. Evening sessions will run from 6:00 PM to 8:00 PM. Check your course portals and ensure clearance cards are stamped by the finance desk.",
      tag: "Midterms",
      author: "Examination Office / CR"
    },
    {
      id: "ann-3",
      title: "ðŸ“š Web Technologies & Operating Systems Assignment 1 Due Date",
      category: "Deadline",
      date: "September 10, 2026",
      timestamp: 1789084800000,
      pinned: false,
      content: "Submission portal for Web Technologies (Responsive Portfolio) and Operating Systems (Process Scheduling Simulator) closes this Sunday at 11:59 PM. Late submissions will face a 10% penalty per day.",
      tag: "Assignments",
      author: "CR Academic Team"
    },
    {
      id: "ann-4",
      title: "ðŸ’¡ Google Drive Central Backup Updated with Past Papers",
      category: "General",
      date: "September 05, 2026",
      timestamp: 1788652800000,
      pinned: false,
      content: "Past 5 years' midterm and final papers for all current courses have been scanned and organized into the main Google Drive folder. You can find them under the 'Class Notes & Resources' tab in each course.",
      tag: "Study Material",
      author: "CR Study Group"
    }
  ],

  semesters: [
    // ==========================================
    // SEMESTER 1
    // ==========================================
    {
      id: 1,
      name: "Semester 1",
      shortTitle: "Sem 1",
      phase: "Foundation & Business Basics",
      description: "Fundamental computing concepts, introductory programming, and core business mathematics.",
      courses: [
        {
          id: "pom111",
          code: "POM-111",
          title: "Principles of Management",
          instructor: "Dr. Mukurrum Ali Khan",
          creditHours: "3 (3-0)",
          description: "Introduction to management theory, planning, organizing, leading, and controlling.",
          slides: [
            { id: "pom111-s1", title: "Slide 1", topic: "Intro to Management", format: "PPTX", date: "Sep 02", size: "Google Slides", url: "https://docs.google.com/presentation/d/1QT6gnQyquRp5b4Xxr5UBT4zJVhXhDN5QR_6iklkHgX0/edit?usp=sharing", downloadUrl: "https://docs.google.com/presentation/d/1QT6gnQyquRp5b4Xxr5UBT4zJVhXhDN5QR_6iklkHgX0/export/pptx" }
          ],
          resources: []
        },
        {
          id: "ict111",
          code: "ICT-111",
          title: "Introduction to Computer Theory",
          instructor: "Dr. Asmat Khattak",
          creditHours: "3 (2-1)",
          description: "Foundational computer architecture, binary logic, and computation theory.",
          slides: [],
          resources: []
        },
        {
          id: "gqr101",
          code: "GQR-101",
          title: "Quantum Reasoning",
          instructor: "Dr. Farwa Ilyas",
          creditHours: "3 (3-0)",
          description: "Quantitative and mathematical reasoning concepts for business decision-making.",
          slides: [],
          resources: [
            {
              id: "gqr101-r1",
              title: "Solved Exercise 0.1",
              type: "Exercise",
              format: "PDF",
              date: "Sep 18",
              size: "Drive PDF",
              url: "https://drive.google.com/file/d/1XnpKNtrpn-p3xkO_zef_-tNnCyqLTJUy/view?usp=drive_link",
              downloadUrl: "https://drive.google.com/uc?export=download&id=1XnpKNtrpn-p3xkO_zef_-tNnCyqLTJUy"
            },
            {
              id: "gqr101-r2",
              title: "Solved Exercise 0.2",
              type: "Exercise",
              format: "PDF",
              date: "Sep 18",
              size: "Drive PDF",
              url: "https://drive.google.com/file/d/1NrbWmPlFG4DWnC_p9BHsEFvmnMSNfuxY/view?usp=drive_link",
              downloadUrl: "https://drive.google.com/uc?export=download&id=1NrbWmPlFG4DWnC_p9BHsEFvmnMSNfuxY"
            },
            {
              id: "gqr101-r3",
              title: "Solved Exercise 0.3",
              type: "Exercise",
              format: "PDF",
              date: "Sep 18",
              size: "Drive PDF",
              url: "https://drive.google.com/file/d/1co7jghCZuK6-SfjJBRXGfAFqOhNRCpcC/view?usp=drive_link",
              downloadUrl: "https://drive.google.com/uc?export=download&id=1co7jghCZuK6-SfjJBRXGfAFqOhNRCpcC"
            }
          ]
        },
        {
          id: "geng101",
          code: "GENG-101",
          title: "English",
          instructor: "Ms. Amina Mubashar",
          creditHours: "3 (3-0)",
          description: "Grammar, academic reading, essay writing, and analytical comprehension.",
          slides: [],
          resources: [
            {
              id: "geng101-r1",
              title: "English Class Notes",
              type: "Class Notes",
              format: "PDF",
              date: "Sep 20",
              size: "Drive PDF",
              url: "https://drive.google.com/file/d/1hoYJON-yAt9I9G-PbnarLLUrMEupY17w/view?usp=sharing",
              downloadUrl: "https://drive.google.com/uc?export=download&id=1hoYJON-yAt9I9G-PbnarLLUrMEupY17w"
            }
          ]
        },
        {
          id: "gicp101",
          code: "GICP-101",
          title: "Pakistan Studies",
          instructor: "Dr. Iqra Jathol",
          creditHours: "3 (3-0)",
          description: "Historical perspective, ideological basis, constitution, and contemporary challenges of Pakistan.",
          slides: [],
          resources: []
        },
        {
          id: "itp101",
          code: "ITP-101",
          title: "Introduction to Philosophy",
          instructor: "Dr. Shahid Gul",
          creditHours: "3 (3-0)",
          description: "Exploration of fundamental philosophical questions, logic, critical thinking, and ethics.",
          slides: [],
          resources: []
        },
        {
          id: "hq101",
          code: "HQ-101",
          title: "Holy Quran",
          instructor: "Dr. Ahmad Ali Badaat",
          creditHours: "1 (1-0)",
          description: "Study and understanding of the Holy Quran with translation and contextual interpretation.",
          slides: [],
          resources: []
        }
      ]
    },

    // ==========================================
    // SEMESTER 2
    // ==========================================
    {
      id: 2,
      name: "Semester 2",
      shortTitle: "Sem 2",
      locked: true,
      phase: "OOP & Organizational Studies",
      description: "Object-oriented paradigm, discrete mathematics, and principles of corporate management.",
      courses: [
        {
          id: "cs201",
          code: "CS-201",
          title: "Object-Oriented Programming (Java / C++)",
          instructor: "Dr. Noman Bashir",
          creditHours: "4 (3-1)",
          description: "Classes, objects, inheritance, polymorphism, encapsulation, exception handling, and GUI development.",
          slides: [
            { id: "cs201-s1", title: "Slide 1", topic: "OOP Fundamentals", format: "PPTX", date: "Feb 02", size: "4.8 MB", url: "#" },
            { id: "cs201-s2", title: "Slide 2", topic: "Object Lifecycle", format: "PDF", date: "Feb 09", size: "2.9 MB", url: "#" },
            { id: "cs201-s3", title: "Slide 3", topic: "Polymorphism", format: "PPTX", date: "Feb 16", size: "5.1 MB", url: "#" },
            { id: "cs201-s4", title: "Slide 4", topic: "Abstraction", format: "PDF", date: "Feb 23", size: "3.2 MB", url: "#" }
          ],
          resources: [
            { id: "cs201-r1", title: "Notes 1", type: "Notes", format: "PDF", size: "6.8 MB", url: "#" },
            { id: "cs201-r2", title: "Notes 2", type: "Code", format: "Drive", size: "Google Drive", url: "https://drive.google.com" },
            { id: "cs201-r3", title: "Notes 3", type: "Cheatsheet", format: "PDF", size: "1.1 MB", url: "#" }
          ]
        },
        {
          id: "cs202",
          code: "CS-202",
          title: "Discrete Mathematics",
          instructor: "Prof. Kashif Rehman",
          creditHours: "3 (3-0)",
          description: "Set theory, predicate logic, relations, functions, graph theory, combinatorics, and proof techniques.",
          slides: [
            { id: "cs202-s1", title: "Slide 1", topic: "Logic Systems", format: "PDF", date: "Feb 03", size: "2.6 MB", url: "#" },
            { id: "cs202-s2", title: "Slide 2", topic: "Set Theory", format: "PPTX", date: "Feb 10", size: "3.7 MB", url: "#" },
            { id: "cs202-s3", title: "Slide 3", topic: "Proofs", format: "PDF", date: "Feb 17", size: "2.1 MB", url: "#" }
          ],
          resources: [
            { id: "cs202-r1", title: "Notes 1", type: "Book", format: "PDF", size: "22.4 MB", url: "#" },
            { id: "cs202-r2", title: "Notes 2", type: "Notes", format: "PDF", size: "4.5 MB", url: "#" }
          ]
        },
        {
          id: "mgt201",
          code: "MGT-201",
          title: "Principles of Management",
          instructor: "Dr. Shahida Parveen",
          creditHours: "3 (3-0)",
          description: "Planning, organizing, leading, controlling, corporate social responsibility, and strategic decision making.",
          slides: [
            { id: "mgt201-s1", title: "Slide 1", topic: "Management Theories", format: "PPTX", date: "Feb 04", size: "3.5 MB", url: "#" },
            { id: "mgt201-s2", title: "Slide 2", topic: "Strategy", format: "PDF", date: "Feb 11", size: "2.4 MB", url: "#" }
          ],
          resources: [
            { id: "mgt201-r1", title: "Notes 1", type: "Book", format: "PDF", size: "35.2 MB", url: "#" },
            { id: "mgt201-r2", title: "Notes 2", type: "Docs", format: "DOCX", size: "1.5 MB", url: "#" }
          ]
        },
        {
          id: "mgt202",
          code: "MGT-202",
          title: "Financial Accounting II",
          instructor: "Dr. Samina Rizvi",
          creditHours: "3 (3-0)",
          description: "Partnerships, corporation accounts, depreciation methods, cash flow statements, and inventory valuation.",
          slides: [
            { id: "mgt202-s1", title: "Slide 1", topic: "Inventory", format: "PPTX", date: "Feb 05", size: "3.1 MB", url: "#" },
            { id: "mgt202-s2", title: "Slide 2", topic: "Depreciation", format: "PDF", date: "Feb 12", size: "2.2 MB", url: "#" }
          ],
          resources: [
            { id: "mgt202-r1", title: "Notes 1", type: "Docs", format: "DOCX", size: "820 KB", url: "#" }
          ]
        },
        {
          id: "hum201",
          code: "HUM-201",
          title: "Business Communication",
          instructor: "Ms. Ayesha Siddiqa",
          creditHours: "3 (3-0)",
          description: "Corporate correspondence, memo writing, professional presentation skills, email etiquette, and resume drafting.",
          slides: [
            { id: "hum201-s1", title: "Slide 1", topic: "Communication Basics", format: "PPTX", date: "Feb 06", size: "2.8 MB", url: "#" }
          ],
          resources: [
            { id: "hum201-r1", title: "Notes 1", type: "Docs", format: "DOCX", size: "640 KB", url: "#" }
          ]
        }
      ]
    },

    // ==========================================
    // SEMESTER 3
    // ==========================================
    {
      id: 3,
      name: "Semester 3",
      shortTitle: "Sem 3",
      locked: true,
      phase: "Data Structures & Core Databases",
      description: "Complex data structures, relational database systems, microeconomics, and applied business statistics.",
      courses: [
        {
          id: "cs301",
          code: "CS-301",
          title: "Data Structures & Algorithms",
          instructor: "Dr. Usman Khurshid",
          creditHours: "4 (3-1)",
          description: "Linked lists, stacks, queues, binary search trees, AVL trees, graphs, sorting, searching, and time complexity.",
          slides: [
            { id: "cs301-s1", title: "Slide 1", topic: "Complexity", format: "PDF", date: "Sep 01", size: "3.5 MB", url: "#" },
            { id: "cs301-s2", title: "Slide 2", topic: "Linked Lists", format: "PPTX", date: "Sep 08", size: "4.2 MB", url: "#" },
            { id: "cs301-s3", title: "Slide 3", topic: "Stacks & Queues", format: "PPTX", date: "Sep 15", size: "4.6 MB", url: "#" },
            { id: "cs301-s4", title: "Slide 4", topic: "Trees", format: "PDF", date: "Sep 22", size: "3.9 MB", url: "#" },
            { id: "cs301-s5", title: "Slide 5", topic: "Graphs", format: "PPTX", date: "Sep 29", size: "5.3 MB", url: "#" }
          ],
          resources: [
            { id: "cs301-r1", title: "Notes 1", type: "Book", format: "PDF", size: "14.2 MB", url: "#" },
            { id: "cs301-r2", title: "Notes 2", type: "Code", format: "Drive", size: "Drive Link", url: "https://drive.google.com" },
            { id: "cs301-r3", title: "Notes 3", type: "Cheatsheet", format: "PDF", size: "980 KB", url: "#" }
          ]
        },
        {
          id: "cs302",
          code: "CS-302",
          title: "Database Systems",
          instructor: "Prof. Adeel Munir",
          creditHours: "4 (3-1)",
          description: "Relational database concepts, ER modeling, normalization (1NF to BCNF), SQL queries, indexing, and transactions.",
          slides: [
            { id: "cs302-s1", title: "Slide 1", topic: "DBMS Foundations", format: "PPTX", date: "Sep 02", size: "5.1 MB", url: "#" },
            { id: "cs302-s2", title: "Slide 2", topic: "Data Modeling", format: "PDF", date: "Sep 09", size: "4.4 MB", url: "#" },
            { id: "cs302-s3", title: "Slide 3", topic: "SQL Basics", format: "PPTX", date: "Sep 16", size: "6.0 MB", url: "#" },
            { id: "cs302-s4", title: "Slide 4", topic: "Advanced SQL", format: "PDF", date: "Sep 23", size: "3.7 MB", url: "#" },
            { id: "cs302-s5", title: "Slide 5", topic: "Normalization", format: "PPTX", date: "Sep 30", size: "4.9 MB", url: "#" }
          ],
          resources: [
            { id: "cs302-r1", title: "Notes 1", type: "Book", format: "PDF", size: "38.1 MB", url: "#" },
            { id: "cs302-r2", title: "Notes 2", type: "Code", format: "Drive", size: "Google Drive", url: "https://drive.google.com" },
            { id: "cs302-r3", title: "Notes 3", type: "Notes", format: "PDF", size: "2.4 MB", url: "#" }
          ]
        },
        {
          id: "eco301",
          code: "ECO-301",
          title: "Microeconomics",
          instructor: "Dr. Haris Abbasi",
          creditHours: "3 (3-0)",
          description: "Demand and supply mechanics, elasticity, consumer behavior, production theory, cost curves, and market structures.",
          slides: [
            { id: "eco301-s1", title: "Slide 1", topic: "Market Equilibrium", format: "PPTX", date: "Sep 03", size: "3.2 MB", url: "#" },
            { id: "eco301-s2", title: "Slide 2", topic: "Elasticity", format: "PDF", date: "Sep 10", size: "2.1 MB", url: "#" }
          ],
          resources: [
            { id: "eco301-r1", title: "Notes 1", type: "Book", format: "PDF", size: "26.4 MB", url: "#" },
            { id: "eco301-r2", title: "Notes 2", type: "Notes", format: "PDF", size: "1.6 MB", url: "#" }
          ]
        },
        {
          id: "sta301",
          code: "STA-301",
          title: "Business Statistics",
          instructor: "Prof. Asim Mehmood",
          creditHours: "3 (3-0)",
          description: "Descriptive statistics, probability distributions, sampling methods, hypothesis testing, and regression analysis.",
          slides: [
            { id: "sta301-s1", title: "Slide 1", topic: "Descriptive Stats", format: "PPTX", date: "Sep 04", size: "3.8 MB", url: "#" },
            { id: "sta301-s2", title: "Slide 2", topic: "Probability", format: "PDF", date: "Sep 11", size: "2.7 MB", url: "#" }
          ],
          resources: [
            { id: "sta301-r1", title: "Notes 1", type: "Book", format: "PDF", size: "31.2 MB", url: "#" },
            { id: "sta301-r2", title: "Notes 2", type: "Cheatsheet", format: "PDF", size: "1.3 MB", url: "#" }
          ]
        }
      ]
    },

    // ==========================================
    // SEMESTER 4 (CURRENT ACTIVE SEMESTER)
    // ==========================================
    {
      id: 4,
      name: "Semester 4",
      shortTitle: "Sem 4",
      locked: true,
      phase: "Operating Systems & Web Technologies (Active)",
      description: "Modern web application development, operating systems internals, cost accounting, and business laws.",
      courses: [
        {
          id: "cs401",
          code: "CS-401",
          title: "Web Technologies",
          instructor: "Engr. Salman Haider",
          creditHours: "4 (3-1)",
          description: "HTML5, CSS3, JavaScript, DOM manipulation, REST APIs, responsive frameworks, Node.js and full-stack architecture.",
          slides: [
            { id: "cs401-s1", title: "Slide 1", topic: "Modern Layouts", format: "PPTX", date: "Sep 01", size: "5.5 MB", url: "#" },
            { id: "cs401-s2", title: "Slide 2", topic: "ES6 Fundamentals", format: "PDF", date: "Sep 08", size: "4.1 MB", url: "#" },
            { id: "cs401-s3", title: "Slide 3", topic: "Browser DOM", format: "PPTX", date: "Sep 15", size: "6.2 MB", url: "#" },
            { id: "cs401-s4", title: "Slide 4", topic: "API Integration", format: "PDF", date: "Sep 22", size: "3.8 MB", url: "#" },
            { id: "cs401-s5", title: "Slide 5", topic: "UI Engineering", format: "PPTX", date: "Sep 29", size: "4.7 MB", url: "#" },
            { id: "cs401-s6", title: "Slide 6", topic: "Server-side Dev", format: "PDF", date: "Oct 06", size: "4.0 MB", url: "#" }
          ],
          resources: [
            { id: "cs401-r1", title: "Notes 1", type: "Docs", format: "DOCX", size: "450 KB", url: "#" },
            { id: "cs401-r2", title: "Notes 2", type: "Book", format: "PDF", size: "29.3 MB", url: "#" },
            { id: "cs401-r3", title: "Notes 3", type: "Code", format: "Drive", size: "GitHub Repo", url: "https://drive.google.com" },
            { id: "cs401-r4", title: "Notes 4", type: "Drive", format: "Drive", size: "Google Drive Folder", url: "https://drive.google.com" }
          ]
        },
        {
          id: "cs402",
          code: "CS-402",
          title: "Operating Systems",
          instructor: "Dr. Kamran Rashid",
          creditHours: "4 (3-1)",
          description: "Process management, CPU scheduling, thread synchronization, deadlocks, virtual memory paging, and Linux system calls.",
          slides: [
            { id: "cs402-s1", title: "Slide 1", topic: "Kernel Concepts", format: "PPTX", date: "Sep 02", size: "4.6 MB", url: "#" },
            { id: "cs402-s2", title: "Slide 2", topic: "Process Management", format: "PDF", date: "Sep 09", size: "3.2 MB", url: "#" },
            { id: "cs402-s3", title: "Slide 3", topic: "CPU Scheduling", format: "PPTX", date: "Sep 16", size: "5.4 MB", url: "#" },
            { id: "cs402-s4", title: "Slide 4", topic: "Concurrency", format: "PDF", date: "Sep 23", size: "3.7 MB", url: "#" },
            { id: "cs402-s5", title: "Slide 5", topic: "Deadlock Avoidance", format: "PPTX", date: "Sep 30", size: "4.1 MB", url: "#" }
          ],
          resources: [
            { id: "cs402-r1", title: "Notes 1", type: "Book", format: "PDF", size: "36.5 MB", url: "#" },
            { id: "cs402-r2", title: "Notes 2", type: "Notes", format: "PDF", size: "3.1 MB", url: "#" },
            { id: "cs402-r3", title: "Notes 3", type: "Code", format: "Drive", size: "Drive / ZIP", url: "https://drive.google.com" },
            { id: "cs402-r4", title: "Notes 4", type: "Notes", format: "PDF", size: "2.8 MB", url: "#" }
          ]
        },
        {
          id: "mgt401",
          code: "MGT-401",
          title: "Cost & Management Accounting",
          instructor: "Prof. Bilal Ahmed",
          creditHours: "3 (3-0)",
          description: "Cost classification, job order costing, process costing, cost-volume-profit (CVP) analysis, and budgetary control.",
          slides: [
            { id: "mgt401-s1", title: "Slide 1", topic: "Cost Concepts", format: "PPTX", date: "Sep 03", size: "3.4 MB", url: "#" },
            { id: "mgt401-s2", title: "Slide 2", topic: "Cost Systems", format: "PDF", date: "Sep 10", size: "2.8 MB", url: "#" },
            { id: "mgt401-s3", title: "Slide 3", topic: "CVP Analysis", format: "PPTX", date: "Sep 17", size: "4.0 MB", url: "#" }
          ],
          resources: [
            { id: "mgt401-r1", title: "Notes 1", type: "Book", format: "PDF", size: "27.4 MB", url: "#" },
            { id: "mgt401-r2", title: "Notes 2", type: "Cheatsheet", format: "PDF", size: "750 KB", url: "#" }
          ]
        },
        {
          id: "eco401",
          code: "ECO-401",
          title: "Macroeconomics",
          instructor: "Dr. Haris Abbasi",
          creditHours: "3 (3-0)",
          description: "GDP computation, inflation, unemployment, fiscal and monetary policies, aggregate demand, and international trade balance.",
          slides: [
            { id: "eco401-s1", title: "Slide 1", topic: "National Income", format: "PDF", date: "Sep 04", size: "2.5 MB", url: "#" },
            { id: "eco401-s2", title: "Slide 2", topic: "Macro Indicators", format: "PPTX", date: "Sep 11", size: "3.6 MB", url: "#" }
          ],
          resources: [
            { id: "eco401-r1", title: "Notes 1", type: "Book", format: "PDF", size: "31.0 MB", url: "#" }
          ]
        },
        {
          id: "law401",
          code: "LAW-401",
          title: "Business Law & Cyber Regulations",
          instructor: "Adv. Tariq Mahmood",
          creditHours: "3 (3-0)",
          description: "Law of contracts, sale of goods, negotiable instruments, electronic transactions ordinance, and intellectual property.",
          slides: [
            { id: "law401-s1", title: "Slide 1", topic: "Contract Law", format: "PPTX", date: "Sep 05", size: "2.7 MB", url: "#" },
            { id: "law401-s2", title: "Slide 2", topic: "Dispute Law", format: "PDF", date: "Sep 12", size: "1.9 MB", url: "#" }
          ],
          resources: [
            { id: "law401-r1", title: "Notes 1", type: "Book", format: "PDF", size: "19.8 MB", url: "#" },
            { id: "law401-r2", title: "Notes 2", type: "Notes", format: "PDF", size: "2.1 MB", url: "#" }
          ]
        }
      ]
    },

    // ==========================================
    // SEMESTER 5
    // ==========================================
    {
      id: 5,
      name: "Semester 5",
      shortTitle: "Sem 5",
      locked: true,
      phase: "Software Engineering & Networking",
      description: "Enterprise software architecture, computer networks, MIS, and human resource management.",
      courses: [
        {
          id: "cs501",
          code: "CS-501",
          title: "Computer Networks",
          instructor: "Prof. Kashif Rehman",
          creditHours: "4 (3-1)",
          description: "OSI and TCP/IP models, subnetting, CIDR, routing protocols, transport layer (TCP/UDP), and network security.",
          slides: [
            { id: "cs501-s1", title: "Slide 1", topic: "Network Architecture", format: "PPTX", date: "Feb 02", size: "5.8 MB", url: "#" },
            { id: "cs501-s2", title: "Slide 2", topic: "Subnetting", format: "PDF", date: "Feb 09", size: "4.3 MB", url: "#" },
            { id: "cs501-s3", title: "Slide 3", topic: "Routing", format: "PPTX", date: "Feb 16", size: "6.1 MB", url: "#" }
          ],
          resources: [
            { id: "cs501-r1", title: "Notes 1", type: "Book", format: "PDF", size: "34.2 MB", url: "#" },
            { id: "cs501-r2", title: "Notes 2", type: "Code", format: "Drive", size: "PKT Files", url: "https://drive.google.com" },
            { id: "cs501-r3", title: "Notes 3", type: "Cheatsheet", format: "PDF", size: "650 KB", url: "#" }
          ]
        },
        {
          id: "cs502",
          code: "CS-502",
          title: "Software Engineering",
          instructor: "Dr. Noman Bashir",
          creditHours: "3 (3-0)",
          description: "SDLC methodologies (Agile, Scrum, Waterfall), requirements engineering, UML modeling, software testing, and maintenance.",
          slides: [
            { id: "cs502-s1", title: "Slide 1", topic: "Agile Process", format: "PPTX", date: "Feb 03", size: "4.2 MB", url: "#" },
            { id: "cs502-s2", title: "Slide 2", topic: "SRS Documentation", format: "PDF", date: "Feb 10", size: "3.5 MB", url: "#" },
            { id: "cs502-s3", title: "Slide 3", topic: "UML Design", format: "PPTX", date: "Feb 17", size: "5.0 MB", url: "#" }
          ],
          resources: [
            { id: "cs502-r1", title: "Notes 1", type: "Book", format: "PDF", size: "30.1 MB", url: "#" },
            { id: "cs502-r2", title: "Notes 2", type: "Docs", format: "DOCX", size: "850 KB", url: "#" }
          ]
        },
        {
          id: "mgt501",
          code: "MGT-501",
          title: "Management Information Systems (MIS)",
          instructor: "Dr. Shahida Parveen",
          creditHours: "3 (3-0)",
          description: "Enterprise systems, digital firm models, CRM, supply chain systems, and IT business value alignment.",
          slides: [
            { id: "mgt501-s1", title: "Slide 1", topic: "Digital Enterprise", format: "PPTX", date: "Feb 04", size: "3.9 MB", url: "#" },
            { id: "mgt501-s2", title: "Slide 2", topic: "ERP & SCM", format: "PDF", date: "Feb 11", size: "2.9 MB", url: "#" }
          ],
          resources: [
            { id: "mgt501-r1", title: "Notes 1", type: "Book", format: "PDF", size: "38.0 MB", url: "#" }
          ]
        },
        {
          id: "mgt502",
          code: "MGT-502",
          title: "Human Resource Management",
          instructor: "Prof. Farzana Malik",
          creditHours: "3 (3-0)",
          description: "Talent acquisition, training & development, performance appraisals, compensation structures, and labor relations.",
          slides: [
            { id: "mgt502-s1", title: "Slide 1", topic: "Strategic HRM", format: "PPTX", date: "Feb 05", size: "2.6 MB", url: "#" }
          ],
          resources: [
            { id: "mgt502-r1", title: "Notes 1", type: "Book", format: "PDF", size: "28.5 MB", url: "#" }
          ]
        }
      ]
    },

    // ==========================================
    // SEMESTER 6
    // ==========================================
    {
      id: 6,
      name: "Semester 6",
      shortTitle: "Sem 6",
      locked: true,
      phase: "Mobile Apps & Information Security",
      description: "Native & cross-platform mobile development, cybersecurity fundamentals, and e-commerce strategies.",
      courses: [
        {
          id: "cs601",
          code: "CS-601",
          title: "Mobile Application Development",
          instructor: "Engr. Salman Haider",
          creditHours: "4 (3-1)",
          description: "Android/Flutter app architecture, UI components, state management, REST API integration, and SQLite/Firebase.",
          slides: [
            { id: "cs601-s1", title: "Slide 1", topic: "Cross-Platform Intro", format: "PPTX", date: "Sep 02", size: "6.3 MB", url: "#" },
            { id: "cs601-s2", title: "Slide 2", topic: "State Management", format: "PDF", date: "Sep 09", size: "4.8 MB", url: "#" },
            { id: "cs601-s3", title: "Slide 3", topic: "Data & Storage", format: "PPTX", date: "Sep 16", size: "5.9 MB", url: "#" }
          ],
          resources: [
            { id: "cs601-r1", title: "Notes 1", type: "Book", format: "PDF", size: "22.5 MB", url: "#" },
            { id: "cs601-r2", title: "Notes 2", type: "Code", format: "Drive", size: "Drive Link", url: "https://drive.google.com" }
          ]
        },
        {
          id: "cs602",
          code: "CS-602",
          title: "Information Security & Cryptography",
          instructor: "Dr. Kamran Rashid",
          creditHours: "3 (3-0)",
          description: "Symmetric and asymmetric encryption, digital signatures, hashing, network security protocols, and ethical hacking basics.",
          slides: [
            { id: "cs602-s1", title: "Slide 1", topic: "Security Triad", format: "PPTX", date: "Sep 03", size: "4.1 MB", url: "#" },
            { id: "cs602-s2", title: "Slide 2", topic: "Encryption", format: "PDF", date: "Sep 10", size: "3.7 MB", url: "#" }
          ],
          resources: [
            { id: "cs602-r1", title: "Notes 1", type: "Book", format: "PDF", size: "33.4 MB", url: "#" },
            { id: "cs602-r2", title: "Notes 2", type: "Cheatsheet", format: "PDF", size: "1.2 MB", url: "#" }
          ]
        },
        {
          id: "mgt601",
          code: "MGT-601",
          title: "E-Commerce & Digital Marketing",
          instructor: "Dr. Samina Rizvi",
          creditHours: "3 (3-0)",
          description: "Digital business models (B2B, B2C), payment gateways, SEO, SEM, conversion rate optimization, and social commerce.",
          slides: [
            { id: "mgt601-s1", title: "Slide 1", topic: "Digital Business", format: "PPTX", date: "Sep 04", size: "3.9 MB", url: "#" }
          ],
          resources: [
            { id: "mgt601-r1", title: "Notes 1", type: "Docs", format: "DOCX", size: "900 KB", url: "#" }
          ]
        },
        {
          id: "mgt602",
          code: "MGT-602",
          title: "Business Research Methods",
          instructor: "Prof. Farzana Malik",
          creditHours: "3 (3-0)",
          description: "Research design, qualitative & quantitative methods, survey design, literature review, and academic thesis writing.",
          slides: [
            { id: "mgt602-s1", title: "Slide 1", topic: "Research Problem", format: "PDF", date: "Sep 05", size: "2.4 MB", url: "#" }
          ],
          resources: [
            { id: "mgt602-r1", title: "Notes 1", type: "Book", format: "PDF", size: "25.8 MB", url: "#" }
          ]
        }
      ]
    },

    // ==========================================
    // SEMESTER 7
    // ==========================================
    {
      id: 7,
      name: "Semester 7",
      shortTitle: "Sem 7",
      locked: true,
      phase: "Cloud Computing & Business Intelligence",
      description: "Cloud architectures, data warehousing, enterprise resource planning, and Final Year Project Part 1.",
      courses: [
        {
          id: "cs701",
          code: "CS-701",
          title: "Cloud Computing & DevOps",
          instructor: "Engr. Farhan Tariq",
          creditHours: "3 (3-0)",
          description: "IaaS, PaaS, SaaS, AWS & Azure core services, Docker containers, Kubernetes orchestration, and CI/CD pipelines.",
          slides: [
            { id: "cs701-s1", title: "Slide 1", topic: "Cloud Foundations", format: "PPTX", date: "Feb 02", size: "5.4 MB", url: "#" },
            { id: "cs701-s2", title: "Slide 2", topic: "Containerization", format: "PDF", date: "Feb 09", size: "4.1 MB", url: "#" },
            { id: "cs701-s3", title: "Slide 3", topic: "AWS Architecture", format: "PPTX", date: "Feb 16", size: "6.8 MB", url: "#" }
          ],
          resources: [
            { id: "cs701-r1", title: "Notes 1", type: "Book", format: "PDF", size: "21.6 MB", url: "#" },
            { id: "cs701-r2", title: "Notes 2", type: "Cheatsheet", format: "PDF", size: "1.1 MB", url: "#" }
          ]
        },
        {
          id: "cs702",
          code: "CS-702",
          title: "Data Warehousing & Business Intelligence",
          instructor: "Dr. Usman Khurshid",
          creditHours: "3 (3-0)",
          description: "Dimensional modeling (Star/Snowflake schema), ETL pipelines, OLAP cubes, Power BI dashboards, and data mining.",
          slides: [
            { id: "cs702-s1", title: "Slide 1", topic: "Star Schema", format: "PPTX", date: "Feb 03", size: "4.7 MB", url: "#" },
            { id: "cs702-s2", title: "Slide 2", topic: "ETL Pipelines", format: "PDF", date: "Feb 10", size: "3.6 MB", url: "#" }
          ],
          resources: [
            { id: "cs702-r1", title: "Notes 1", type: "Book", format: "PDF", size: "32.0 MB", url: "#" },
            { id: "cs702-r2", title: "Notes 2", type: "Drive", format: "Drive", size: "Drive Folder", url: "https://drive.google.com" }
          ]
        },
        {
          id: "mgt701",
          code: "MGT-701",
          title: "Enterprise Resource Planning (ERP)",
          instructor: "Prof. Adeel Munir",
          creditHours: "3 (3-0)",
          description: "SAP/Odoo architectures, integrated business processes, ERP implementation lifecycle, and business process reengineering (BPR).",
          slides: [
            { id: "mgt701-s1", title: "Slide 1", topic: "ERP Overview", format: "PPTX", date: "Feb 04", size: "4.3 MB", url: "#" }
          ],
          resources: [
            { id: "mgt701-r1", title: "Notes 1", type: "Docs", format: "DOCX", size: "1.4 MB", url: "#" }
          ]
        },
        {
          id: "fyp701",
          code: "FYP-701",
          title: "Final Year Project I (Proposal & SRS)",
          instructor: "Project Committee",
          creditHours: "3 (0-3)",
          description: "Proposal defense, problem formulation, feasibility study, software requirements specification (SRS), and initial prototype.",
          slides: [
            { id: "fyp701-s1", title: "Slide 1", topic: "FYP Orientation", format: "PDF", date: "Feb 01", size: "1.8 MB", url: "#" }
          ],
          resources: [
            { id: "fyp701-r1", title: "Notes 1", type: "Docs", format: "DOCX", size: "1.2 MB", url: "#" },
            { id: "fyp701-r2", title: "Notes 2", type: "Drive", format: "Drive", size: "Drive Link", url: "https://drive.google.com" }
          ]
        }
      ]
    },

    // ==========================================
    // SEMESTER 8
    // ==========================================
    {
      id: 8,
      name: "Semester 8",
      shortTitle: "Sem 8",
      locked: true,
      phase: "AI Analytics & Final Year Capstone",
      description: "Artificial intelligence, big data analytics, strategic IT management, and Final Year Project defense.",
      courses: [
        {
          id: "cs801",
          code: "CS-801",
          title: "Artificial Intelligence & Big Data",
          instructor: "Dr. Usman Khurshid",
          creditHours: "3 (3-0)",
          description: "Machine learning algorithms, neural networks, NLP, Hadoop/Spark ecosystem, predictive modeling, and data pipelines.",
          slides: [
            { id: "cs801-s1", title: "Slide 1", topic: "AI Fundamentals", format: "PPTX", date: "Sep 02", size: "5.2 MB", url: "#" },
            { id: "cs801-s2", title: "Slide 2", topic: "ML Models", format: "PDF", date: "Sep 09", size: "4.5 MB", url: "#" },
            { id: "cs801-s3", title: "Slide 3", topic: "Big Data", format: "PPTX", date: "Sep 16", size: "6.0 MB", url: "#" }
          ],
          resources: [
            { id: "cs801-r1", title: "Notes 1", type: "Book", format: "PDF", size: "45.0 MB", url: "#" },
            { id: "cs801-r2", title: "Notes 2", type: "Code", format: "Drive", size: "Notebooks", url: "https://drive.google.com" }
          ]
        },
        {
          id: "mgt801",
          code: "MGT-801",
          title: "Strategic IT Management",
          instructor: "Dr. Shahida Parveen",
          creditHours: "3 (3-0)",
          description: "Aligning IT with corporate strategy, IT governance (COBIT, ITIL), digital disruption, and IT portfolio management.",
          slides: [
            { id: "mgt801-s1", title: "Slide 1", topic: "IT Strategy", format: "PPTX", date: "Sep 03", size: "3.7 MB", url: "#" },
            { id: "mgt801-s2", title: "Slide 2", topic: "Governance", format: "PDF", date: "Sep 10", size: "2.8 MB", url: "#" }
          ],
          resources: [
            { id: "mgt801-r1", title: "Notes 1", type: "Docs", format: "PDF", size: "4.5 MB", url: "#" }
          ]
        },
        {
          id: "hum801",
          code: "HUM-801",
          title: "Professional Ethics in IT & Business",
          instructor: "Adv. Tariq Mahmood",
          creditHours: "3 (3-0)",
          description: "ACM/IEEE code of ethics, data privacy (GDPR), algorithmic bias, intellectual property, and whistleblowing.",
          slides: [
            { id: "hum801-s1", title: "Slide 1", topic: "Tech Ethics", format: "PPTX", date: "Sep 04", size: "2.5 MB", url: "#" }
          ],
          resources: [
            { id: "hum801-r1", title: "Notes 1", type: "Docs", format: "PDF", size: "1.1 MB", url: "#" }
          ]
        },
        {
          id: "fyp801",
          code: "FYP-801",
          title: "Final Year Project II (Deployment & Defense)",
          instructor: "External & Internal Jury",
          creditHours: "3 (0-3)",
          description: "System implementation, quality assurance testing, user acceptance, final thesis book, and external viva defense.",
          slides: [
            { id: "fyp801-s1", title: "Slide 1", topic: "Defense Prep", format: "PPTX", date: "Sep 01", size: "4.0 MB", url: "#" }
          ],
          resources: [
            { id: "fyp801-r1", title: "Notes 1", type: "Docs", format: "DOCX", size: "2.5 MB", url: "#" },
            { id: "fyp801-r2", title: "Notes 2", type: "Notes", format: "PDF", size: "1.4 MB", url: "#" }
          ]
        }
      ]
    }
  ]
};

// Expose globally for browser usage
window.PORTAL_DATA = PORTAL_DATA;
