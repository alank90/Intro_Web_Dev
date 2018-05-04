// DOM is ready
const passwd = function() {
  const el = document.querySelector('[href="#"]');
  el.addEventListener("click", function() {
    const password = prompt("Enter the password to download the file:");
    if (password != null && password.toLowerCase() === "writecode") {
      location.assign("answerKey.txt");
    } else {
      alert("incorrect password!! please try again");
      location.reload(); 
    }
  });
};

module.exports = passwd;
