const createCard: HTMLElement = document.getElementById(
  "create",
) as HTMLDivElement;
const closeBtn: HTMLElement = document.getElementById(
  "closeBtn",
) as HTMLButtonElement;

const cover: HTMLElement = document.getElementById("cover") as HTMLDivElement;
const createRoom: HTMLElement = document.getElementById(
  "createRoom",
) as HTMLDivElement;

if (createCard) {
  createCard.onclick = function (): void {
    if (cover && createRoom) {
      cover.style.display = "block";
      createRoom.style.display = "flex";
    }
  };
}
if (closeBtn) {
  closeBtn.onclick = function (): void {
    if (cover && createRoom) {
      cover.style.display = "none";
      createRoom.style.display = "none";
    }
  };
}

const checkbox: HTMLInputElement = document.getElementById(
  "private",
) as HTMLInputElement;

const jelkodHolder: HTMLDivElement = document.getElementById(
  "jelkodHolder",
) as HTMLDivElement;

if (checkbox && jelkodHolder) {
  checkbox.onclick = check;
}
function check(): void {
  if (checkbox.checked) {
    jelkodHolder.style.visibility = "visible";
  } else {
    jelkodHolder.style.visibility = "hidden";
  }
}
check();

interface User {
  nev: string;
  haj: number;
  arc: number;
  szin: number;
}
const userJson = localStorage.getItem("user");
const user: User = userJson
  ? JSON.parse(userJson)
  : { nev: "", haj: 0, arc: 0, szin: 0 };
