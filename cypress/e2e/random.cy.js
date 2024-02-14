describe("Testing Random page", () => {
  beforeEach(function () {
    cy.visit("");
  });

  it("can be opened", function () {
    cy.contains(/unscroll/i);
  });

  it("opacity is 0", function () {
    cy.get("h4", { timeout: 10000 }).should("have.css", "opacity", "0");
  });

  it("movie title is visible", function () {
    cy.get("h4", { timeout: 20000 }).should("be.visible");
  });
});
