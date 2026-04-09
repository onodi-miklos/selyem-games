const createCard: HTMLElement = document.getElementById(
  "create",
) as HTMLDivElement;
const closeBtn: HTMLElement = document.getElementById(
  "closeBtn",
) as HTMLButtonElement;

if (createCard) {
  createCard.onclick = show;
}
if (closeBtn) {
  closeBtn.onclick = hide;
}

const cover: HTMLElement = document.getElementById("cover") as HTMLDivElement;
const createRoom: HTMLElement = document.getElementById(
  "createRoom",
) as HTMLDivElement;

function show(): void {
  if (cover && createRoom) {
    cover.style.display = "block";
    createRoom.style.display = "flex";
  }
}

function hide(): void {
  if (cover && createRoom) {
    cover.style.display = "none";
    createRoom.style.display = "none";
  }
}
