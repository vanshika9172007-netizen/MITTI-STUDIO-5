
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mitti Studio Dashboard - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f8f3ed;
            color: #49392e;
            line-height: 1.6;
            margin: 0;
            padding: 30px;
        }

        .container {
            max-width: 850px;
            margin: auto;
            background: white;
            padding: 30px;
            border-radius: 12px;
        }

        h1, h2 {
            color: #795b45;
        }

        code {
            background: #f0e8df;
            padding: 3px 6px;
            border-radius: 4px;
        }

        li {
            margin-bottom: 8px;
        }
    </style>
</head>
<body>

<div class="container">

    <h1>Mitti Studio – Class & Booking Management Dashboard</h1>

    <p>
        A responsive dashboard for managing pottery classes,
        student enquiries, bookings, and enrollment analytics.
    </p>

    <h2>Features</h2>
    <ul>
        <li>Dashboard overview with summary statistics.</li>
        <li>Pottery class schedule and enrollment details.</li>
        <li>Student enquiry management.</li>
        <li>Search and status filtering.</li>
        <li>Enrollment analytics chart.</li>
        <li>Responsive layout for mobile and desktop.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>JSON</li>
    </ul>

    <h2>Project Structure</h2>
    <pre>
MITTI-STUDIO4/
│
├── src/
│   ├── index.html
│   ├── dashboard.html
│   ├── css/
│   │   ├── style.css
│   │   └── dashboard.css
│   ├── js/
│   │   ├── main.js
│   │   └── dashboard.js
│   └── data/
│       ├── classes.json
│       └── enquiries.json
│
├── README.html
└── performance-report.md
    </pre>

    <h2>How to Run</h2>
    <ol>
        <li>Download or extract the project folder.</li>
        <li>Open the folder in Visual Studio Code.</li>
        <li>Run <code>src/index.html</code> using Live Server.</li>
        <li>Open <code>src/dashboard.html</code> to view the dashboard.</li>
    </ol>

    <h2>Note</h2>
    <p>
        This project uses sample JSON data for demonstration.
        It does not use a live database or real booking system.
    </p>

    <h2>Project Purpose</h2>
    <p>
        Developed as part of the YuvaIntern Week 5
        Frontend Development Internship task.
    </p>

</div>

</body>
</html>
