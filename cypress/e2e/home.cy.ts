import { API_URL } from './basic.cy';

describe('메인 페이지', () => {
  Cypress.on('uncaught:exception', () => {
    return false;
  });

  beforeEach(() => {
    cy.visit(API_URL);
    cy.wait(1000);
  });

  /**
   * 기본 컴포넌트 노출 Test
   */
  it('각 항목들이 정상적으로 노출 되어야 한다.', () => {
    cy.contains('호진방 블로그');
    cy.contains('About');
    cy.contains('HJ Bang');
    cy.contains('안녕하세요 배움을 나누며 함께 전진하는 신입 개발자 방호진입니다.');
    cy.contains('tag');
    cy.contains('title');
    cy.contains('posts');
    cy.contains('tags');
    cy.contains('Source');
  });

  /**
   * Header Test
   */
  it('About 페이지로 이동한다', () => {
    cy.contains('About').click();
    cy.wait(1000);
    cy.contains('안녕하세요 배움을 나누며 함께 전진하는 신입 개발자 방호진입니다.');
  });

  it('검색 아이콘을 누르면 검색 모달이 열린다. 검색 결과를 클릭하면 해당 글로 이동한다.', () => {
    cy.get('[data-cy=search-icon]').click();
    cy.get('input[placeholder="Type Post Title...').type('not found');
    cy.wait(1000);
    cy.contains('No Posts found.');
    cy.get('input[placeholder="Type Post Title...').clear();
    cy.get('input[placeholder="Type Post Title...').type('Next.js 블로그 모달 관리 개선하기');
    cy.wait(1000);
    cy.get('[data-cy="Next.js 블로그 모달 관리 개선하기"]')
      .parent()
      .parent()
      .parent()
      .should('have.attr', 'href')
      .and('include', 'experience/next-blog-manage-modal');
    cy.get('.fixed.inset-0').click();
    cy.get('input[placeholder="Type Post Title..."]').should('not.exist');
  });

  /**
   * 메인 글 목록 Test
   */
  it('글 목록 테스트', () => {
    cy.contains('tag').click();
    cy.contains('기술').click();
    cy.contains('경험').click();
    cy.contains('학습').click();
    cy.contains('생각').click();
    cy.contains('tag');
    cy.contains('Next.js 블로그 만들기 Ver.1').click();
    cy.url().should('eq', `${API_URL}/experience/next-blog-ver1`);
  });

  /**
   * Footer Test
   */
  it('footer 테스트', () => {
    cy.contains('banhogu').should('have.attr', 'href');
    cy.contains('Source')
      .should('have.attr', 'href')
      .then((href) => {
        expect(href).to.contain('https://github.com/banghogu/Blog');
      });
  });
});
