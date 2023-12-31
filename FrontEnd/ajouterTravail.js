export function ajouterTravail() {
  const form = document.querySelector("#formAjoutTravail");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const imageInput = event.target.querySelector("#buttonAjouterPhoto");
    const titre = event.target.querySelector("[name=titre]").value;
    const categorie = event.target.querySelector("[name=categorie]").value;

    const formData = new FormData();

    formData.append("image", imageInput.files[0]);
    formData.append("title", titre);
    formData.append("category", categorie);

    const reponse = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + `${localStorage.token}`,
      },
      body: formData,
    });

    console.log(reponse.status);
    console.log(await reponse.text());

    // Handle the response as needed
  });
}
