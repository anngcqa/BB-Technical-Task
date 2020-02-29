const editComputerCommands = {
    edit(updatedCompany){
        this.waitForElementVisible('@company')
        .setValue('@company',updatedCompany)
        .waitForElementVisible('@submit', 500)
        .click('@submit')
        return this;
    },
    delete(){
        this.waitForElementVisible('@deleteComputer')
        .click('@deleteComputer')
        return this;
    },
    cancel(updatedCompany){
        this.waitForElementVisible('@cancel')
        this.waitForElementVisible('@company')
        .setValue('@company',updatedCompany)
        .click('@cancel')
        return this;
    }
};
module.exports =  {
    
    commands: [editComputerCommands],
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
            selector: '#main > form:nth-child(2) > div > a'
        },
        editComputerPageTitle: {
            selector: '#main > h1'
        },
        deleteComputer: {
            selector: '#main > form.topRight > input'
        }
    },
    
};