describe("Testing Random page", () => {
  beforeEach(function () {
    cy.visit("detailed-movie/11631");
  });

  it("can be opened", function () {
    cy.contains(/mia/i, { timeout: 4000 });
  });

  it("shows poster", function () {
    cy.get("img[alt='poster']", { timeout: 2000 })
      .should("have.attr", "src")
      .and("contain", "zdUA4FNHbXP");
  });

  it("can't click on crew if not logged", function () {
    cy.contains(/phyllida/i, { timeout: 2000 }).should(
      "have.css",
      "pointer-events",
      "none",
    );
  });
});
