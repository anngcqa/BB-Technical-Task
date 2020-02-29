const addComputerCommands = {
    create(computerName){
        this.waitForElementVisible('@name')
        .setValue('@name', computerName)
        .setValue('@introducedDate','2000-01-01')
        .setValue('@discontinuedDate','2010-01-01')
        .setValue('@company','RCA')
        .waitForElementVisible('@submit', 500)
        .click('@submit')
        return this;
    },
    cancelNewComputer(computerName){
        this.waitForElementVisible('@name')
        .setValue('@name', computerName)
        .setValue('@introducedDate','2000-01-01')
        .setValue('@discontinuedDate','2010-01-01')
        .setValue('@company','RCA')
        .waitForElementVisible('@cancel', 500)
        .click('@cancel')
        return this;
    }
};
module.exports =  {
    url:"http://computer-database.herokuapp.com/computers/new",
    commands: [addComputerCommands],
    elements: {
        name: {
            selector: 'input[id=name]'
        },
        introducedDate: {
            selector: 'input[id=introduced]'
        },
        discontinuedDate: {
            selector: 'input[id=discontinued]'
        },
        company: {
            selector: 'select[id=company]'
        },
        submit: {
            selector: 'input[type=submit]'
        },
        cancel: {
            selector: '#main > form > div > a'
        },
        addComputerPageTitle: {
            selector: '#main > h1'
        }
    },
    
};