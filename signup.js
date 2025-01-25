document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // جلوگیری از ارسال فرم به صورت پیش‌فرض
  
    // گرفتن مقادیر ورودی‌ها
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // پیام خطا
    const message = document.getElementById('message');
  
    // بررسی خالی بودن فیلدها
    if (!name || !email || !password || !confirmPassword) {
      message.textContent = 'لطفاً تمامی فیلدها را پر کنید.';
      return;
    }
  
    // بررسی فرمت ایمیل
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      message.textContent = 'ایمیل معتبر نیست.';
      return;
    }
  
    // بررسی تطابق رمز عبور
    if (password !== confirmPassword) {
      message.textContent = 'رمز عبور و تکرار آن یکسان نیستند.';
      return;
    }
  
    // موفقیت
    message.style.color = 'green';
    message.textContent = 'ثبت‌نام با موفقیت انجام شد!';
    
    // ارسال داده به سرور (در آینده می‌توان از AJAX یا API استفاده کرد)
    console.log({ name, email, password });
  });
  