class  ForstudyPage {

  elementsHeader = {
    headerLogo: () => cy.get('a[routerlink="/"][class="header_logo"]'),
    homeButton: () => cy.get('a[routerlink="/"][routerlinkactive="-active"]'),
    aboutButton: () => cy.get('button[appscrollto="aboutSection"]'),
    contactsButton: () => cy.get('button[appscrollto="contactsSection"]'),
    guestLoginButton: () => cy.get('button[class*="-guest"]'),
    signInButton: () => cy.get('button[class*="header_signin"]'), 
    lowerSignInButton: () => cy.get('button[class*="btn-primary"]')
  }

  elementsFooter = {
    facebookButton: () => cy.get('a[href="https://www.facebook.com/Hillel.IT.School"]'),
    telegramButton: () => cy.get('a[href="https://t.me/ithillel_kyiv"]'),
    youtubeButton: () => cy.get('a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]'),
    instagrammButton: () => cy.get('a[href="https://www.instagram.com/hillel_itschool/"]'),
    linkedInButton: () => cy.get('a[href="https://www.linkedin.com/school/ithillel/"]'),
    itHillelButton: () => cy.get('a[href="https://ithillel.ua"]'),
    supportButton: () => cy.get('a[href="mailto:developer@ithillel.ua"]')
  }

 
}

export default new ForstudyPage();