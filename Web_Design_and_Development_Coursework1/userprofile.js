let currentStep = 1;
const totalSteps = 4; // Adjust based on the number of steps
const totalQuestions = 19; // Total number of questions across all steps
let answeredQuestions = 0;

function startProfileSetup() {
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('profile-form').style.display = 'block';
    document.querySelector(`.step[data-step="${currentStep}"]`).style.display = 'block';
}

function collectPersonalDetails() {
    const username = prompt("Your name:");
    updateProfile('username', username);
    updateProgress();

    const surname = prompt("Surname:");
    updateProfile('surname', surname);
    updateProgress();

    const age = prompt("Age:");
    updateProfile('age', age);
    updateProgress();

    const gender = prompt("Gender:");
    updateProfile('gender', gender);
    updateProgress();

    const privacy = confirm("Agree with privacy terms:");
    updateProfile('privacy', privacy ? 'Yes' : 'No');
    updateProgress();

    nextStep();
}

function collectVolunteeringTasks() {
    const rational = prompt("Rational:");
    updateProfile('rational', rational);
    updateProgress();

    const doa = prompt("DoA (Date of Availability):");
    updateProfile('doa', doa);
    updateProgress();

    const task = prompt("Task:");
    updateProfile('task', task);
    updateProgress();

    const place = prompt("Place:");
    updateProfile('place', place);
    updateProgress();

    const assignment = prompt("Assignment type:");
    updateProfile('assignment', assignment);
    updateProgress();

    nextStep();
}

function collectQualifications() {
    const study = prompt("Area of study:");
    updateProfile('study', study);
    updateProgress();

    const degree = prompt("Highest degree:");
    updateProfile('degree', degree);
    updateProgress();

    const university = prompt("University/Institution:");
    updateProfile('university', university);
    updateProgress();

    const year = prompt("Completion year:");
    updateProfile('year', year);
    updateProgress();

    const country = prompt("Country:");
    updateProfile('country', country);
    updateProgress();

    nextStep();
}

function collectAvailabilityAndContact() {
    const availability = prompt("Availability for volunteering (min - max hours per week):");
    updateProfile('availability', availability);
    updateProgress();

    const surnameContact = prompt("Surname:");
    updateProfile('surname_contact', surnameContact);
    updateProgress();

    const tel = prompt("Tel:");
    updateProfile('tel', tel);
    updateProgress();

    const email = prompt("Email:");
    updateProfile('email', email);
    updateProgress();

    nextStep();
}

function nextStep() {
    if (currentStep < totalSteps) {
        document.querySelector(`.step[data-step="${currentStep}"]`).style.display = 'none';
        currentStep++;
        document.querySelector(`.step[data-step="${currentStep}"]`).style.display = 'block';
    } else {
        document.getElementById('profile-form').style.display = 'none';
        document.getElementById('completion-message').style.display = 'block';
    }
}

function updateProfile(id, value) {
    document.getElementById(`display-${id}`).textContent = `${id.replace('_', ' ').charAt(0).toUpperCase() + id.replace('_', ' ').slice(1)}: ${value}`;
    answeredQuestions++;
}

function updateProgress() {
    const progress = (answeredQuestions / totalQuestions) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

function restart() {
    currentStep = 1;
    answeredQuestions = 0;
    document.getElementById('profile-form').style.display = 'block';
    document.getElementById('completion-message').style.display = 'none';
    document.querySelectorAll('.step').forEach(step => step.style.display = 'none');
    document.querySelector('.step[data-step="1"]').style.display = 'block';
    document.getElementById('progress').style.width = '0';
    document.querySelectorAll('#profile-output p').forEach(p => p.textContent = '');
}


