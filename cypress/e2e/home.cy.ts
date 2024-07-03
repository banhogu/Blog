describe('홈페이지 테스트', () => {
  // uncaught:exception 이벤트를 처리하여 Cypress가 예외를 무시하도록 설정
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Unknown root exit status')) {
      return false;
    }
    // 다른 예외는 기본 동작을 유지 (테스트 실패)
  });

  it('should visit the home page', () => {
    cy.visit('/');
  });
});
