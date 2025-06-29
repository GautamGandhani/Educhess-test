// Restore the saved path after GitHub redirect
const redirectPath = sessionStorage.redirect;
if (redirectPath) {
  sessionStorage.removeItem("redirect");
  history.replaceState(null, "", redirectPath);
}
