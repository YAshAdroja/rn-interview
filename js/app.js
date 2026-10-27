/**
 * React Native Interview Prep Hub - Core Application Logic
 * Curated & Created by Yash Adroja
 */

(function () {
  'use strict';

  // Storage Keys
  const STORAGE_KEY_THEME = 'rn_prep_theme_v2';
  const STORAGE_KEY_STUDY_MODE = 'rn_prep_study_mode_v2';
  const STORAGE_KEY_BOOKMARKS = 'rn_prep_bookmarks_v2';
  const STORAGE_KEY_ONBOARDING = 'rn_prep_onboarding_v2';

  // State
  let currentFiltered = [];
  let currentIndex = 0;
  let activeMainCategory = 'React Native';
  let activeDifficulty = 'All';
  let showOnlyBookmarks = false;
  let studyMode = false;
  let answerRevealed = false;
  let bookmarks = new Set();

  // Load questions dataset
  const questions = (window.QUESTIONS_DATA || []).map((q, idx) => ({
    ...q,
    id: idx + 1
  }));

  // Categories Mapping
  const categories = [
    {
      name: 'React Native',
      icon: '📱',
      desc: 'Mobile Architecture & Core',
      match: q => q.c !== 'JavaScript' && q.c !== 'AI-Based' && q.c !== 'Common Interview Questions'
    },
    {
      name: 'JavaScript',
      icon: '🟨',
      desc: 'Language, Async & Core Engine',
      match: q => q.c === 'JavaScript'
    },
    {
      name: 'AI-Based',
      icon: '🤖',
      desc: 'GenAI, LLMs, RAG & Mobile AI',
      match: q => q.c === 'AI-Based'
    },
    {
      name: 'Common',
      icon: '💼',
      desc: 'STAR Method & Senior Leadership',
      match: q => q.c === 'Common Interview Questions'
    }
  ];

  // Helper DOM selectors
  const $ = selector => document.querySelector(selector);
  const $$ = selector => document.querySelectorAll(selector);

  // Initialize Local Storage
  function initStorage() {
    try {
      const savedBookmarks = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
      if (savedBookmarks) {
        bookmarks = new Set(JSON.parse(savedBookmarks));
      }
      const savedStudy = localStorage.getItem(STORAGE_KEY_STUDY_MODE);
      if (savedStudy !== null) {
        studyMode = savedStudy === 'true';
      }
    } catch (e) {
      console.warn('Storage unavailable', e);
    }
  }

  function saveBookmarks() {
    try {
      localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(Array.from(bookmarks)));
    } catch (e) {}
  }

  function saveStudyMode() {
    try {
      localStorage.setItem(STORAGE_KEY_STUDY_MODE, String(studyMode));
    } catch (e) {}
  }

  // Toast Notification
  function showToast(message, icon = '✓') {
    const container = $('#toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span> <span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  // Escape HTML helper
  function escapeHtml(s) {
    return String(s ?? '').replace(/[&<>"']/g, c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[c]));
  }

  // Category & Question Filtering
  function getFilteredQuestions() {
    const term = ($('#searchInput')?.value || '').trim().toLowerCase();
    const subcat = $('#categorySelect')?.value || '';
    const activeCategoryDef = categories.find(c => c.name === activeMainCategory);

    return questions.filter(q => {
      // 1. Main Category filter
      if (activeCategoryDef && !activeCategoryDef.match(q)) return false;

      // 2. Subcategory topic filter
      if (subcat && q.c !== subcat) return false;

      // 3. Difficulty filter
      if (activeDifficulty !== 'All' && q.d !== activeDifficulty) return false;

      // 4. Bookmarks only filter
      if (showOnlyBookmarks && !bookmarks.has(q.id)) return false;

      // 5. Search keyword filter
      if (term) {
        const fullContent = [q.q, q.a, q.e, q.f, q.c, q.d].join(' ').toLowerCase();
        if (!fullContent.includes(term)) return false;
      }

      return true;
    });
  }

  // Render Category Tiles
  function renderCategories() {
    const el = $('#categoryTiles');
    if (!el) return;

    el.innerHTML = categories.map(c => {
      const count = questions.filter(c.match).length;
      const isActive = activeMainCategory === c.name;
      return `
        <button class="category-tile ${isActive ? 'active' : ''}" data-cat="${c.name}" role="tab" aria-selected="${isActive}">
          <div class="tile-icon">${c.icon}</div>
          <div class="tile-info">
            <span class="tile-title">${c.name}</span>
            <span class="tile-desc">${c.desc}</span>
          </div>
          <span class="tile-count-badge">${count}</span>
        </button>
      `;
    }).join('');

    el.querySelectorAll('[data-cat]').forEach(btn => {
      btn.onclick = () => {
        activeMainCategory = btn.dataset.cat;
        populateSubcategories();
        currentIndex = 0;
        answerRevealed = false;
        renderCategories();
        refresh();
      };
    });
  }

  // Populate subcategories dropdown
  function populateSubcategories() {
    const select = $('#categorySelect');
    if (!select) return;

    const activeCatDef = categories.find(c => c.name === activeMainCategory);
    const availableCategories = new Set(
      questions
        .filter(q => !activeCatDef || activeCatDef.match(q))
        .map(q => q.c)
    );

    const currentValue = select.value;
    select.innerHTML = '<option value="">All Topics in ' + activeMainCategory + '</option>';

    Array.from(availableCategories).sort().forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      if (c === currentValue) opt.selected = true;
      select.appendChild(opt);
    });
  }

  // Update Toolbar status
  function updateToolbarState() {
    // Difficulty pill buttons
    $$('.diff-pill').forEach(btn => {
      btn.classList.toggle('active-filter', btn.dataset.diff === activeDifficulty);
    });

    // Starred filter button
    const starBtn = $('#starredFilterBtn');
    if (starBtn) {
      starBtn.classList.toggle('active-filter', showOnlyBookmarks);
      starBtn.innerHTML = `⭐ Starred (${bookmarks.size})`;
    }

    // Study mode button
    const studyBtn = $('#studyModeBtn');
    if (studyBtn) {
      studyBtn.classList.toggle('active-filter', studyMode);
      studyBtn.innerHTML = studyMode ? '🎯 Practice Mode: ON' : '📖 Read Mode';
    }

    // Clear search button visibility
    const searchInput = $('#searchInput');
    const clearBtn = $('#searchClear');
    if (clearBtn && searchInput) {
      clearBtn.style.display = searchInput.value ? 'block' : 'none';
    }
  }

  // Refresh Questions List and UI
  function refresh() {
    const oldId = currentFiltered[currentIndex]?.id;
    currentFiltered = getFilteredQuestions();

    // Preserve current question if still in filtered list
    let newIndex = currentFiltered.findIndex(q => q.id === oldId);
    currentIndex = newIndex >= 0 ? newIndex : Math.min(currentIndex, Math.max(0, currentFiltered.length - 1));

    updateToolbarState();
    renderCurrentQuestion();
    renderDrawerList();
  }

  // Render the current question card
  function renderCurrentQuestion() {
    const card = $('#questionCard');
    const positionEl = $('#positionCounter');
    const progressBar = $('#progressBarFill');
    if (!card) return;

    if (!currentFiltered.length) {
      if (positionEl) positionEl.textContent = '0 Questions';
      if (progressBar) progressBar.style.width = '0%';

      card.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <div class="empty-state-title">No matching questions found</div>
          <div class="empty-state-desc">Try clearing your search query or selecting a different difficulty or category.</div>
          <button class="btn primary" id="resetFiltersBtn">Reset All Filters</button>
        </div>
      `;

      $('#resetFiltersBtn').onclick = () => {
        if ($('#searchInput')) $('#searchInput').value = '';
        if ($('#categorySelect')) $('#categorySelect').value = '';
        activeMainCategory = 'React Native';
        activeDifficulty = 'All';
        showOnlyBookmarks = false;
        populateSubcategories();
        renderCategories();
        refresh();
        showToast('Filters cleared', '🧹');
      };
      return;
    }

    const q = currentFiltered[currentIndex];
    const total = currentFiltered.length;
    const progressPercent = Math.round(((currentIndex + 1) / total) * 100);

    if (positionEl) {
      positionEl.textContent = `Question ${currentIndex + 1} of ${total}`;
    }
    if (progressBar) {
      progressBar.style.width = `${progressPercent}%`;
    }

    const isStarred = bookmarks.has(q.id);
    const difficultyClass = q.d === 'Easy' ? 'badge-easy' : q.d === 'Hard' ? 'badge-hard' : 'badge-medium';

    // Build Question HTML
    const showAnswer = !studyMode || answerRevealed;

    let answerHtml = '';
    if (showAnswer) {
      answerHtml = `
        <div class="answer-content">
          <div class="answer-section">
            <div class="answer-badge-header">💡 Comprehensive Answer</div>
            <p class="answer-text">${escapeHtml(q.a)}</p>
          </div>

          <div class="scenario-box">
            <div class="answer-badge-header scenario-header">💼 Real-World Scenario / Production Example</div>
            <p class="answer-text">${escapeHtml(q.e)}</p>
          </div>

          <div class="follow-up-box">
            <div class="answer-badge-header follow-up-header">🎯 Possible Interviewer Follow-Up</div>
            <p class="answer-text follow-up-text">“${escapeHtml(q.f)}”</p>
          </div>
        </div>
      `;
    } else {
      answerHtml = `
        <div class="study-mode-container">
          <div class="study-prompt-box">
            <div class="study-prompt-icon">🤔</div>
            <div class="study-prompt-text">
              <strong>Practice Mode Active</strong><br>
              Try to explain this answer, native mechanics, or STAR example out loud first before looking!
            </div>
            <button class="btn primary" id="revealAnswerBtn">
              Reveal Answer & Notes (Space)
            </button>
          </div>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="card-header-meta">
        <div class="chips-group">
          <span class="badge badge-topic">${escapeHtml(q.c)}</span>
          <span class="badge ${difficultyClass}">● ${q.d}</span>
        </div>
        <div class="card-header-actions">
          <button class="btn-card-action ${isStarred ? 'starred' : ''}" id="cardBookmarkBtn" title="${isStarred ? 'Remove Star' : 'Star this question'} (B)">
            ${isStarred ? '★ Starred' : '☆ Star'}
          </button>
          <button class="btn-card-action" id="cardCopyBtn" title="Copy Question & Answer">
            📋 Copy
          </button>
        </div>
      </div>

      <h1 class="question-title">${escapeHtml(q.q)}</h1>

      ${answerHtml}

      <div class="navigation-bar">
        <div class="nav-buttons-left">
          <button class="btn" id="navPrevBtn" ${currentIndex === 0 ? 'disabled' : ''}>
            ← Previous (Left)
          </button>
          <button class="btn primary" id="navNextBtn" ${currentIndex === total - 1 ? 'disabled' : ''}>
            Next Question → (Right)
          </button>
        </div>
        <div class="nav-buttons-right">
          <button class="btn secondary" id="randomQuestionBtn" title="Jump to a random question">
            🎲 Random
          </button>
          <button class="btn" id="openDrawerBtn" title="View all questions in drawer">
            ☰ All Questions
          </button>
        </div>
      </div>
    `;

    // Hook up Card Actions
    $('#navPrevBtn').onclick = () => navigateQuestion(-1);
    $('#navNextBtn').onclick = () => navigateQuestion(1);
    $('#randomQuestionBtn').onclick = pickRandomQuestion;
    $('#openDrawerBtn').onclick = () => toggleDrawer(true);

    if ($('#revealAnswerBtn')) {
      $('#revealAnswerBtn').onclick = () => {
        answerRevealed = true;
        renderCurrentQuestion();
      };
    }

    $('#cardBookmarkBtn').onclick = () => {
      toggleBookmark(q.id);
    };

    $('#cardCopyBtn').onclick = () => {
      copyQuestionContent(q);
    };
  }

  // Navigate Questions
  function navigateQuestion(delta) {
    if (!currentFiltered.length) return;
    const newIndex = currentIndex + delta;
    if (newIndex >= 0 && newIndex < currentFiltered.length) {
      currentIndex = newIndex;
      answerRevealed = false;
      renderCurrentQuestion();
      renderDrawerList();
    }
  }

  // Pick Random Question
  function pickRandomQuestion() {
    if (currentFiltered.length <= 1) return;
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * currentFiltered.length);
    } while (randomIndex === currentIndex && currentFiltered.length > 1);

    currentIndex = randomIndex;
    answerRevealed = false;
    renderCurrentQuestion();
    renderDrawerList();
    showToast('Random question selected', '🎲');
  }

  // Toggle Bookmark
  function toggleBookmark(id) {
    if (bookmarks.has(id)) {
      bookmarks.delete(id);
      showToast('Removed from Starred', '☆');
    } else {
      bookmarks.add(id);
      showToast('Added to Starred questions', '★');
    }
    saveBookmarks();
    updateToolbarState();
    renderCurrentQuestion();
    renderDrawerList();
  }

  // Copy Question Content to Clipboard
  function copyQuestionContent(q) {
    const textToCopy = `📌 [${q.c} · ${q.d}]\nQ: ${q.q}\n\n💡 Answer:\n${q.a}\n\n💼 Real-World Scenario:\n${q.e}\n\n🎯 Possible Follow-Up:\n${q.f}\n\n(Curated by Yash Adroja - React Native Prep Hub)`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy)
        .then(() => showToast('Question copied to clipboard!', '📋'))
        .catch(() => fallbackCopy(textToCopy));
    } else {
      fallbackCopy(textToCopy);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast('Question copied to clipboard!', '📋');
    } catch (e) {
      showToast('Unable to copy', '⚠️');
    }
    ta.remove();
  }

  // Render Drawer Questions
  function renderDrawerList() {
    const list = $('#drawerQuestionsList');
    const countEl = $('#drawerTotalCount');
    if (!list) return;

    const total = currentFiltered.length;
    if (countEl) countEl.textContent = `${total} question${total === 1 ? '' : 's'}`;

    list.innerHTML = currentFiltered.map((q, idx) => {
      const isActive = idx === currentIndex;
      const isStarred = bookmarks.has(q.id);
      return `
        <button class="drawer-item ${isActive ? 'active' : ''}" data-idx="${idx}">
          <span class="drawer-number">${String(idx + 1).padStart(2, '0')}</span>
          <div class="drawer-copy">
            <span class="drawer-q-text">${escapeHtml(q.q)}</span>
            <div class="drawer-meta-tags">
              <span>${escapeHtml(q.c)}</span>
              <span>·</span>
              <span>${q.d}</span>
              ${isStarred ? '<span style="color: #f59e0b">★</span>' : ''}
            </div>
          </div>
        </button>
      `;
    }).join('');

    list.querySelectorAll('[data-idx]').forEach(item => {
      item.onclick = () => {
        currentIndex = Number(item.dataset.idx);
        answerRevealed = false;
        renderCurrentQuestion();
        renderDrawerList();
        toggleDrawer(false);
      };
    });
  }

  // Drawer Toggle
  function toggleDrawer(open) {
    const drawer = $('#sideDrawer');
    const shade = $('#modalShade');
    if (!drawer || !shade) return;

    const shouldOpen = open !== undefined ? open : !drawer.classList.contains('open');
    drawer.classList.toggle('open', shouldOpen);
    shade.classList.toggle('visible', shouldOpen);
    $('#menuToggleBtn')?.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
  }

  // Modal Dialog Toggles
  function toggleModal(modalId, open) {
    const modal = $(modalId);
    const shade = $('#modalShade');
    if (!modal || !shade) return;

    const shouldOpen = open !== undefined ? open : !modal.classList.contains('visible');
    modal.classList.toggle('visible', shouldOpen);
    shade.classList.toggle('visible', shouldOpen);
  }

  function closeAllOverlays() {
    toggleDrawer(false);
    $$('.modal-dialog').forEach(m => m.classList.remove('visible'));
    $('#modalShade')?.classList.remove('visible');
  }

  // Theme Management
  function initTheme() {
    let savedTheme = null;
    try {
      savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
    } catch (e) {}

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    applyTheme(initialTheme);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeBtn = $('#themeToggleBtn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? '☀ Light' : '☾ Dark';
      themeBtn.title = `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode (T)`;
    }
    try {
      localStorage.setItem(STORAGE_KEY_THEME, theme);
    } catch (e) {}
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
    showToast(`Switched to ${currentTheme} mode`, currentTheme === 'dark' ? '☾' : '☀');
  }

  // Onboarding Guide Check
  function checkOnboarding() {
    try {
      const seen = localStorage.getItem(STORAGE_KEY_ONBOARDING);
      if (!seen) {
        setTimeout(() => {
          toggleModal('#onboardingModal', true);
        }, 400);
      }
    } catch (e) {}
  }

  // Attach Event Listeners
  function attachEventListeners() {
    // Search input
    const searchInput = $('#searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        currentIndex = 0;
        answerRevealed = false;
        refresh();
      });
    }

    // Search clear button
    const searchClear = $('#searchClear');
    if (searchClear) {
      searchClear.onclick = () => {
        searchInput.value = '';
        currentIndex = 0;
        answerRevealed = false;
        refresh();
        searchInput.focus();
      };
    }

    // Category select dropdown
    const catSelect = $('#categorySelect');
    if (catSelect) {
      catSelect.addEventListener('change', () => {
        currentIndex = 0;
        answerRevealed = false;
        refresh();
      });
    }

    // Difficulty pill buttons
    $$('.diff-pill').forEach(btn => {
      btn.onclick = () => {
        activeDifficulty = btn.dataset.diff;
        currentIndex = 0;
        answerRevealed = false;
        refresh();
      };
    });

    // Starred filter button
    const starBtn = $('#starredFilterBtn');
    if (starBtn) {
      starBtn.onclick = () => {
        showOnlyBookmarks = !showOnlyBookmarks;
        currentIndex = 0;
        answerRevealed = false;
        refresh();
        showToast(showOnlyBookmarks ? 'Filtering by Starred questions' : 'Showing all questions', '⭐');
      };
    }

    // Study mode toggle
    const studyBtn = $('#studyModeBtn');
    if (studyBtn) {
      studyBtn.onclick = () => {
        studyMode = !studyMode;
        saveStudyMode();
        answerRevealed = false;
        updateToolbarState();
        renderCurrentQuestion();
        showToast(studyMode ? 'Practice Mode activated: answers hidden' : 'Standard Read Mode', '🎯');
      };
    }

    // Theme toggle button
    const themeBtn = $('#themeToggleBtn');
    if (themeBtn) {
      themeBtn.onclick = toggleTheme;
    }

    // Drawer menu buttons
    $('#menuToggleBtn')?.addEventListener('click', () => toggleDrawer());
    $('#drawerCloseBtn')?.addEventListener('click', () => toggleDrawer(false));

    // Guide Modal
    $('#guideBtn')?.addEventListener('click', () => toggleModal('#onboardingModal', true));
    $('#closeGuideBtn')?.addEventListener('click', () => toggleModal('#onboardingModal', false));
    $('#startPracticingBtn')?.addEventListener('click', () => {
      const dontShow = $('#dontShowAgainCheck')?.checked;
      if (dontShow) {
        try {
          localStorage.setItem(STORAGE_KEY_ONBOARDING, 'true');
        } catch (e) {}
      }
      toggleModal('#onboardingModal', false);
      showToast('Happy Interview Prepping! 🚀', '🎉');
    });

    // Shortcuts Modal
    $('#shortcutsBtn')?.addEventListener('click', () => toggleModal('#shortcutsModal', true));
    $('#closeShortcutsBtn')?.addEventListener('click', () => toggleModal('#shortcutsModal', false));

    // Shade click closes all
    $('#modalShade')?.addEventListener('click', closeAllOverlays);

    // Global Keyboard Shortcuts
    document.addEventListener('keydown', e => {
      // Don't intercept if user is typing in input or select
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        if (e.key === 'Escape') {
          document.activeElement.blur();
        }
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'l':
          e.preventDefault();
          navigateQuestion(1);
          break;
        case 'ArrowLeft':
        case 'h':
          e.preventDefault();
          navigateQuestion(-1);
          break;
        case ' ':
          e.preventDefault();
          if (studyMode) {
            answerRevealed = !answerRevealed;
            renderCurrentQuestion();
          }
          break;
        case 'b':
        case 'B':
          e.preventDefault();
          if (currentFiltered[currentIndex]) {
            toggleBookmark(currentFiltered[currentIndex].id);
          }
          break;
        case 'r':
        case 'R':
          e.preventDefault();
          pickRandomQuestion();
          break;
        case 'm':
        case 'M':
          e.preventDefault();
          toggleDrawer();
          break;
        case 't':
        case 'T':
          e.preventDefault();
          toggleTheme();
          break;
        case '?':
          e.preventDefault();
          toggleModal('#shortcutsModal');
          break;
        case '/':
          e.preventDefault();
          $('#searchInput')?.focus();
          break;
        case 'Escape':
          closeAllOverlays();
          break;
      }
    });
  }

  // App Initialization
  function init() {
    initStorage();
    initTheme();
    populateSubcategories();
    renderCategories();
    attachEventListeners();
    refresh();
    checkOnboarding();
  }

  // Boot on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
