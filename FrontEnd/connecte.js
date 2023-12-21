export function connecte() {
  let token = localStorage.getItem("token");
  if (token !== undefined) {
    return true;
  } else {
    return false;
  }
}
