axios.defaults.headers.common['X-Auth-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';



var modal = document.getElementById("myModal");

let driverData = [];
var btn = document.querySelector(".myBtn");
var span = document.getElementsByClassName("close")[0];
const submitBtn = document.getElementById("submit");
const form = document.querySelector("form");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const values = [...formData.values()];
  driverData = [...driverData, formData];
  console.log(values);
  console.log(driverData);
});

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};


window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};