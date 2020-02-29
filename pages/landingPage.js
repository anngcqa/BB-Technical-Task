const landingPageCommands = {
    addComputer(){
        this.waitForElementVisible('@addNewComputer')
        .click('@addNewComputer')
        return this;
    },
    findComputer(computerName){
        this.waitForElementVisible('@searchbox')
        .setValue('@searchbox', computerName)
        .click('@submit')
        .waitForElementVisible('@computerList', 500)
        return this;
    },
    findNonExistentComputer(computerName){
      this.waitForElementVisible('@searchbox')
      .setValue('@searchbox', computerName)
      .click('@submit')
      return this;
    },
    selectComputerToEdit(){
        this.waitForElementVisible('@computerList')
        .click('@firstItemInTable')
        return this;
    },
    displayLandingPage(){
      this.waitForElementVisible('@searchbox')
      .waitForElementVisible('@submit')
      .waitForElementVisible('@addNewComputer')
      .waitForElementVisible('@computerList', 500)
      return this;
    }

};
module.exports =   { 
    url:"http://computer-database.herokuapp.com/computers", 
    commands: [landingPageCommands],
    elements: {
      landingPageTitle: {
        selector: '#main > h1'
      },
      alertMessage: {
        selector: '#main > div.alert-message.warning'
      },
      searchbox: {
        selector: 'input[id=searchbox]'
      },
      submit: {
        selector: 'input[type=submit]'
      },
      addNewComputer: {
          selector: '#add'
      },
      computerList: {
          selector: '#main > table'
      },
      viewNextPage: {
          selector: '#pagination > ul > li.next > a'
      },
      viewPreviousPage: {
          selector: '#pagination > ul > li.prev > a'
      },
      firstItemInTable: {
          selector: '#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a'
      },
      firstItemInTableCompanyData: {
        selector: '#main > table > tbody > tr:nth-child(1) > td:nth-child(4)'
      },
      column1: {
        selector: '#main > table > thead > tr > th.col2.header.headerSortUp > a'
      },
      column2: {
        selector: '#main > table > thead > tr > th.col3.header > a'
      },
      column3: {
        selector: '#main > table > thead > tr > th.col4.header > a'
      },
      column4: {
        selector: '#main > table > thead > tr > th.col5.header > a'
      },
      emptyTable: {
        selector: '#main > div.well > em'
      }
    }
  };
  