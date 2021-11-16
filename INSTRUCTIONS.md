# Motiv - Full-Stack Web Application Developer Code Challenge

## Challenge:
Create the front-end and back-end of the app specified in `designs.xd` ([Adobe XD](https://www.adobe.com/ca/products/xd.html) file).

A basic [Express](https://expressjs.com/) server has been created. Use `npm run start` to start the server at `localhost:3000`. Image assets are included in `assets/images`.

## Tasks:
**Front-end**
- Design and build the HTML DOM in `src/index.html`
- Make AJAX request and render "sports" data from the server endpoint in `src/index.js`
- Add styles, as necessary, in `src/styles.css`
    - Note: Fonts can be imported from [Google Fonts](https://fonts.google.com/)
- Clicking a card should take users to the respective URL in a new tab

**Back-end**
1. Serve static assets
2. Create the "sports" endpoint, response should return the dataset provided in `data.json`
3. Serve index.html at `/`

### Bonus:
- Implement error handling in the AJAX request
- Use a CSS preprocessor, such as [Sass](https://sass-lang.com/)
- Use a template engine, such as [Pug](https://pugjs.org/api/getting-started.html)

## Requirements
1. Page must be responsive across mobile, tablet, and desktop as shown in `designs.xd`.
2. Content must be fetched from a "sports" API endpoint and not statically inserted directly into the HTML.
