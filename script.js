//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click",  () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}
function sendMessage() {
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  // Replace with your actual bot token and chat ID
  var botToken = '6807369785:AAF3cMCpLI_LNAjAxuVfoBdgefOgXUoiDXM';
  var chatId = '6036103551'; // Updated with the specific chat ID

  var telegramMessage = `New message from: ${name}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
  var apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(telegramMessage)}`;

  // Send data to Telegram API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log("Message sent to Telegram", data);
      // You can handle the response from the Telegram API here if needed
    })
    .catch(error => {
      console.error("Error sending message to Telegram", error);
      // Handle the error here
    });
}
