/* ==========================================
   LARP HOMIEVERSE
   CONTROL DE ACCESOS
========================================== */

const modal =
  document.getElementById("identityModal");

const check =
  document.getElementById("identityCheck");

const continueBtn =
  document.getElementById("continueBtn");

const cancelBtn =
  document.getElementById("cancelBtn");

const modalText =
  document.getElementById("modalText");

const checkText =
  document.getElementById("checkText");

const modalTitle =
  document.getElementById("modalTitle");


/*
  AQUÍ ESTARAN PRONTO
  LOS LINKS DE LOS CANALES.
*/

const destinations = {

  human: {

    title:
      "Acceso al plano humano",

    text:
      "Estás a punto de entrar a un espacio perteneciente a una persona que investiga fenómenos relacionados con El Velo y La Membrana. Continúa sólo si reconoces tu naturaleza.",

    check:
      "I'm human",

    url:
      "#"

  },


  entity: {

    title:
      "Acceso al plano del Exterior",

    text:
      "Este espacio contiene material de inducción destinado a entidades que realizan su primera incursión en el plano Tierra. Si eres una persona, no deberías estar aquí.",

    check:
  "I'm not an ALIEN",

url:
  "ente.html"

  }

};


let selected = null;


/* ==========================================
   ABRIR WARNING
========================================== */

document
  .querySelectorAll(".door[data-kind]")
  .forEach(door => {

    door.addEventListener(
      "click",
      () => {

        selected =
          destinations[
            door.dataset.kind
          ];


        modalTitle.textContent =
          selected.title;


        modalText.textContent =
          selected.text;


        checkText.textContent =
          selected.check;


        check.checked = false;


        continueBtn.disabled =
          true;


        modal.classList.add("open");


        modal.setAttribute(
          "aria-hidden",
          "false"
        );


        document.body.style.overflow =
          "hidden";

      }
    );

  });


/* ==========================================
   CHECKBOX
========================================== */

check.addEventListener(
  "change",
  () => {

    continueBtn.disabled =
      !check.checked;

  }
);


/* ==========================================
   CONTINUAR
========================================== */

continueBtn.addEventListener(
  "click",
  () => {

    if (
      !selected ||
      !check.checked
    ) {

      return;

    }


    /*
      TEMPORALMENTE LOS LINKS SON "#".

      Cuando pongamos las URLs reales,
      esta misma función llevará al canal.
    */

    if (
      selected.url === "#"
    ) {

      alert(
        "Acceso confirmado. Pronto estará el canal correspondiente."
      );

    }

    else {

      window.location.href =
        selected.url;

    }

  }
);


/* ==========================================
   CERRAR MODAL
========================================== */

function closeModal() {

  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";

}


cancelBtn.addEventListener(
  "click",
  closeModal
);


modal.addEventListener(
  "click",
  event => {

    if (
      event.target === modal
    ) {

      closeModal();

    }

  }
);


document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeModal();

    }

  }
);


/* ==========================================
   DISCLAIMER
========================================== */

const meta =
  document.getElementById(
    "disclaimer"
  );


document
  .querySelector(".door-link")
  .addEventListener(
    "click",
    event => {

      event.preventDefault();

      meta.classList.add("open");

      history.replaceState(
        null,
        "",
        "#disclaimer"
      );

    }
  );


document
  .querySelector(".close-meta")
  .addEventListener(
    "click",
    () => {

      meta.classList.remove(
        "open"
      );

      history.replaceState(
        null,
        "",
        location.pathname
      );

    }
  );


/* ==========================================
   SI SE ENTRA DIRECTAMENTE A #DISCLAIMER
========================================== */

if (
  window.location.hash ===
  "#disclaimer"
) {

  meta.classList.add("open");

}
