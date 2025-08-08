
function sendMailto(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const company = document.getElementById('company').value.trim();
  const from = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent('Supplier introduction request');
  const body = encodeURIComponent(
    `Name: ${name}%0D%0ACompany: ${company}%0D%0AEmail: ${from}%0D%0A%0D%0ARequest:%0D%0A${message}`
  );

  window.location.href = `mailto:${AEM_EMAIL}?subject=${subject}&body=${body}`;
  return false;
}

document.addEventListener('DOMContentLoaded', function(){
  const copyBtn = document.getElementById('copyEmail');
  if(copyBtn){
    copyBtn.addEventListener('click', async () => {
      try{
        await navigator.clipboard.writeText(AEM_EMAIL);
        copyBtn.textContent = 'Copied';
        setTimeout(()=> copyBtn.textContent='Copy', 1500);
      }catch(err){
        alert('Email: ' + AEM_EMAIL);
      }
    });
  }
});
