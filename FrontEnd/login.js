function login() {
  const form = document.querySelector("#form-login");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const email = event.target.querySelector("[name=e-mail]").value;
    const motDePasse = event.target.querySelector("[name=mot-de-passe]").value;
    const body = {
      email: email,
      password: motDePasse,
    };
    const reponse = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const reponseJson = await reponse.json();
    const token = await reponseJson.token;
    window.localStorage.setItem("token", token);
    if (window.localStorage.token !== "undefined") {
      history.back();
    } else {
      alert("Utilisateur introuvable");
    }
  });
}

login();
