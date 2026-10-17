(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      let loading = form.querySelector('.loading');
      let errorMessage = form.querySelector('.error-message');
      let sentMessage = form.querySelector('.sent-message');

      loading.classList.add('d-block');
      errorMessage.classList.remove('d-block');
      sentMessage.classList.remove('d-block');

      let formData = new FormData(form);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          loading.classList.remove('d-block');
          if (data.success) {
            sentMessage.classList.add('d-block');
            form.reset();
          } else {
            errorMessage.innerHTML = data.message || 'Something went wrong. Please try again.';
            errorMessage.classList.add('d-block');
          }
        })
        .catch(() => {
          loading.classList.remove('d-block');
          errorMessage.innerHTML = 'Something went wrong. Please check your connection and try again.';
          errorMessage.classList.add('d-block');
        });
    });
  });
})();
