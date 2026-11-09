(() => {
  const AVATAR_URL = "https://avatars.githubusercontent.com/u/4398869?v=4";
  const TITLE = "Artefatos Inteligentes";
  const SUBTITLE = "por Ermeson Silva";
  const STORAGE_KEY = "ia-direito-profile-box-collapsed";

  const style = document.createElement("style");
  style.textContent = `
    #profile-box {
      position: fixed;
      top: 16px;
      left: 16px;
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 12px;
      background: #ffffff;
      border: 1px solid #e5e5e5;
      border-radius: 16px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
      padding: 10px 14px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      cursor: pointer;
      user-select: none;
      transition: padding 0.2s ease, gap 0.2s ease;
    }
    #profile-box .profile-box-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
    }
    #profile-box .profile-box-text {
      display: flex;
      flex-direction: column;
      line-height: 1.25;
      white-space: nowrap;
      overflow: hidden;
      max-width: 260px;
      opacity: 1;
      transition: max-width 0.2s ease, opacity 0.15s ease, margin 0.2s ease;
    }
    #profile-box .profile-box-title {
      font-size: 15px;
      font-weight: 600;
      color: #1a1a1a;
    }
    #profile-box .profile-box-subtitle {
      font-size: 13px;
      color: #8a8a8a;
    }
    #profile-box .profile-box-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      border: 1px solid #e5e5e5;
      border-radius: 6px;
      color: #9a9a9a;
      flex-shrink: 0;
      transition: transform 0.2s ease;
    }
    #profile-box.collapsed {
      padding: 6px;
      gap: 0;
    }
    #profile-box.collapsed .profile-box-text {
      max-width: 0;
      opacity: 0;
      margin: 0;
    }
    #profile-box.collapsed .profile-box-toggle {
      display: none;
    }
  `;
  document.head.appendChild(style);

  const box = document.createElement("div");
  box.id = "profile-box";

  const avatar = document.createElement("img");
  avatar.className = "profile-box-avatar";
  avatar.src = AVATAR_URL;
  avatar.alt = SUBTITLE;

  const text = document.createElement("div");
  text.className = "profile-box-text";

  const title = document.createElement("div");
  title.className = "profile-box-title";
  title.textContent = TITLE;

  const subtitle = document.createElement("div");
  subtitle.className = "profile-box-subtitle";
  subtitle.textContent = SUBTITLE;

  text.append(title, subtitle);

  const toggle = document.createElement("div");
  toggle.className = "profile-box-toggle";
  toggle.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 2L9 6L3 10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  box.append(avatar, text, toggle);
  document.body.appendChild(box);

  function applyCollapsed(collapsed) {
    box.classList.toggle("collapsed", collapsed);
    toggle.style.transform = collapsed ? "rotate(180deg)" : "";
  }

  let collapsed = false;
  try {
    collapsed = localStorage.getItem(STORAGE_KEY) === "1";
  } catch (e) { }
  applyCollapsed(collapsed);

  box.addEventListener("click", () => {
    collapsed = !collapsed;
    applyCollapsed(collapsed);
    try {
      localStorage.setItem(STORAGE_KEY, collapsed ? "1" : "0");
    } catch (e) { }
  });
})();

(() => {
  // O markmap renderiza o conteúdo dos nós (e seus blocos <pre>) dentro do
  // Shadow DOM do <markmap-view>, isolado do CSS do documento principal.
  // Por isso o estilo abaixo é injetado em todo Shadow Root encontrado,
  // além do próprio <head> do documento (onde fica o popover de notas).
  const TREE_CSS = `
    .markmap-popover {
      max-width: min(620px, calc(100vw - 16px)) !important;
      max-height: min(70vh, 640px) !important;
    }
    pre.has-copy-btn {
      position: relative !important;
      padding: 18px 46px 18px 22px !important;
      font-size: 14.5px !important;
      line-height: 1.7 !important;
      border-radius: 10px !important;
    }
    .code-copy-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 26px;
      height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      cursor: pointer;
      color: #6a6a6a;
      padding: 0;
      z-index: 10;
    }
    .code-copy-btn:hover {
      background: #ffffff;
      color: #1a1a1a;
    }
  `;

  const TOAST_CSS = `
    .code-copy-toast {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%) translateY(10px);
      background: #1a1a1a;
      color: #ffffff;
      padding: 8px 16px;
      border-radius: 8px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 13px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease, transform 0.2s ease;
      z-index: 10001;
    }
    .code-copy-toast.visible {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  `;

  const toastStyle = document.createElement("style");
  toastStyle.textContent = TOAST_CSS;
  document.head.appendChild(toastStyle);

  const COPY_ICON = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;

  let toastEl = null;
  let toastTimer = null;

  function showToast(message) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "code-copy-toast";
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = message;
    requestAnimationFrame(() => toastEl.classList.add("visible"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove("visible");
    }, 1800);
  }

  function addCopyButton(pre) {
    if (pre.classList.contains("has-copy-btn")) return;
    pre.classList.add("has-copy-btn");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "code-copy-btn";
    btn.title = "Copiar código";
    btn.innerHTML = COPY_ICON;

    btn.addEventListener("click", async (event) => {
      event.stopPropagation();
      const code = pre.textContent;
      try {
        await navigator.clipboard.writeText(code);
      } catch (e) {
        const textarea = document.createElement("textarea");
        textarea.value = code;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      showToast("Copiado!");
    });

    pre.appendChild(btn);
  }

  function scanForPre(root) {
    if (!(root instanceof Element) && !(root instanceof Document) && !(root instanceof DocumentFragment)) return;
    if (root instanceof Element && root.tagName === "PRE") {
      addCopyButton(root);
      return;
    }
    root.querySelectorAll?.("pre").forEach(addCopyButton);
  }

  function findShadowRoots(root) {
    const found = [];
    const stack = [root];
    while (stack.length) {
      const node = stack.pop();
      const els = node.querySelectorAll ? node.querySelectorAll("*") : [];
      els.forEach((el) => {
        if (el.shadowRoot) {
          found.push(el.shadowRoot);
          stack.push(el.shadowRoot);
        }
      });
    }
    return found;
  }

  function setupRoot(root) {
    const isDocument = root.nodeType === Node.DOCUMENT_NODE;
    const styleParent = isDocument ? root.head : root;
    const style = document.createElement("style");
    style.textContent = TREE_CSS;
    styleParent.appendChild(style);

    scanForPre(root);

    const target = isDocument ? root.body : root;
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          scanForPre(node);
          if (node.shadowRoot) setupRoot(node.shadowRoot);
          findShadowRoots(node).forEach(setupRoot);
        });
      }
    });
    observer.observe(target, { childList: true, subtree: true });
  }

  setupRoot(document);
  findShadowRoots(document).forEach(setupRoot);
})();
