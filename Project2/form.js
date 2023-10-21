
function formSubmit(event) {
  event.preventDefault();

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;



  var despite = document.getElementById('paragraph').value;
  document.getElementById('descp').textContent = despite;

  var unit = document.getElementById('unit').value;
  document.getElementById('user1').textContent = unit;

  var department = document.getElementById('department').value;
  document.getElementById('department1').textContent = department;

  var code = document.getElementById('code').value;
  document.getElementById('code1').textContent = code;

  var title = document.getElementById('title').value;
  document.getElementById('title1').textContent = title;

  var type = document.querySelector('input[name="type"]:checked').value;
  document.getElementById('type1').textContent = type;

  var pre = document.getElementById('pre').value;
  document.getElementById('pre1').textContent = pre;

  var credits = document.getElementById('credits').value;
  document.getElementById('credits1').textContent = credits;

  var hours = document.getElementById('hours').value;
  document.getElementById('hours1').textContent = hours;

  var language = document.querySelector('input[name="delivery_language"]:checked').value;
  var other_language = document.getElementById('SpecifyLanguage').value;

  if (other_language === "") {
    document.getElementById('language1').textContent = language;
  } else {
    document.getElementById('language1').textContent = other_language;
  }

  var offered = document.querySelectorAll('input[name="offered"]:checked');
  var offeredValues = [];
  for (var i = 0; i < offered.length; i++) {
    offeredValues.push(offered[i].value);
  }
  document.getElementById('offered1').textContent = offeredValues.join(', ');

  var semester = document.getElementById('semester').value;
  var year = document.getElementById('year').value;
  document.getElementById('semester1').textContent = semester + ' ' + year;

  var crn = document.getElementById('crn').value;
  document.getElementById('crn1').textContent = crn;

  var day = document.querySelectorAll('input[name="day"]:checked');
  var dayValues = [];
  for (var i = 0; i < day.length; i++) {
    dayValues.push(day[i].value);
  }
  document.getElementById('day1').textContent = dayValues.join(', ');

  var start_time = document.getElementById('start_time').value;
  document.getElementById('start_time1').textContent = start_time;

  var end_time = document.getElementById('end_time').value;
  document.getElementById('end_time1').textContent = end_time;

  var fname = document.getElementById('fname').value;
  document.getElementById('fname1').textContent = fname;

  var category = document.querySelectorAll('input[name="Category"]:checked');
  var categoryValues = [];
  for (var i = 0; i < category.length; i++) {
    categoryValues.push(category[i].value);
  }
  document.getElementById('category1').textContent = categoryValues.join(', ');

  var office = document.getElementById('office').value;
  document.getElementById('office1').textContent = office;


  var email = document.getElementById('email').value;
  var email1 = document.getElementById('emailtoins');
  email1.href = "mailto:" + email;
  document.getElementById('emailtoins').textContent = email;

  var office = document.getElementById('reply').value;
  document.getElementById('reply1').textContent = reply;

  var grading = document.getElementById('grading').value;
  document.getElementById('grading1').textContent = grading;

  var policy = document.getElementById('policy').value;
  document.getElementById('policy1').textContent = policy;

  document.getElementById("form-to-fill").style.display = "none";
  document.getElementById("form-filled").style.display = "block";

}

function reviewForm() {
  formSubmit();
  document.getElementById('form-to-fill').style.display = "block";
  document.getElementById('form-filled').style.display = "none";
}

function editForm() {
  document.getElementById('form-to-fill').style.display = "block";
  document.getElementById('form-filled').style.display = "none";
}

// Get the button
let mybutton = document.getElementById("bt1");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showTextField() {
  const textField = document.getElementById('SpecifyLanguage');
  textField.style.display = 'inline-block';

}

function hideTextfield() {
  const textField = document.getElementById('SpecifyLanguage');
  textField.style.display = 'none';
}











