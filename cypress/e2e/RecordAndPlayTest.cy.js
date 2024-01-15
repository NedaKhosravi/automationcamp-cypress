describe('Record and Play Suite', () => {
  it('Test1', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.youtube.com/');
    cy.get(':nth-child(1) > :nth-child(2) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();
    cy.get('#search-input > #search').clear('c');
    cy.get('#search-input > #search').type('testers');
    cy.get('#sbse0 > .sbqs_c').click();
    cy.get('.ytd-channel-renderer > #img').click();
    cy.get('#c4-player > .ytp-chrome-bottom > .ytp-chrome-controls > .ytp-left-controls > .ytp-play-button').click();
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('JavascriptByTestersTalk', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://youtube.com');
    cy.get('#search-input > #search').clear();
    cy.get('#search-input > #search').type('javascriptbytest');
    cy.get('#search-input > #search').click();
    cy.get('#search-form > #container').click();
    cy.get('#search-input > #search').click();
    cy.get('#search-input > #search').clear('javascript bytest');
    cy.get('#search-input > #search').type('javascript bytest');
    cy.get('#search-input > #search').clear('javascript by test');
    cy.get('#search-input > #search').type('javascript by test');
    cy.get('#search-input > #search').clear('javascript by teste');
    cy.get('#search-input > #search').type('javascript by testers');
    cy.get('.sbqs_c').click();
    cy.get(':nth-child(2) > #contents > ytd-playlist-renderer.style-scope > #content > .yt-simple-endpoint.ytd-playlist-renderer > h3.style-scope > #video-title').click();
    cy.get('#movie_player > .ytp-chrome-bottom > .ytp-chrome-controls > .ytp-left-controls > .ytp-play-button').click();
    /* ==== End Cypress Studio ==== */
  });
})