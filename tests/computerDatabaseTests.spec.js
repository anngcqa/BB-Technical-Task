module.exports = {

  'Display_list_of_computers_TC_01'(client){
    const landingPage = client.page.landingPage();
    const columnOneName = 'Computer name';
    const columnTwoName = 'Introduced';
    const columnThreeName = 'Discontinued';
    const columnFourName = 'Company';
    landingPage
      .navigate()
      .expect.element('@landingPageTitle').text.to.contain('computers found');
    
    landingPage.displayLandingPage()
      .expect.element('@column1').text.to.contain(columnOneName);
    landingPage.expect.element('@column2').text.to.contain(columnTwoName);
    landingPage.expect.element('@column3').text.to.contain(columnThreeName);
    landingPage.expect.element('@column4').text.to.contain(columnFourName);

    client.end();    
  },

  'Find_a_computer_TC_02'(client){
    const newComputer = client.page.newComputerPage();
    const landingPage = client.page.landingPage();
    const computerName = 'TC_02_' + Date.now();
    const createdAlertMessage = 'Computer ' + computerName + ' has been created';
    
    //Add computer to be searched
    newComputer
      .navigate()
      .create(computerName)
    landingPage
      .expect.element('@alertMessage').text.to.contain(createdAlertMessage);
    
    //Find computer
    landingPage
      .navigate()
      .findComputer(computerName)
      .expect.element('@firstItemInTable').text.to.contain(computerName);
      
    client.end();
  
  },

  'Add_new_computer_TC_03'(client){
    const newComputer = client.page.newComputerPage();
    const landingPage = client.page.landingPage();
    const computerName = 'TC_03_' + Date.now();
    const createdAlertMessage = 'Computer ' + computerName + ' has been created';
    
    landingPage
      .navigate()
      .addComputer();
    newComputer
      .expect.element('@addComputerPageTitle').text.to.contain('Add a computer');
    
    newComputer
      .create(computerName);
    landingPage
      .expect.element('@alertMessage').text.to.contain(createdAlertMessage);
    
     //Find computer
    landingPage
    .navigate()
    .findComputer(computerName)
    .expect.element('@firstItemInTable').text.to.contain(computerName);
    
    client.end();    
  },

  'Edit_Computer_TC_07'(client){
    const newComputer = client.page.newComputerPage();
    const landingPage = client.page.landingPage();
    const editComputerPage = client.page.editComputerPage();
    const computerName = 'TC_07_' + Date.now();
    const updatedCompany = 'IBM';
    const createdAlertMessage = 'Computer ' + computerName + ' has been created';
    const updatedAlertMessage = 'Computer ' + computerName + ' has been updated';

    //Add computer to be edited
    newComputer
      .navigate()
      .create(computerName)
    landingPage
      .expect.element('@alertMessage').text.to.contain(createdAlertMessage);
    
    //Find computer
    landingPage
      .navigate()
      .findComputer(computerName)
      .expect.element('@firstItemInTable').text.to.contain(computerName);
    landingPage
      .selectComputerToEdit()
    editComputerPage
      .expect.element('@editComputerPageTitle').text.to.contain('Edit computer');
    
    //Update computer name
    editComputerPage
      .edit(updatedCompany);
    landingPage
      .expect.element('@alertMessage').text.to.contain(updatedAlertMessage);
    
     //Find updated computer
    landingPage
      .findComputer(computerName)
      .expect.element('@firstItemInTable').text.to.contain(computerName);
    landingPage
      .expect.element('@firstItemInTableCompanyData').text.to.contain(updatedCompany);
    
    client.end();  
  },

  'Delete_Computer_TC_09'(client){
    const newComputer = client.page.newComputerPage();
    const landingPage = client.page.landingPage();
    const editComputerPage = client.page.editComputerPage();
    const computerName = 'TC_09_' + Date.now();
    const createdAlertMessage = 'Computer ' + computerName + ' has been created';
    const deletedAlertMessage = 'Computer has been deleted';
    const emptyTableMessage = 'Nothing to display';
    
    //Add computer to be edited
    newComputer
      .navigate()
      .create(computerName)
    landingPage
      .expect.element('@alertMessage').text.to.contain(createdAlertMessage);
    
    //Find computer
    landingPage
      .navigate()
      .findComputer(computerName)
      .expect.element('@firstItemInTable').text.to.contain(computerName);
    landingPage
      .selectComputerToEdit()
    editComputerPage
      .expect.element('@editComputerPageTitle').text.to.contain('Edit computer');
    
    //Delete computer
    editComputerPage
      .delete();
    landingPage
      .expect.element('@alertMessage').text.to.contain(deletedAlertMessage);
    
    landingPage
      .findNonExistentComputer(computerName)
      .expect.element('@computerList').to.not.be.present;
    landingPage
      .expect.element('@emptyTable').text.to.contain(emptyTableMessage);
    client.end();
  }
}
