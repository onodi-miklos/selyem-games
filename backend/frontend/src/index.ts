// dialog
const dialog = document.getElementById("signup") as HTMLDialogElement | null;

function start(): void {
  if (dialog) {
    dialog.showModal();
  }
}

function hide(): void {
  if (dialog) {
    dialog.close();
  }
}

// characters

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
    hajEl.textContent = String(state);
  }
  updatePreview([String(haj), String(arc), String(szin)])

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
    arcEl.textContent = String(state);
  }
  updatePreview([String(haj), String(arc), String(szin)])

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
    szinEl.textContent = String(state);
  }
  updatePreview([String(haj), String(arc), String(szin)])
}

// preview
const preview: HTMLElement | null = document.getElementById("preview");

function updatePreview(states: string[]): void {


  const content: string = states.join('');
  if (preview) {
    preview.textContent = content;
  }

}
updatePreview([String(haj), String(arc), String(szin)])
