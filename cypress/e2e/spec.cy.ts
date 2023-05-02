///<reference types="cypress" />
import '@cypress/code-coverage/support';

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('search bar', () => {
    cy.get('input').should('have.value', 'random');
    cy.get('input[type=submit]').should('have.value', 'Search');
  });
  it('should not image', () => {
    cy.get('input[type=text]').clear();
    cy.get('input[type=text]').should('have.value', '');
    cy.get('input[type=submit]').click();
    cy.get('h2').should('have.text', 'No results found');
  });
  it('should find 12 image cards', () => {
    const testValue = 'test';
    cy.get('input[type=text]').clear();
    cy.get('input[type=text]').type(testValue);
    cy.get('input[type=submit]').click();
    cy.get('div[role=list]').should('exist');
    cy.get('div[role=listitem]').should('length', '12');
  });
  it('should show carts after visiting another page and returning back', () => {
    const testValue = 'test';
    cy.get('input[type=text]').clear();
    cy.get('input[type=text]').type(testValue);
    cy.get('input[type=submit]').click();
    cy.get('div[role=list]').should('exist');
    cy.get('div[role=listitem]').should('length', '12');
    cy.get('a[href="/about"]').click();
    cy.get('a[href="/"]').click();
    cy.get('div[role=list]').should('exist');
    cy.get('div[role=listitem]').should('length', '12');
  });
});

describe('should show modal', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('close modal', () => {
    cy.get('div[role=listitem]:first-child').click('center');
    cy.get('button.modal-close').click();
    cy.get('div[class="relative mx-auto my-4 max-w-5xl  rounded-lg bg-slate-100"]').should(
      'not.exist'
    );
  });
  it('show modal', () => {
    cy.get('div[role=listitem]:first-child').click('center');
    cy.get('div[class="relative mx-auto my-4 max-w-5xl  rounded-lg bg-slate-100"]').should('exist');
    cy.get('div.modal-close').click();
  });
});
describe('menu should work', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should about page', () => {
    cy.get('a[href="/about"]').click();
    cy.get('h1').should('have.text', 'Current page: About Page');
    cy.get('div>div[class="my-10 px-4"]').should(
      'have.text',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officia esse perspiciatis eum non debitis possimus quod error officiis sapiente tenetur quisquam distinctio ducimus dolorum corporis, culpa eligendi. Rem, asperiores.'
    );
  });

  it('should form page', () => {
    cy.get('a[href="/form"]').click();
    cy.get('h1').should('have.text', 'Current page: Form Page');
    cy.get('button').should('have.text', 'Submit');
  });

  it('should main page', () => {
    cy.get('a[href="/form"]').click();
    cy.get('a[href="/"]').click();
    cy.get('h1').should('have.text', 'Current page: Main Page');
    cy.get('div[role=list]').should('exist');
  });
});
describe('routing and show header current page', () => {
  it('visit home page', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Current page: Main Page');
  });
  it('visit about page', () => {
    cy.visit('/about');
    cy.get('h1').should('have.text', 'Current page: About Page');
  });
  it('visit form page', () => {
    cy.visit('/form');
    cy.get('h1').should('have.text', 'Current page: Form Page');
  });
  it('visit 404 page', () => {
    cy.visit('/test');
    cy.get('h1').should('have.text', '404');
  });
});
