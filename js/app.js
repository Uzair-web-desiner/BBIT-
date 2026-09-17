/**
 * BBIT Evening Class Portal - Main Application Logic
 * ==================================================
 * Implements:
 * - Dark / Light theme toggle with local storage persistence
 * - 8-Semester dynamic navigation & rendering
 * - Course lecture slides & notes tabs
 * - Real-time global search across subjects, topics, and slides
 * - CR Announcement board filtering & copy-to-clipboard
 * - Toast feedback system
 */

(function () {
  'use strict';

  // --- STATE MANAGEMENT ---
  let state = {
    theme: localStorage.getItem('bbit_theme') || 'dark',
    activeSemester: 1, // Default to Semester 1
    announcementFilter: 'all',
    searchQuery: '',
    copiedTimeout: null
  };

  // --- DOM ELEMENT REFERENCES ---
  const DOM = {
    html: document.documentElement,
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    heroStats: document.getElementById('heroStats'),
    announcementsList: document.getElementById('announcementsList'),
    announcementFilterBtns: document.querySelectorAll('[data-ann-filter]'),
    semesterTabsContainer: document.getElementById('semesterTabsContainer'),
    semesterBanner: document.getElementById('semesterBanner'),
    coursesContainer: document.getElementById('coursesContainer'),
    globalSearchInput: document.getElementById('globalSearchInput'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    mobileSearchBtn: document.getElementById('mobileSearchBtn'),
    searchModal: document.getElementById('searchModal'),
    searchModalClose: document.getElementById('searchModalClose'),
    searchModalInput: document.getElementById('searchModalInput'),
    searchModalResults: document.getElementById('searchModalResults'),
    toastContainer: document.getElementById('toastContainer'),
    crWhatsappTopBtn: document.getElementById('crWhatsappTopBtn'),
    footerCrWhatsappBtn: document.getElementById('footerCrWhatsappBtn')
  };

  // --- INITIALIZATION ---
  function init() {
    if (window.PORTAL_DATA && window.PORTAL_DATA.portalInfo && window.PORTAL_DATA.portalInfo.currentSemester) {
      state.activeSemester = window.PORTAL_DATA.portalInfo.currentSemester;
    }
    applyTheme(state.theme);
    renderHeroStats();
    renderAnnouncements();
    renderSemesterTabs();
    renderSemesterContent(state.activeSemester);
    bindEvents();
    setupKeyboardShortcuts();
  }

  // --- THEME ENGINE ---
  function applyTheme(theme) {
    state.theme = theme;
    DOM.html.setAttribute('data-theme', theme);
    localStorage.setItem('bbit_theme', theme);
  }

  function toggleTheme() {
    const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    showToast(`Switched to ${nextTheme === 'dark' ? '🌙 Dark Mode (Night Study)' : '☀️ Light Mode'}`, 'info');
  }

  // --- HERO STATS COMPUTATION ---
  function renderHeroStats() {
    if (!DOM.heroStats || !window.PORTAL_DATA) return;
    const { semesters, announcements } = window.PORTAL_DATA;

    let totalCourses = 0;
    let totalSlides = 0;
    let totalResources = 0;

    semesters.forEach(sem => {
      totalCourses += sem.courses.length;
      sem.courses.forEach(course => {
        totalSlides += course.slides ? course.slides.length : 0;
        totalResources += course.resources ? course.resources.length : 0;
      });
    });

    DOM.heroStats.innerHTML = `
      <div class="stat-item">
        <div class="stat-icon">🎓</div>
        <div>
          <div class="stat-value">8</div>
          <div class="stat-label">Semesters</div>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">📚</div>
        <div>
          <div class="stat-value">${totalCourses}</div>
          <div class="stat-label">Core Courses</div>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">📊</div>
        <div>
          <div class="stat-value">${totalSlides}+</div>
          <div class="stat-label">Lecture Slides</div>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">💾</div>
        <div>
          <div class="stat-value">${totalResources}+</div>
          <div class="stat-label">Notes & Files</div>
        </div>
      </div>
    `;
  }

  // --- ANNOUNCEMENTS BOARD ---
  function renderAnnouncements() {
    if (!DOM.announcementsList || !window.PORTAL_DATA) return;
    const items = window.PORTAL_DATA.announcements || [];

    const filtered = items.filter(item => {
      if (state.announcementFilter === 'all') return true;
      return item.category.toLowerCase() === state.announcementFilter.toLowerCase();
    });

    if (filtered.length === 0) {
      DOM.announcementsList.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-muted);">
          No announcements found for category: <strong>${escapeHTML(state.announcementFilter)}</strong>
        </div>
      `;
      return;
    }

    // Pinned notices first
    filtered.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

    DOM.announcementsList.innerHTML = filtered.map(ann => {
      const categoryClass = ann.category.toLowerCase();
      return `
        <div class="announcement-card ${ann.pinned ? 'pinned' : ''}" id="${ann.id}">
          <div class="announcement-card-header">
            <div class="announcement-badge-group">
              <span class="ann-tag ${categoryClass}">${escapeHTML(ann.category)}</span>
              ${ann.pinned ? '<span class="pin-badge">📌 Pinned</span>' : ''}
              <span class="ann-tag" style="background: var(--bg-surface-subtle); color: var(--text-muted);">${escapeHTML(ann.tag || 'Notice')}</span>
            </div>
            <div class="announcement-date">${escapeHTML(ann.date)}</div>
          </div>
          <h3 class="announcement-title">${escapeHTML(ann.title)}</h3>
          <p class="announcement-body">${escapeHTML(ann.content)}</p>
          <div class="announcement-footer">
            <div class="announcement-author">
              <span class="author-avatar">CR</span>
              <span>${escapeHTML(ann.author || 'Class Representative')}</span>
            </div>
            <div class="announcement-actions">
              <button class="btn-card-action" onclick="window.BBIT_APP.copyAnnouncement('${ann.id}')" title="Copy Notice to Share">
                📋 Copy
              </button>
              <button class="btn-card-action" onclick="window.BBIT_APP.shareAnnouncementWhatsApp('${ann.id}')" title="Share via WhatsApp">
                💬 Share
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- SEMESTER NAVIGATION & TABS ---
  function renderSemesterTabs() {
    if (!DOM.semesterTabsContainer || !window.PORTAL_DATA) return;
    const { semesters } = window.PORTAL_DATA;

    DOM.semesterTabsContainer.innerHTML = semesters.map(sem => {
      const isActive = sem.id === state.activeSemester;
      if (sem.locked) {
        return `
          <button class="semester-tab-btn locked-tab ${isActive ? 'active' : ''}" data-semester-id="${sem.id}" title="${escapeHTML(sem.name)} is locked for now">
            <span>🔒 ${escapeHTML(sem.name)}</span>
            <span class="semester-tab-pill locked-pill">Locked</span>
          </button>
        `;
      }
      return `
        <button class="semester-tab-btn ${isActive ? 'active' : ''}" data-semester-id="${sem.id}">
          <span>${escapeHTML(sem.name)}</span>
          <span class="semester-tab-pill">${sem.courses.length} Courses</span>
        </button>
      `;
    }).join('');

    // Bind click handlers to semester tab buttons
    DOM.semesterTabsContainer.querySelectorAll('.semester-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const semId = parseInt(btn.getAttribute('data-semester-id'), 10);
        selectSemester(semId);
      });
    });
  }

  function selectSemester(semesterId) {
    state.activeSemester = semesterId;

    // Update active tab buttons
    DOM.semesterTabsContainer.querySelectorAll('.semester-tab-btn').forEach(btn => {
      const semId = parseInt(btn.getAttribute('data-semester-id'), 10);
      btn.classList.toggle('active', semId === semesterId);
    });

    renderSemesterContent(semesterId);

    // If locked, show toast
    const sem = window.PORTAL_DATA.semesters.find(s => s.id === semesterId);
    if (sem && sem.locked) {
      showToast(`🔒 ${sem.name} is currently locked by the CR.`, 'info');
    }

    // Smooth scroll to top of semester view
    const navOffset = DOM.semesterBanner.getBoundingClientRect().top + window.scrollY - 160;
    window.scrollTo({ top: navOffset, behavior: 'smooth' });
  }

  function renderSemesterContent(semesterId) {
    if (!window.PORTAL_DATA) return;
    const semester = window.PORTAL_DATA.semesters.find(s => s.id === semesterId);
    if (!semester) return;

    if (semester.locked) {
      // Render Locked Semester Banner
      DOM.semesterBanner.innerHTML = `
        <div class="sem-banner-info">
          <span class="sem-banner-pill" style="color: #ef4444;">🔒 Upcoming Semester</span>
          <h2 class="sem-banner-title">${escapeHTML(semester.name)} (Locked)</h2>
          <p class="sem-banner-desc">${escapeHTML(semester.description)}</p>
        </div>
        <div class="sem-banner-meta">
          <div class="sem-meta-chip">
            <span class="sem-meta-val" style="color: #ef4444;">🔒</span>
            <span class="sem-meta-lbl">Status</span>
          </div>
          <div class="sem-meta-chip">
            <span class="sem-meta-val">${semester.courses.length}</span>
            <span class="sem-meta-lbl">Upcoming</span>
          </div>
        </div>
      `;

      // Render Locked State Placeholder Card (Details hidden!)
      DOM.coursesContainer.innerHTML = `
        <div class="locked-semester-card">
          <div class="locked-icon-shield">🔒</div>
          <span class="locked-badge-pill">Semester Locked</span>
          <h3 class="locked-title">${escapeHTML(semester.name)} Materials are Locked</h3>
          <p class="locked-desc">
            Course lecture slides, notes, and resources for <strong>${escapeHTML(semester.name)}</strong> 
            are locked for now. They will be published by the Class Representative as this session commences.
          </p>
          <button class="btn-return-sem1" onclick="window.BBIT_APP.selectSemester(1)">
            ← Return to Semester 1 (Active)
          </button>
        </div>
      `;
      return;
    }

    // Unlocked Semester (Semester 1):
    // 1. Calculate credit hours in this semester
    let totalCredits = 0;
    let totalSlides = 0;
    let totalResources = 0;

    semester.courses.forEach(c => {
      const match = c.creditHours.match(/(\d+)/);
      if (match) totalCredits += parseInt(match[1], 10);
      totalSlides += c.slides ? c.slides.length : 0;
      totalResources += c.resources ? c.resources.length : 0;
    });

    // 2. Render Semester Overview Banner
    DOM.semesterBanner.innerHTML = `
      <div class="sem-banner-info">
        <span class="sem-banner-pill">${escapeHTML(semester.phase)}</span>
        <h2 class="sem-banner-title">${escapeHTML(semester.name)} Dashboard</h2>
        <p class="sem-banner-desc">${escapeHTML(semester.description)}</p>
      </div>
      <div class="sem-banner-meta">
        <div class="sem-meta-chip">
          <span class="sem-meta-val">${semester.courses.length}</span>
          <span class="sem-meta-lbl">Courses</span>
        </div>
        <div class="sem-meta-chip">
          <span class="sem-meta-val">${totalCredits}</span>
          <span class="sem-meta-lbl">Credits</span>
        </div>
        <div class="sem-meta-chip">
          <span class="sem-meta-val">${totalSlides}</span>
          <span class="sem-meta-lbl">Slides</span>
        </div>
      </div>
    `;

    // 3. Render Course Cards
    DOM.coursesContainer.innerHTML = semester.courses.map(course => {
      const slides = course.slides || [];
      const resources = course.resources || [];

      return `
        <div class="course-card" id="course-${course.id}">
          <!-- Course Header -->
          <div class="course-card-header">
            <div class="course-title-group">
              <span class="course-code-badge">${escapeHTML(course.code)}</span>
              <h3 class="course-title">${escapeHTML(course.title)}</h3>
              <div class="course-instructor">
                <span>👨‍🏫 ${escapeHTML(course.instructor)}</span>
              </div>
            </div>
            <div class="course-meta-tags">
              <span class="course-credit-pill">${escapeHTML(course.creditHours)} Credit Hrs</span>
            </div>
          </div>

          <!-- Category Navigation (Slides vs Notes) -->
          <div class="course-category-nav">
            <button class="course-cat-btn active" data-tab-target="slides-${course.id}">
              <span>📽️ Lecture Slides</span>
              <span class="cat-counter">${slides.length}</span>
            </button>
            <button class="course-cat-btn" data-tab-target="notes-${course.id}">
              <span>📁 Class Notes & Resources</span>
              <span class="cat-counter">${resources.length}</span>
            </button>
          </div>

          <!-- Category 1: Lecture Slides Pane -->
          <div class="resource-pane" id="slides-${course.id}">
            <div class="resource-list">
              ${slides.length === 0 ? '<p style="color: var(--text-muted); font-size: 0.9rem;">No slides uploaded yet for this course.</p>' : 
                slides.map(slide => renderResourceItem(slide, course, 'slide')).join('')
              }
            </div>
          </div>

          <!-- Category 2: Class Notes & Resources Pane -->
          <div class="resource-pane hidden" id="notes-${course.id}">
            <div class="resource-list">
              ${resources.length === 0 ? '<p style="color: var(--text-muted); font-size: 0.9rem;">No resources added yet.</p>' : 
                resources.map(res => renderResourceItem(res, course, 'resource')).join('')
              }
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Bind category switch tabs
    DOM.coursesContainer.querySelectorAll('.course-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const parentCard = btn.closest('.course-card');
        const targetId = btn.getAttribute('data-tab-target');

        // Toggle buttons
        parentCard.querySelectorAll('.course-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Toggle panes
        parentCard.querySelectorAll('.resource-pane').forEach(pane => {
          pane.classList.toggle('hidden', pane.id !== targetId);
        });
      });
    });
  }

  function renderResourceItem(item, course, kind) {
    const fmt = (item.format || 'PDF').toUpperCase();
    const fmtClass = fmt.toLowerCase();

    return `
      <div class="resource-card" id="res-${item.id}">
        <div class="resource-left">
          <div class="format-badge ${fmtClass}">${escapeHTML(fmt)}</div>
          <div class="resource-details">
            <div class="resource-title" title="${escapeHTML(item.title)}">${escapeHTML(item.title)}</div>
            <div class="resource-submeta">
              ${item.topic ? `<span class="resource-topic">${escapeHTML(item.topic)}</span><span class="resource-dot-sep">•</span>` : ''}
              ${item.type ? `<span class="resource-topic">${escapeHTML(item.type)}</span><span class="resource-dot-sep">•</span>` : ''}
              ${item.date ? `<span>Added ${escapeHTML(item.date)}</span><span class="resource-dot-sep">•</span>` : ''}
              <span>${escapeHTML(item.size || 'Direct Link')}</span>
            </div>
          </div>
        </div>
        <div class="resource-actions">
          <button class="btn-res-action btn-res-view" onclick="window.BBIT_APP.viewResource('${item.title}', '${item.url}', '${fmt}')" title="Preview / Open Resource">
            👁️ View
          </button>
          <button class="btn-res-action btn-res-download" onclick="window.BBIT_APP.downloadResource('${item.title}', '${item.downloadUrl || item.url}', '${fmt}')" title="Direct Download">
            ⬇️ Download
          </button>
        </div>
      </div>
    `;
  }

  // --- SEARCH ENGINE ---
  function handleSearch(query) {
    state.searchQuery = query.trim().toLowerCase();
    if (!state.searchQuery) {
      DOM.searchClearBtn.classList.remove('active');
      closeSearchModal();
      return;
    }

    DOM.searchClearBtn.classList.add('active');
    openSearchModal();
    performSearch(state.searchQuery);
  }

  function performSearch(query) {
    if (!window.PORTAL_DATA) return;
    const { semesters } = window.PORTAL_DATA;

    let matchedCourses = [];
    let matchedResources = [];

    semesters.forEach(sem => {
      if (sem.locked) return; // Do not expose locked semester materials in search
      sem.courses.forEach(course => {
        const courseMatch = 
          course.title.toLowerCase().includes(query) ||
          course.code.toLowerCase().includes(query) ||
          course.instructor.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query);

        if (courseMatch) {
          matchedCourses.push({ semester: sem, course: course });
        }

        // Search slides
        if (course.slides) {
          course.slides.forEach(slide => {
            if (slide.title.toLowerCase().includes(query) || (slide.topic && slide.topic.toLowerCase().includes(query))) {
              matchedResources.push({
                semester: sem,
                course: course,
                item: slide,
                type: 'Lecture Slide'
              });
            }
          });
        }

        // Search resources
        if (course.resources) {
          course.resources.forEach(res => {
            if (res.title.toLowerCase().includes(query) || (res.type && res.type.toLowerCase().includes(query))) {
              matchedResources.push({
                semester: sem,
                course: course,
                item: res,
                type: 'Study Material'
              });
            }
          });
        }
      });
    });

    renderSearchResults(query, matchedCourses, matchedResources);
  }

  function renderSearchResults(query, courses, resources) {
    if (courses.length === 0 && resources.length === 0) {
      DOM.searchModalResults.innerHTML = `
        <div class="empty-search-state">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <h4 style="font-size: 1.1rem; margin-bottom: 0.25rem;">No results found for "${escapeHTML(query)}"</h4>
          <p style="font-size: 0.85rem;">Try searching for course codes like <strong>CS-401</strong>, or topics like <strong>Database</strong> or <strong>Slides</strong>.</p>
        </div>
      `;
      return;
    }

    let html = '';

    if (courses.length > 0) {
      html += `<div class="search-res-group-title">Courses Found (${courses.length})</div>`;
      courses.forEach(match => {
        html += `
          <div class="search-result-item" onclick="window.BBIT_APP.jumpToCourse(${match.semester.id}, '${match.course.id}')">
            <div>
              <span class="course-code-badge" style="font-size: 0.7rem; padding: 0.15rem 0.45rem;">${escapeHTML(match.course.code)}</span>
              <strong style="margin-left: 0.4rem; font-size: 0.95rem;">${highlightMatch(match.course.title, query)}</strong>
              <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.2rem;">
                ${match.semester.name} • ${escapeHTML(match.course.instructor)}
              </div>
            </div>
            <button class="btn-res-action btn-res-view" style="padding: 0.35rem 0.7rem; font-size: 0.75rem;">Open ➔</button>
          </div>
        `;
      });
    }

    if (resources.length > 0) {
      html += `<div class="search-res-group-title" style="margin-top: 1.25rem;">Files & Topics Found (${resources.length})</div>`;
      resources.slice(0, 15).forEach(match => {
        const fmt = (match.item.format || 'PDF').toLowerCase();
        html += `
          <div class="search-result-item" onclick="window.BBIT_APP.jumpToCourse(${match.semester.id}, '${match.course.id}')">
            <div style="display: flex; align-items: center; gap: 0.75rem; flex: 1; min-width: 0;">
              <span class="format-badge ${fmt}" style="width: 2rem; height: 2rem; font-size: 0.55rem;">${match.item.format}</span>
              <div style="min-width: 0;">
                <div style="font-size: 0.88rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${highlightMatch(match.item.title, query)}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">
                  ${match.course.title} (${match.semester.shortTitle}) • ${match.type}
                </div>
              </div>
            </div>
            <button class="btn-res-action btn-res-download" onclick="event.stopPropagation(); window.BBIT_APP.downloadResource('${match.item.title}', '${match.item.url}', '${match.item.format}')" style="padding: 0.35rem 0.7rem; font-size: 0.75rem;">
              ⬇️ Get
            </button>
          </div>
        `;
      });
    }

    DOM.searchModalResults.innerHTML = html;
  }

  function highlightMatch(text, query) {
    if (!query) return escapeHTML(text);
    const escaped = escapeHTML(text);
    const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
    return escaped.replace(regex, '<span class="search-highlight">$1</span>');
  }

  function openSearchModal() {
    DOM.searchModal.classList.add('active');
    DOM.searchModalInput.value = state.searchQuery;
    DOM.searchModalInput.focus();
  }

  function closeSearchModal() {
    DOM.searchModal.classList.remove('active');
  }

  // --- EVENT BINDINGS ---
  function bindEvents() {
    // Theme toggle
    DOM.themeToggleBtn.addEventListener('click', toggleTheme);

    // Announcement filters
    DOM.announcementFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        DOM.announcementFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.announcementFilter = btn.getAttribute('data-ann-filter');
        renderAnnouncements();
      });
    });

    // Global Search
    DOM.globalSearchInput.addEventListener('input', (e) => {
      handleSearch(e.target.value);
    });

    DOM.searchClearBtn.addEventListener('click', () => {
      DOM.globalSearchInput.value = '';
      DOM.searchModalInput.value = '';
      state.searchQuery = '';
      DOM.searchClearBtn.classList.remove('active');
      closeSearchModal();
    });

    DOM.mobileSearchBtn.addEventListener('click', () => {
      openSearchModal();
    });

    DOM.searchModalClose.addEventListener('click', closeSearchModal);

    DOM.searchModalInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      DOM.globalSearchInput.value = e.target.value;
      if (state.searchQuery) {
        performSearch(state.searchQuery);
      } else {
        DOM.searchModalResults.innerHTML = '';
      }
    });

    // Backdrop click close
    DOM.searchModal.addEventListener('click', (e) => {
      if (e.target === DOM.searchModal) {
        closeSearchModal();
      }
    });
  }

  // Keyboard Shortcuts (Ctrl+K or / to search, Esc to close)
  function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearchModal();
      } else if (e.key === '/' && document.activeElement !== DOM.globalSearchInput && document.activeElement !== DOM.searchModalInput) {
        e.preventDefault();
        openSearchModal();
      } else if (e.key === 'Escape' && DOM.searchModal.classList.contains('active')) {
        closeSearchModal();
      }
    });
  }

  // --- TOAST FEEDBACK ---
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${message}</span>`;
    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 300ms ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --- UTILITY HELPERS ---
  function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // --- PUBLIC API EXPOSED ON WINDOW ---
  window.BBIT_APP = {
    selectSemester: selectSemester,
    jumpToCourse: function (semesterId, courseId) {
      closeSearchModal();
      selectSemester(semesterId);
      setTimeout(() => {
        const el = document.getElementById(`course-${courseId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.style.boxShadow = '0 0 0 3px var(--accent-cyan)';
          setTimeout(() => {
            el.style.boxShadow = '';
          }, 2000);
        }
      }, 250);
    },

    downloadResource: function (title, url, format) {
      showToast(`📥 Downloading "${title}" (${format})...`, 'success');
      if (url && url !== '#') {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '');
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setTimeout(() => {
          showToast(`✅ "${title}" download ready. (Update link in data.js to your file)`, 'success');
        }, 800);
      }
    },

    viewResource: function (title, url, format) {
      if (url && url !== '#') {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else {
        showToast(`📖 Opening preview for "${title}" (${format})`, 'info');
      }
    },

    copyAnnouncement: function (annId) {
      const ann = window.PORTAL_DATA.announcements.find(a => a.id === annId);
      if (!ann) return;
      const textToCopy = `📢 [BBIT Evening Notice - ${ann.category.toUpperCase()}]\n${ann.title}\n\n${ann.content}\n\n- Posted by ${ann.author} on ${ann.date}\nAccess Portal: ${window.location.href}`;
      
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('📋 Notice copied to clipboard! Ready to paste in WhatsApp.', 'success');
      }).catch(() => {
        showToast('Notice content ready to share.', 'info');
      });
    },

    shareAnnouncementWhatsApp: function (annId) {
      const ann = window.PORTAL_DATA.announcements.find(a => a.id === annId);
      if (!ann) return;
      const text = encodeURIComponent(`📢 *[BBIT Evening Notice]*\n*${ann.title}*\n\n${ann.content}\n\n_Date: ${ann.date}_\n_BBIT Evening Class Portal_`);
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    }
  };

  // Run on DOM loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
