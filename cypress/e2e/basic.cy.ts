export const API_URL = 'http://localhost:3000';

describe('페이지 정상 접속 테스트', () => {
  Cypress.on('uncaught:exception', () => {
    return false;
  });
  it('메인 페이지 방문', () => {
    cy.visit(API_URL);
  });
  it('About 페이지 방문', () => {
    cy.visit(`${API_URL}/about`);
  });
  it('글 상세 페이지 방문', () => {
    cy.visit(`${API_URL}/experience/implement-dijkstra`);
  });
});
