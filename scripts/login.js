const nombre_invitdos = ["hugo", "biel", "joel", "guillem", "angelo", "andreu", "daniela", "luciana", "luciana", "oscar", "guzman", "sofia", "eric", "eric", "lila", "felix", "daniel", "jose"];
const apellidos_invitdos = ["sansegundo", "vilarnau", "garcia", "cerdan", "vazquez", "sanchez", "quispe", "belen", "alnes", "bravo", "fernandez", "fernandez", "broos", "delamata", "diez", "balbin", "acosta", "paguasi"];

const input_name = document.getElementById("name");
const input_surname = document.getElementById("surname");

if (localStorage.getItem("input_nameValue") && localStorage.getItem("input_surnameValue")) {
    // window.location.href = "invitation.html";
}

input_name.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const input_nameValue = input_name.value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");

        if (nombre_invitdos.includes(input_nameValue)) {

            localStorage.setItem("input_nameValue", input_nameValue);
            input_surname.style.display = "block";
            input_name.style.display = "none";

        } else {
            alert("El nombre no figura.\nInténtalo de nuevo y si el problema persiste, ponte en contacto con Hugo.");
        }

    }
});

input_surname.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const input_surnameValue = input_surname.value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
        const input_nameValue = localStorage.getItem("input_nameValue");

        if (input_nameValue) {

            const indexName = nombre_invitdos.indexOf(input_nameValue);

            if (indexName !== -1 && apellidos_invitdos[indexName] === input_surnameValue) {

                localStorage.setItem("input_surnameValue", input_surnameValue);

                window.location.href = "invitation.html";

            } else {
                alert("El apellido no figura.\nDebe ser solo el primer apellido.\nInténtalo de nuevo y si el problema persiste, ponte en contacto con Hugo.");
            }

        }

    }
});
