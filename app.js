// The window.document pretty much controls the node of the html itself. Every element of the html document is a node. Basically a box for each element like h1, head, body, etc. Using this will let us control what happens when the user leaves the page.

// onload basically means run this block of code once everything on the page has loaded up.

// this is also call an anonymous function

// getElementsByClassName allows you to get an individual class from the HTML.

window.onload = function () {
  let emailState = false;
  let emailModal = document.getElementsByClassName("email-modal")[0];
  let closeButton = document.getElementsByClassName(
    "email-modal__close-btn"
  )[0];
  // This is how to get user email input
  let emailInput = document.getElementsByClassName("email-modal__input")[0];
  let emailButton = document.getElementsByClassName("email-modal__button")[0];
  let thankContainer = document.getElementsByClassName("email-thank")[0];
  let declineOffer = document.getElementsByClassName(
    "email-modal__decline-offer"
  )[0];

  // Email validation
  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  let showModal = () => {
    if (emailState == false) {
      emailModal.classList.add("email-modal--visible");
      emailState = true;
    }
  };

  let closeModal = () => {
    emailModal.classList.remove("email-modal--visible");
  };

  let addErrors = () => {
    document
      .getElementsByClassName("email-modal__form-group")[0]
      .classList.add("email-modal__form-group--error");
    document
      .getElementsByClassName("email-modal__error-message")[0]
      .classList.add("email-modal__error-message--active");
  };

  let removeErrors = () => {
    document
      .getElementsByClassName("email-modal__form-group")[0]
      .classList.remove("email-modal__form-group--error");
    document
      .getElementsByClassName("email-modal__error-message")[0]
      .classList.remove("email-modal__error-message--active");
  };

  let showThankMessage = () => {
    thankContainer.classList.add("email-thank--success");
    setTimeout(() => {
        closeModal();
    }, 10000)
  };

  closeButton.addEventListener("click", () => {
    closeModal();
  });

  emailInput.addEventListener("click", () => {
    removeErrors();
  });
  // This checks to see if the email is true or false
  emailButton.addEventListener("click", () => {
    if (emailIsValid(emailInput.value)) {
      showThankMessage();
    } else {
      addErrors();
    }
  });

  declineOffer.addEventListener("click", () => {
    closeModal();
  });

  document.body.addEventListener("mouseleave", () => {
    showModal();
  });

  console.log(document);
};
