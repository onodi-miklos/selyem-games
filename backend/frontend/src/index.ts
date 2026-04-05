// dialog
const dialog = document.getElementById("signup") as HTMLElement | null;

const startBtn: HTMLElement = document.getElementById('startBtn') as HTMLButtonElement;
const closeBtn: HTMLElement | null = document.getElementById('closeBtn');

if (startBtn) {
  startBtn.addEventListener('click', start)
}

if (closeBtn) {
  closeBtn.addEventListener('click', hide)
}

if (dialog) {
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      dialog.style.display = 'none';
    }
  });
}

const cover: HTMLElement = document.getElementById('cover') as HTMLDivElement
function start(): void {
  if (dialog && cover) {
    dialog.style.display = 'flex';
    cover.style.display = 'block'
  }
}

function hide(): void {
  if (dialog && cover) {
    dialog.style.display = 'none';
    cover.style.display = 'none';
  }
}

hide()

// characters
import {characters} from './characters.js'

/** Matches exported character SVGs: paths use ~0–500 coords while width/height were 100px, which clips art. */
const SVG_VIEW_BOX = '-80 -40 560 520'

/**
 * Mosoly is exported with translate(0,486) scale(0.1,-0.1). The 0.1 scale shrinks the face ~10× vs
 * other arcs; the flip + wrong tweaks made it upside down. Paths use the same ~0–500 space as merges
 * once this Inkscape wrapper is removed.
 */
function fixMosolyStyleCoordinateGroup(svgHtml: string): string {
  return svgHtml.replace(
    /<g\s+transform="translate\(0(?:\.0+)?,\s*486(?:\.0+)?\)\s*scale\(0\.1(?:0+)?,\s*-0\.1(?:0+)?\)">/gi,
    '<g>',
  )
}

function normalizeSvgForDisplay(
  svgHtml: string,
  opts?: { fixMosolyInkscapeGroup?: boolean },
): string {
  let src = svgHtml
  if (opts?.fixMosolyInkscapeGroup) {
    src = fixMosolyStyleCoordinateGroup(src)
  }
  const stripped = src
    .trim()
    .replace(/<\?xml[^>]*\?>\s*/gi, '')
    .replace(/<!DOCTYPE[^>]*>\s*/gi, '')
  return stripped.replace(/<svg\b([^>]*)>/i, (_match, attrs: string) => {
    let a = attrs
    if (!/\bviewBox\s*=/i.test(a)) {
      a += ` viewBox="${SVG_VIEW_BOX}"`
    }
    if (!/\bpreserveAspectRatio\s*=/i.test(a)) {
      a += ' preserveAspectRatio="xMidYMid meet"'
    }
    a = a.replace(/\swidth\s*=\s*["'][^"']*["']/gi, '')
    a = a.replace(/\sheight\s*=\s*["'][^"']*["']/gi, '')
    return `<svg${a} width="100%" height="100%">`
  })
}

// haj
const hajPrev: HTMLElement = document.getElementById(
  "hajPrev",
) as HTMLButtonElement;
const hajNext: HTMLElement = document.getElementById(
  "hajNext",
) as HTMLButtonElement;
const hajEl: HTMLElement | null = document.getElementById("haj");
let haj: number = 1;
const hajLength: number = 4;

function checkHaj(state: number): number {
  if (state < 1) {
    haj = hajLength;
    return haj;
  } else if (state > hajLength) {
    haj = 1;
    return haj;
  } else {
    return haj;
  }
}
hajPrev.onclick = function (): void {
  haj--;
  updateHaj(checkHaj(haj));
};
hajNext.onclick = function (): void {
  haj++;
  updateHaj(checkHaj(haj));
};
function updateHaj(state: number): void {
  if (hajEl) {
    switch (state) {
      case 1:
        hajEl.innerHTML = characters.normal;
        break
      case 2:
        hajEl.innerHTML = characters.lany;
        break
      case 3:
        hajEl.innerHTML = characters.tokfilko;
        break
      case 4:
        hajEl.innerHTML = characters.bandi;
        break
    }
    hajEl.innerHTML = normalizeSvgForDisplay(hajEl.innerHTML)
    hajEl.classList.toggle('hair-nudge-up', state === 3 || state === 4)
  }

  updatePreview()
}

