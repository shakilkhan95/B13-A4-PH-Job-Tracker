// Get All the Job card 
const allJobs = document.querySelectorAll('.jobs-card');
// get the total job counter and assign the jobs quantity to it
const totalCounterNumber = document.getElementById("total-counter-number");
totalCounterNumber.innerText = allJobs.length;
//get the available job counter and set the total available job quantity
const availableJobCounter = document.getElementById("available-job-counter");
availableJobCounter.innerText = allJobs.length;

// get the jobs card container 
const jobsContainer = document.getElementById("jobs-container");
// get the no  jobs section
const noJobsSection = document.getElementById("no-jobs-section");
// get the updated jobs container 
const updatedJobsContainer = document.getElementById("updated-jobs-container");
// get all status button 
const statusBtn = document.querySelectorAll('.status-btn');
// get all the jobs card 
const jobsCards = document.querySelectorAll('.jobs-card');

// Create a delegate event handler 
const availableJobSection = document.getElementById("available-job-section");
availableJobSection.addEventListener('click', (event) => {
// function to show jobs card preferred job status button
  if(event.target.closest('.status-btn')){
    // toggle function to toggle the selected button styles 
    for(const btn of statusBtn){
        btn.classList.remove('selected');
    }
    event.target.classList.add('selected');
    return;
  }

//   function for interview selection
  if (event.target.closest(".card-btn-interview")) {
    // get the parent card
    const clickedCard = event.target.parentNode.parentNode.parentNode;
    // add interview selected class while click
    clickedCard.classList.add("interview-selected");
    // toggle function to add or remove classlist
    for (const job of jobsCards) {
      if (
        job.classList.contains("interview-selected") &&
        job.classList.contains("rejected-selected")
      ) {
        job.classList.remove("rejected-selected");
      }
    }    
  }

  //   function for rejected selection
  if (event.target.closest(".card-btn-rejected")) {
    // get the parent card
    const clickedCard = event.target.parentNode.parentNode.parentNode;
    // add rejected selected class while click
    clickedCard.classList.add("rejected-selected");
    // toggle function to add or remove classlist
    for (const job of jobsCards) {
      if (
        job.classList.contains("rejected-selected") &&
        job.classList.contains("interview-selected")
      ) {
        job.classList.remove("interview-selected");
      }
    }
    return;
  }

//   function to delete job 
if (event.target.closest(".delete-btn")) {
  // get the parent card
  const clickedCard = event.target.parentNode.parentNode.parentNode.parentNode;
//   remove the card 
  jobsContainer.removeChild(clickedCard);
}

});