# Yoon Thiri Min — Portfolio

Personal portfolio website for Yoon Thiri Min, Marketing & Community Lead based in Bangkok. Showcases experience, impact, case studies, and projects across social strategy, content creation, and event management for IBE Thailand and Bangkok Kyaung Thar.

Live structure: a single-page site (`index.html`) built on the [Lonely](https://bootstrapmade.com/free-html-bootstrap-template-lonely/) Bootstrap template by BootstrapMade, customized with original content, images, and styling.

## Tech stack

- HTML5, CSS3 (Bootstrap 5)
- Vanilla JavaScript
- [AOS](https://michalsnik.github.io/aos/) (scroll animations)
- [GLightbox](https://biati-digital.github.io/glightbox/) (image lightbox)
- [Swiper](https://swiperjs.com/) (carousels)
- [Isotope](https://isotope.metafizzy.co/) (portfolio filtering)
- [Web3Forms](https://web3forms.com/) (contact form backend)

## Project structure

```
├── index.html          # Main page
├── assets/
│   ├── css/             # Custom stylesheets
│   ├── img/              # Images
│   ├── js/                # Custom scripts (main.js, contact-form.js)
│   ├── scss/             # Source Sass (reference only)
│   └── vendor/          # Third-party libraries
└── forms/
    └── contact.php     # Unused legacy PHP handler (contact form uses Web3Forms via JS instead)
```

## Running locally

This is a static site with no build step. Just open `index.html` in a browser, or serve it locally:

```bash
npx serve .
```

## Contact form setup

The contact form submits to [Web3Forms](https://web3forms.com/) directly from the browser (`assets/js/contact-form.js`). To enable it for your own deployment, replace the placeholder in `index.html`:

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
```

with a real access key from [web3forms.com](https://web3forms.com/).

## Deployment

Since this is a static site, it can be hosted for free on GitHub Pages:

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Set the source to the `main` branch, root folder.
4. Your site will be published at `https://<username>.github.io/<repo-name>/`.

## License

The base template ("Lonely") is licensed by BootstrapMade — see [their license terms](https://bootstrapmade.com/license/). Custom content, copy, and images are © Yoon Thiri Min.
