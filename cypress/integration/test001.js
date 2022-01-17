/// <reference types = "cypress" />


it('google test',function(){

    cy.visit('https://google.com')
    cy.get('.gLFyf').type('hello world{enter}')
    cy.wait(1000)
    cy.contains('Видео', {timeout:6000}).click()
})


it.only('login test', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.get('#menu_admin_viewAdminModule > b').click()
    for ( let i=0; i<=100; i++){
        cy.get('#btnAdd').click()
        const id = (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2);
        cy.get('#systemUser_employeeName_empName').type('Sania Shaheen')
        cy.get('#systemUser_userName').type(id)
        cy.get('#systemUser_password').type('admin123')
        cy.get('#systemUser_confirmPassword').type('admin123')
        // cy.get ('.ng-valid-maxlenght > .modal-footer').find('#systemUsersavebtn')
        cy.get('#btnSave').click()
    }



})
