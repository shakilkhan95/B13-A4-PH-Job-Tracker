document.addEventListener('DOMContentLoaded', function () {

  const totalCounterNumber = document.getElementById("total-counter-number");
  const interviewCounterNumber = document.getElementById("interview-counter-number");
  const rejectedCounterNumber = document.getElementById("rejected-counter-number");
  const availableJobsCounter = document.getElementById("available-job-counter");
  const allInterviewBtns = document.querySelectorAll(".card-btn-interview");
  const allRejectedBtns = document.querySelectorAll(".card-btn-rejected");
  const deleteBtns = document.querySelectorAll(".delete-btn");
  const noJobsSection = document.getElementById("no-jobs-section");
  const allNavigationBtns = document.querySelectorAll(".status-btn");
  
  


  // function for all jobs counter 
  function allJobsCounter (){
    const jobsCards = document.querySelectorAll(".jobs-card");
    const allAvailableJobs = [];
    for(const card of jobsCards){
      if(!card.classList.contains('removed')){
        allAvailableJobs.push(card);
      }
    }
    return allAvailableJobs;
  }


  // function for interviewJobsCounter 
  function interviewJobsCounter(){
    const jobsCards = document.querySelectorAll(".jobs-card");
    const interviewJobs = [];
    for(const card of jobsCards){
      if(!card.classList.contains('removed') && card.classList.contains('interview-selected')){
        interviewJobs.push(card);
      }
    }
    return interviewJobs;
  }


  // function for rejectedJobsCounter 
  function rejectedJobsCounter() {
    const jobsCards = document.querySelectorAll(".jobs-card");
    const rejectedJobs = [];
    for (const card of jobsCards) {
      if (!card.classList.contains('removed') && card.classList.contains("rejected-selected")) {
        rejectedJobs.push(card);
      }
    }
    return rejectedJobs;
  }


    //show the all jobs counter
  totalCounterNumber.innerText = allJobsCounter().length;
  
  //show the all jobs counter
  availableJobsCounter.innerHTML = `${allJobsCounter().length} of ${allJobsCounter().length}`;


  // interactions from delete button
  for(const deleteBtn of deleteBtns){
    deleteBtn.addEventListener('click', function (event) {
      const clickedCard = event.target.closest(".jobs-card");
      clickedCard.classList.add("hidden", "removed");

      // re-render all counters
      totalCounterNumber.innerText = allJobsCounter().length;
      interviewCounterNumber.innerText = interviewJobsCounter().length;
      rejectedCounterNumber.innerText = rejectedJobsCounter().length;
      availableJobsCounter.innerHTML = `${allJobsCounter().length} of ${allJobsCounter().length}`;

      //toggle the no jobs section for all button
      if (allJobsCounter().length !== 0) {
        noJobsSection.classList.add("hidden");
      } else {
        noJobsSection.classList.remove("hidden");
      }

      //toggle the no jobs section for interview button
      if (interviewJobsCounter().length !== 0) {
        noJobsSection.classList.add("hidden");
      } else {
        noJobsSection.classList.remove("hidden");
      }

      //toggle the no jobs section for rejected button
      if (rejectedJobsCounter().length !== 0) {
        noJobsSection.classList.add("hidden");
      } else {
        noJobsSection.classList.remove("hidden");
      }

      //available jobs counter
      if(document.getElementById('interview-status-btn').classList.contains('selected')){
        availableJobsCounter.innerHTML = `${interviewJobsCounter().length} of ${allJobsCounter().length}`;
      }

      //available jobs counter
      if(document.getElementById('rejected-status-btn').classList.contains('selected')){
        availableJobsCounter.innerHTML = `${rejectedJobsCounter().length} of ${allJobsCounter().length}`;
      }


    })
  }


  //interactions from interview button
  for (const interviewBtn of allInterviewBtns){
    interviewBtn.addEventListener('click', function(event){
      // get the clickedCard and toggle the classList 
      const clickedCard = event.target.closest(".jobs-card");
      clickedCard.classList.add('interview-selected');
      clickedCard.classList.remove("rejected-selected");

      // get the update status button and toggle the status 
      const updatedStatusBtns = event.target.parentNode.parentNode.parentNode.querySelectorAll(".updated-status");
      for(const updatedBtn of updatedStatusBtns){
        updatedBtn.classList.add('hidden');
        if(updatedBtn.innerText == 'INTERVIEW'){
          updatedBtn.classList.remove('hidden');
        }
      }

      // toggle card from rejected status to interview 
      const rejectedBtn = document.getElementById("rejected-status-btn");
      if(rejectedBtn.classList.contains('selected')){
        clickedCard.classList.add('hidden');
      }

      // re-render all counters 
      totalCounterNumber.innerText = allJobsCounter().length;
      interviewCounterNumber.innerText = interviewJobsCounter().length;
      rejectedCounterNumber.innerText = rejectedJobsCounter().length;

      //available jobs counter
      if(document.getElementById('interview-status-btn').classList.contains('selected')){
        availableJobsCounter.innerHTML = `${interviewJobsCounter().length} of ${allJobsCounter().length}`;
      }

      //available jobs counter
      if(document.getElementById('rejected-status-btn').classList.contains('selected')){
        availableJobsCounter.innerHTML = `${rejectedJobsCounter().length} of ${allJobsCounter().length}`;
      }
    })
  }


  //interactions from rejected button
  for (const rejectedBtn of allRejectedBtns) {
    rejectedBtn.addEventListener("click", function (event) {
      // get the clickedCard and toggle the classList
      const clickedCard = event.target.closest(".jobs-card");
      clickedCard.classList.add("rejected-selected");
      clickedCard.classList.remove("interview-selected");

      // get the update status button and toggle the status
      const updatedStatusBtns = event.target.parentNode.parentNode.parentNode.querySelectorAll(".updated-status");
      for (const updatedBtn of updatedStatusBtns) {
        updatedBtn.classList.add("hidden");
        if (updatedBtn.innerText == "REJECTED") {
          updatedBtn.classList.remove("hidden");
        }
      }

      // toggle the card from interview status section to rejected 
      const interviewBtn = document.getElementById("interview-status-btn");
      if (interviewBtn.classList.contains("selected")) {
        clickedCard.classList.add("hidden");
      }

      // re-render all counters
      totalCounterNumber.innerText = allJobsCounter().length;
      interviewCounterNumber.innerText = interviewJobsCounter().length;
      rejectedCounterNumber.innerText = rejectedJobsCounter().length;

      //available jobs counter
      if(document.getElementById('interview-status-btn').classList.contains('selected')){
        availableJobsCounter.innerHTML = `${interviewJobsCounter().length} of ${allJobsCounter().length}`;
      }

      //available jobs counter
      if(document.getElementById('rejected-status-btn').classList.contains('selected')){
        availableJobsCounter.innerHTML = `${rejectedJobsCounter().length} of ${allJobsCounter().length}`;
      }
    });
  }


  //interactions from navigation button 
  for(const navigationBtn of allNavigationBtns){
    navigationBtn.addEventListener('click', function(event){
      for(const btn of allNavigationBtns){
        btn.classList.remove('selected');
      }
      const clickedBtn = event.target.closest('.status-btn');
      if(!clickedBtn) return;
      clickedBtn.classList.add('selected');

      const jobsCards = document.querySelectorAll(".jobs-card");

      //remove hidden class from all cards
      for(const jobCard of jobsCards){
        if(!jobCard.classList.contains('removed')){
          jobCard.classList.remove('hidden');
        }
      }

      //interactions for all button
      if(event.target.closest('#all-status-btn')){
        if(allJobsCounter().length !== 0){
          noJobsSection.classList.add('hidden');
        }
        else{
          noJobsSection.classList.remove('hidden');
        }
        availableJobsCounter.innerHTML = `${allJobsCounter().length} of ${allJobsCounter().length}`;
        return;
      }

      // interactions for interview button 
      if (event.target.closest("#interview-status-btn")) {
        // toggle the no jobs section
        if (interviewJobsCounter().length !== 0) {
          noJobsSection.classList.add("hidden");
        } else {
          noJobsSection.classList.remove("hidden");
        }

        for (const jobCard of jobsCards) {
          if (!jobCard.classList.contains("interview-selected")) {
            jobCard.classList.add("hidden");
          }
        }

        // re-render all counters
        availableJobsCounter.innerHTML = `${interviewJobsCounter().length} of ${allJobsCounter().length}`;
        return;
      }


      // interactions for rejected button 
      if (event.target.closest("#rejected-status-btn")) {
        // toggle the no jobs section
        if (rejectedJobsCounter().length !== 0) {
          noJobsSection.classList.add("hidden");
        } else {
          noJobsSection.classList.remove("hidden");
        }

        for (const jobCard of jobsCards) {
          if (!jobCard.classList.contains("rejected-selected")) {
            jobCard.classList.add("hidden");
          }
        }

        // re-render all counters
        availableJobsCounter.innerHTML = `${rejectedJobsCounter().length} of ${allJobsCounter().length}`;
        return;
      }


    })
  }


});