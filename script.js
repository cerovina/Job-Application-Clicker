let jobCount = 0;

const job = document.getElementById("job");
const jobCountDisplay = document.getElementById("job-count");

function updateJobCount() {
    jobCount += 5; // Add 5 job applications on click
    jobCountDisplay.textContent = jobCount;
}

job.addEventListener('click', updateJobCount);

function addJobsAutomatically() {
    jobCount++; // Add 1 job application automatically
    jobCountDisplay.textContent = jobCount;
}

// Call the function to start adding job applications automatically every second
const autoJobnterval = setInterval(addJobsAutomatically, 1000);
