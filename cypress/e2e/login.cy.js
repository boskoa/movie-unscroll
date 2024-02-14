describe("Testing login modal", () => {
  beforeEach(function () {
    cy.visit("detailed-movie/11631");
  });

  it("doesn't show modal at start", function () {
    cy.get("form").should("not.exist");
  });

  it("shows login icon", function () {
    cy.get("[data-testid='login']");
  });

  it("shows modal after click", function () {
    cy.get("[data-testid='login']").click();
    cy.get("form").should("exist");
  });

  it("incorrect login fails", function () {
    cy.get("[data-testid='login']").click();
    cy.get("[name='username']").type("rest");
    cy.get("[name='password']").type("vozinka");
    cy.contains(/log in/i).click();
    cy.contains("401");
  });
});
