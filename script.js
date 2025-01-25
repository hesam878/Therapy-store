// تغییر رنگ دکمه "ورود" هنگام کلیک
document.getElementById('btn2').addEventListener('click', function() {
  this.classList.toggle('clicked');
});

// اعتبارسنجی فرم تماس با ما
document.querySelector('form').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('لطفاً تمامی فیلدها را پر کنید.');
    event.preventDefault();
  }
});
  