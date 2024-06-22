<!DOCTYPE html>
<html>
<head>
    <title>Reservation Details</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
    </style>
</head>
<body>
    <h1>Reservation Details</h1>
    <table>
        <tr>
            <th>Name</th>
            <td>{{ $custName }}</td>
        </tr>
        <tr>
            <th>Phone Number</th>
            <td>{{ $custPhone }}</td>
        </tr>
        <tr>
            <th>Service</th>
            <td>{{ $serviceName }}</td>
        </tr>
        <tr>
            <th>Branch</th>
            <td>{{ $branchName }}</td>
        </tr>
        <tr>
            <th>Date</th>
            <td>{{ $date }}</td>
        </tr>
        <tr>
            <th>Time</th>
            <td>{{ $time }}</td>
        </tr>
    </table>
</body>
</html>
