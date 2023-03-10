const internList = [
    {fullName: 'John Doe', major: 'Computer Science', status: 'Approved'},
    {fullName: 'Jane Smith', major: 'Business Administration', status: 'Pending'},
    {fullName: 'Bob Johnson', major: 'Marketing', status: 'Rejected'}
  ];
  
  function renderInterns(interns) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
  
    interns.forEach(intern => {
      const tr = document.createElement('tr');
      const tdFullName = document.createElement('td');
      const tdMajor = document.createElement('td');
      const tdStatus = document.createElement('td');
  
      tdFullName.textContent = intern.fullName;
      tdMajor.textContent = intern.major;
      tdStatus.textContent = intern.status;
  
      tr.appendChild(tdFullName);
      tr.appendChild(tdMajor);
      tr.appendChild(tdStatus);
  
      tbody.appendChild(tr);
    });
  }
  
  function filterInterns(interns, filterValue) {
    return interns.filter(intern => {
      return intern.major.toLowerCase().includes(filterValue.toLowerCase());
    });
  }
  
  function handleFilterSubmit(event) {
    event.preventDefault();
    const filterInput = document.querySelector('#filter');
    const filterValue = filterInput.value;
    let filteredInterns = internList;
  
    if (filterValue !== 'all') {
      filteredInterns = filterInterns(internList, filterValue);
    }
  
    renderInterns(filteredInterns);
  }
  
  function handleAddStudentSubmit(event) {
    event.preventDefault();
    const fullNameInput = document.querySelector('#full_name');
    const majorInput = document.querySelector('#major');
    const statusInput = document.querySelector('#status');
    const fullName = fullNameInput.value;
    const major = majorInput.value;
    const status = statusInput.value;
  
    const newIntern = {
      fullName: fullName,
      major: major,
      status: status
    };
  
    internList.push(newIntern);
    renderInterns(internList);
  }
  
  const filterForm = document.querySelector('form[action="#"][method="get"]');
  filterForm.addEventListener('submit', handleFilterSubmit);
  
  const addStudentForm = document.querySelector('form[action="#"][method="post"]');
  addStudentForm.addEventListener('submit', handleAddStudentSubmit);
  
  renderInterns(internList);
  