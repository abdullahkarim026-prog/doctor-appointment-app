document.getElementById("appointmentBtn").addEventListener("click", function () {
    document.getElementById("appointment").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("bookNowBtn").addEventListener("click", function () {
    document.getElementById("appointment").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("myAppointmentsBtn").addEventListener("click", function () {
    document.getElementById("appointmentsList").scrollIntoView({
        behavior: "smooth"
    });
});

const now = new Date().toISOString().slice(0,16);

document.getElementById("appointmentDate")
.setAttribute("min", now);

document.getElementById("appointmentForm")
.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const date = document.getElementById("appointmentDate").value;

    if(name === "" || email === "" || date === ""){
        alert("Please fill all fields");
        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${date}</td>
    `;

    document.getElementById("appointmentsTable")
    .appendChild(row);

    alert("Appointment booked successfully ✅");

    this.reset();
});