// Get All the Job card 
const allJobs = document.querySelectorAll('.jobs-card');
// get the total job counter and assign the jobs quantity to it
const totalCounterNumber = document.getElementById("total-counter-number");
totalCounterNumber.innerText = allJobs.length;
//get the available job counter and set the total available job quantity
const availableJobCounter = document.getElementById("available-job-counter");
availableJobCounter.innerText = allJobs.length;


// Create a delegate event handler 
const availableJobSection = document.getElementById("available-job-section");
availableJobSection.addEventListener('click', (event) => {
    console.log(event.target);
});