function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "",
        Password : "",
        To : '',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name" + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value + 
        "<br> Contact No.: " + document.getElementById("phone").value + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
}