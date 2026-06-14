/* ============================================
   AgriBotany Hub — Shared UI (header/footer/nav)
   ============================================ */

const NAV_LINKS = [
  { href: "index.html", label: "Home", key: "home" },
  { href: "botany-notes.html", label: "Botany Notes", key: "botany" },
  { href: "agriculture.html", label: "Agriculture", key: "agriculture" },
  { href: "plant-id.html", label: "Plant ID", key: "plantid" },
  { href: "medicinal-plants.html", label: "Medicinal Plants", key: "medicinal" },
  { href: "forestry.html", label: "Forestry", key: "forestry" },
  { href: "careers.html", label: "Careers", key: "careers" },
  { href: "internship.html", label: "Internship", key: "internship" },
  { href: "quiz.html", label: "Quiz", key: "quiz" },
  { href: "blog.html", label: "Blog", key: "blog" },
  { href: "contact.html", label: "Contact", key: "contact" }
];

function renderHeader(activeKey) {
  const navHtml = NAV_LINKS.map(link =>
    `<a href="${link.href}" class="${link.key === activeKey ? 'active' : ''}">${link.label}</a>`
  ).join("");

  return `
  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="logo" style="text-decoration:none;">
        <span class="leaf-mark">🌿</span>
        <span>
          AgriBotany Hub
          <span class="sub">Botany · Agriculture · Forestry</span>
        </span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">☰</button>
      <nav class="main-nav" id="mainNav">${navHtml}</nav>
      <form class="search-form" id="siteSearchForm" role="search">
        <input type="search" id="siteSearchInput" placeholder="Search plants, articles..." aria-label="Search">
        <button type="submit" aria-label="Search">🔍</button>
      </form>
    </div>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <h4>AgriBotany Hub</h4>
          <p style="max-width:32ch; opacity:0.85; font-size:0.9rem;">A student-built resource combining Botany, Agriculture, Forestry and Plant Science for students, farmers, and nature enthusiasts.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="botany-notes.html">Botany Notes</a></li>
            <li><a href="agriculture.html">Agriculture</a></li>
            <li><a href="plant-id.html">Plant ID</a></li>
            <li><a href="forestry.html">Forestry Corner</a></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><a href="medicinal-plants.html">Medicinal Plants</a></li>
            <li><a href="careers.html">Career Guidance</a></li>
            <li><a href="internship.html">Internship & Training</a></li>
            <li><a href="quiz.html">Quiz Section</a></li>
          </ul>
        </div>
        <div>
          <h4>Connect</h4>
          <ul>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="admin.html">Admin Login</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 AgriBotany Hub. Built by a B.Sc. Botany student.</span>
        <span>🌱 Grow knowledge, grow the future.</span>
      </div>
    </div>
  </footer>`;
}

function initSharedUI(activeKey) {
  document.getElementById("header-placeholder").innerHTML = renderHeader(activeKey);
  document.getElementById("footer-placeholder").innerHTML = renderFooter();

  // Mobile nav toggle
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Search
  const searchForm = document.getElementById("siteSearchForm");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = document.getElementById("siteSearchInput").value.trim();
    if (q) {
      window.location.href = "search.html?q=" + encodeURIComponent(q);
    }
  });
}

/* ============ Admin bar (shown on content pages) ============ */
function initAdminBar(containerId, onToggle) {
  const container = document.getElementById(containerId);
  if (!container) return;

  function render() {
    if (AdminAuth.isLoggedIn()) {
      container.innerHTML = `
        <div class="admin-bar">
          <span>🔧 Admin mode active — you can add/edit/delete content on this page.</span>
          <button id="adminLogoutBtn">Log out</button>
        </div>`;
      document.getElementById("adminLogoutBtn").addEventListener("click", () => {
        AdminAuth.logout();
        render();
        if (onToggle) onToggle(false);
      });
      if (onToggle) onToggle(true);
    } else {
      container.innerHTML = `
        <div class="admin-bar">
          <span>Viewing as guest.</span>
          <a href="admin.html" style="color: var(--gold);">Admin login</a>
        </div>`;
      if (onToggle) onToggle(false);
    }
  }
  render();
}

/* ============ Small helpers ============ */
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}
