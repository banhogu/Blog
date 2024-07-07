import { API_URL } from './basic.cy';

describe('글 상세 페이지', () => {
  Cypress.on('uncaught:exception', () => {
    return false;
  });

  beforeEach(() => {
    cy.visit(`${API_URL}/experience/next-blog-ver1`);
    cy.wait(1000);
  });

  /**
   * 기본 컴포넌트 노출 Test
   */
  it('각 항목들이 정상적으로 노출 되어야 한다.', () => {
    cy.contains('경험');
    cy.contains('Next.js 블로그 만들기 Ver.1');
    cy.contains('# Next.js + MDX 블로그 개발기 1');
    cy.contains('On This Page');
    cy.contains('다음 글');
    cy.get('[data-cy=AiBot-Btn]');
    cy.get('[data-cy=ToTop-Btn]');
    cy.scrollTo('bottom');
  });

  it('사이드바 기능들이 정상적으로 작동해야 한다', () => {
    cy.get('a[href="#블로그를-직접-만드는-이유"]').parent().should('have.class', 'text-pink-600');
    cy.get('a[href="#기능-정리"]').click();
    cy.wait(500);
    cy.get('a[href="#기능-정리"]').parent().should('have.class', 'text-pink-600');
    cy.get('[data-cy=ToTop-Btn]').trigger('mouseover');
    cy.contains('To Top').should('be.visible');
    cy.get('[data-cy=ToTop-Btn]').click();
    cy.wait(1000);
    cy.get('a[href="#블로그를-직접-만드는-이유"]').parent().should('have.class', 'text-pink-600');
    cy.get('[data-cy=AiBot-Btn]').trigger('mouseover');
    cy.contains('AI 요약').should('be.visible');
    cy.get('[data-cy=AiBot-Btn]').click();
    cy.contains(
      '안녕하세요. 방호진 블로그에 오신것을 환영합니다. 글이 많이 길었죠? 금방 요약해서 보여드릴게요 잠시만 기다려주세요~'
    );
    cy.contains('요약중');
    cy.get('.bg-red-500').click();
    cy.get('[data-cy=AiModal]').should('not.exist');
  });
});