// arc
const arcPrev: HTMLElement = document.getElementById(
  "arcPrev",
) as HTMLButtonElement;
const arcNext: HTMLElement = document.getElementById(
  "arcNext",
) as HTMLButtonElement;
const arcEl: HTMLElement | null = document.getElementById("arc");
let arc: number = 1;
const arcLength: number = 5;

function checkArc(state: number): number {
  if (state < 1) {
    arc = arcLength;
    return arc;
  } else if (state > arcLength) {
    arc = 1;
    return arc;
  } else {
    return arc;
  }
}
arcPrev.onclick = function () {
  arc--;
  updateArc(checkArc(arc));
};
arcNext.onclick = function (): void {
  arc++;
  updateArc(checkArc(arc));
};
function updateArc(state: number): void {
  if (arcEl) {
    let raw = ''
    let fixMosoly = false
    switch (state) {
      case 1:
        raw = characters.mosoly
        fixMosoly = true
        break
      case 2:
        raw = characters.merges
        break
      case 3:
        raw = characters.normalis
        break
      case 4:
        raw = characters.kawaii
        break
      case 5:
        raw = characters.roblox
        break
    }
    arcEl.innerHTML = normalizeSvgForDisplay(raw, {
      fixMosolyInkscapeGroup: fixMosoly,
    })
  }

  updatePreview()
}

// szin
const szinPrev: HTMLElement = document.getElementById(
  "szinPrev",
) as HTMLButtonElement;
const szinNext: HTMLElement = document.getElementById(
  "szinNext",
) as HTMLButtonElement;
const szinEl: HTMLElement | null = document.getElementById("szin");
let szin: number = 1;
const szinLength: number = 6;

function checkSzin(state: number): number {
  if (state < 1) {
    szin = szinLength;
    return szin;
  } else if (state > szinLength) {
    szin = 1;
    return szin;
  } else {
    return szin;
  }
}
szinPrev.onclick = function () {
  szin--;
  updateSzin(checkSzin(szin));
};
szinNext.onclick = function (): void {
  szin++;
  updateSzin(checkSzin(szin));
};
function updateSzin(state: number): void {
  if (szinEl) {
    switch (state) {
      case 1:
        szinEl.innerHTML = characters.feher;
        break
      case 2:
        szinEl.innerHTML = characters.fekete;
        break
      case 3:
        szinEl.innerHTML = characters.kek;
        break
      case 4:
        szinEl.innerHTML = characters.piros;
        break
      case 5:
        szinEl.innerHTML = characters.sarga;
        break
      case 6:
        szinEl.innerHTML = characters.zold;
        break
    }
    szinEl.innerHTML = normalizeSvgForDisplay(szinEl.innerHTML)
  }
  updatePreview()
}

// preview — composite layers (skin → face → hair) centered and stacked
const preview: HTMLElement | null = document.getElementById("preview");

function updatePreview(): void {
  if (!preview || !hajEl || !arcEl || !szinEl) {
    return
  }
  const skin = szinEl.innerHTML
  const face = arcEl.innerHTML
  const hair = hajEl.innerHTML
  const hairNudge =
    haj === 3 || haj === 4 ? ' preview-stack__layer--hair-nudge' : ''
  preview.innerHTML = `
    <div class="preview-stack">
      <div class="preview-stack__layer preview-stack__layer--skin">${skin}</div>
      <div class="preview-stack__layer preview-stack__layer--face">${face}</div>
      <div class="preview-stack__layer preview-stack__layer--hair${hairNudge}">${hair}</div>
    </div>
  `
}
updateHaj(1)
updateArc(1)
updateSzin(1)





const submitBtn: HTMLElement = document.getElementById('submitBtn') as HTMLButtonElement;

if(submitBtn){
  submitBtn.onclick = submit;
}

function submit():void{}