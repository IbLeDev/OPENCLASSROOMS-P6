export function connecte() {
  let token = localStorage.token;
  if (token !== undefined) {
    return true;
  } else {
    console.log(false);
    return false;
  }
}
