export function checkConnexion() {
    if (localStorage.token !== undefined) {
        pageAdmin()
    }
}