export async function recupererTravauxJSON() {
  let reponse = await fetch("http://localhost:5678/api/works");
  let travaux = await reponse.json();
  return travaux;
}
