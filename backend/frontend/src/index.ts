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