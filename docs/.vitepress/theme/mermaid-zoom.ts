// Mermaid re-renders its SVG through Vue's v-html, which wipes any child nodes of
// `.mermaid`. The observer below re-adds the zoom button after every render.
const ZOOM_MIN = 0.5;
const ZOOM_MAX = 4;
const ZOOM_STEP = 0.25;

let started = false;

function labels() {
  return document.documentElement.lang.startsWith("vi")
    ? { zoom: "Phóng to", zoomIn: "Phóng to", zoomOut: "Thu nhỏ", reset: "Đặt lại", close: "Đóng", dialog: "Xem sơ đồ" }
    : { zoom: "Zoom", zoomIn: "Zoom in", zoomOut: "Zoom out", reset: "Reset", close: "Close", dialog: "Diagram viewer" };
}

function makeButton(text: string, title: string, onClick: () => void): HTMLButtonElement {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  button.title = title;
  button.setAttribute("aria-label", title);
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    onClick();
  });
  return button;
}

function openZoom(source: SVGSVGElement): void {
  const l = labels();
  let scale = 1;
  const previousOverflow = document.body.style.overflow;

  const overlay = document.createElement("div");
  overlay.className = "mmd-zoom-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", l.dialog);

  const toolbar = document.createElement("div");
  toolbar.className = "mmd-zoom-toolbar";

  const stage = document.createElement("div");
  stage.className = "mmd-zoom-stage";

  // Mermaid's inline max-width would block scaling, so drop the style and size the clone directly.
  const svg = source.cloneNode(true) as SVGSVGElement;
  svg.removeAttribute("style");
  stage.appendChild(svg);

  const readout = makeButton("100%", l.reset, () => apply(1));

  const apply = (next: number) => {
    scale = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, next));
    svg.style.width = `${scale * 100}%`;
    svg.style.maxWidth = "none";
    svg.style.height = "auto";
    readout.textContent = `${Math.round(scale * 100)}%`;
  };

  const close = () => {
    overlay.remove();
    document.body.style.overflow = previousOverflow;
    document.removeEventListener("keydown", onKey);
  };

  const onKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") close();
  };

  toolbar.append(
    makeButton("−", l.zoomOut, () => apply(scale - ZOOM_STEP)),
    readout,
    makeButton("+", l.zoomIn, () => apply(scale + ZOOM_STEP)),
    makeButton("×", l.close, close),
  );

  overlay.append(toolbar, stage);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });
  document.addEventListener("keydown", onKey);
  document.body.style.overflow = "hidden";
  document.body.appendChild(overlay);
  apply(1);
}

function addZoomButtons(): void {
  document.querySelectorAll<HTMLElement>(".mermaid").forEach((diagram) => {
    const svg = diagram.querySelector("svg");
    if (!svg || diagram.querySelector(":scope > .mmd-zoom-btn")) return;

    const button = makeButton(labels().zoom, labels().zoom, () => openZoom(svg));
    button.className = "mmd-zoom-btn";
    diagram.appendChild(button);
  });
}

export function setupMermaidZoom(): void {
  if (started) return;
  started = true;

  let queued = false;
  new MutationObserver(() => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      addZoomButtons();
    });
  }).observe(document.body, { childList: true, subtree: true });

  addZoomButtons();
}
