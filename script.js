const emailIcon = document.getElementById("email");
emailIcon.addEventListener("click", () => {
  navigator.clipboard.writeText("woowooyong@gmail.com");
  alert("已複製email");
});
