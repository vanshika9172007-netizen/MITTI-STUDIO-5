
// Mitti Studio Dashboard

let enquiries = [];
let classes = [];

// Load data from JSON files
async function loadDashboardData() {
    try {
       
        const [classResponse, enquiryResponse] = await Promise.all([
    fetch("/src/data/classes.json"),
    fetch("/src/data/enquiries.json")
        ]);

        if (!classResponse.ok || !enquiryResponse.ok) {
            throw new Error("Unable to load dashboard data.");
        }

        const classData = await classResponse.json();
        const enquiryData = await enquiryResponse.json();

        classes = classData.classes;
        enquiries = enquiryData.enquiries;

        displayOverview();
        displayClasses();
        displayStudents(enquiries);
        displayAnalytics();

    } catch (error) {
        console.error("Dashboard loading error:", error);

        document.getElementById("classList").textContent =
            "Unable to load class data. Please open the project using Live Server.";

        document.getElementById("studentTable").innerHTML =
            '<tr><td colspan="4">Unable to load student data.</td></tr>';
    }
}

// Display overview statistics
function displayOverview() {
    const totalStudents = enquiries.length;

    const upcomingClasses = classes.filter(
        item => item.status === "Upcoming"
    );

    const completedClasses = classes.filter(
        item => item.status === "Completed"
    );

    const availableSeats = upcomingClasses.reduce(
        (total, item) => total + (6 - item.enrolled), 0
    );

    document.getElementById("totalStudents").textContent = totalStudents;
    document.getElementById("upcomingClasses").textContent =
        upcomingClasses.length;
    document.getElementById("availableSeats").textContent =
        availableSeats;
    document.getElementById("completedClasses").textContent =
        completedClasses.length;
}

// Display class schedule
function displayClasses() {
    const classList = document.getElementById("classList");
    classList.innerHTML = "";

    classes.forEach(item => {
        const card = document.createElement("article");
        card.className = "class-card";

        const title = document.createElement("h3");
        title.textContent = item.batch + " - " + item.topic;

        const week = document.createElement("p");
        week.textContent = "Course Week: " + item.week;

        const date = document.createElement("p");
        date.textContent = "Date: " + item.date;

        const time = document.createElement("p");
        time.textContent = "Time: " + item.time;

        const seats = document.createElement("p");
        seats.textContent = "Students: " + item.enrolled + " / 6";

        const status = document.createElement("p");
        status.textContent = "Status: " + item.status;

        card.append(title, week, date, time, seats, status);
        classList.appendChild(card);
    });
}

// Display student enquiry records
function displayStudents(records) {
    const table = document.getElementById("studentTable");
    table.innerHTML = "";

    if (records.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");

        cell.colSpan = 4;
        cell.textContent = "No student records found.";

        row.appendChild(cell);
        table.appendChild(row);
        return;
    }

    records.forEach(student => {
        const row = document.createElement("tr");

        const name = document.createElement("td");
        name.textContent = student.name;

        const email = document.createElement("td");
        email.textContent = student.email;

        const batch = document.createElement("td");
        batch.textContent = student.batch;

        const status = document.createElement("td");
        status.textContent = student.status;

        row.append(name, email, batch, status);
        table.appendChild(row);
    });
}

// Search and filter student records
function filterStudents() {
    const searchValue = document
        .getElementById("studentSearch")
        .value.toLowerCase();

    const selectedStatus = document
        .getElementById("statusFilter")
        .value;

    const filteredRecords = enquiries.filter(student => {
        const matchesName = student.name
            .toLowerCase()
            .includes(searchValue);

        const matchesStatus =
            selectedStatus === "all" ||
            student.status === selectedStatus;

        return matchesName && matchesStatus;
    });

    displayStudents(filteredRecords);
}

// Display enrollment chart
function displayAnalytics() {
    const chart = document.getElementById("enrollmentChart");
    chart.innerHTML = "";

    const batchCounts = {};

    enquiries.forEach(student => {
        batchCounts[student.batch] =
            (batchCounts[student.batch] || 0) + 1;
    });

    Object.entries(batchCounts).forEach(([batch, count]) => {
        const barWrapper = document.createElement("div");
        barWrapper.className = "chart-bar-wrap";

        const number = document.createElement("span");
        number.textContent = count;

        const bar = document.createElement("div");
        bar.className = "chart-bar";
        bar.style.height = (count * 35) + "px";

        const label = document.createElement("span");
        label.textContent = batch;

        barWrapper.append(number, bar, label);
        chart.appendChild(barWrapper);
    });
}

// Connect search and filter controls
document
    .getElementById("studentSearch")
    .addEventListener("input", filterStudents);

document
    .getElementById("statusFilter")
    .addEventListener("change", filterStudents);

// Start dashboard
loadDashboardData();
