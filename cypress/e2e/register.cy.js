describe("Testing register modal", () => {
  beforeEach(function () {
    cy.visit("detailed-movie/11631");
  });

  it("doesn't show modal at start", function () {
    cy.get("form").should("not.exist");
  });

  it("shows register icon", function () {
    cy.get("[data-testid='register']");
  });

  it("shows modal after click", function () {
    cy.get("[data-testid='register']").click();
    cy.get("form").should("exist");
  });

  it("incorrect login fails", function () {
    cy.get("[data-testid='register']").click();
    cy.get("[name='username']").type("rest");
    cy.get("[name='password']").type("vozinka");
    cy.contains(/sign up/i).click();
    cy.get("form").should("exist");
  });
});
