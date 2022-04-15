function onfocusFun(id_)
{
  id_.parentNode.parentNode.classList.add('onfocus');
}

function onblurFun(id_)
{
  id_.parentNode.parentNode.classList.remove('onfocus');
}


const form = document.querySelector('#form');

form.addEventListener('submit', (e) =>
{
  e.preventDefault();
  const formData = new FormData(form);

  fetch('/mail', {
    method: 'POST',
    body: JSON.stringify({
      in1: formData.get('in1'),
      in2: formData.get('in2'),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch((err) =>
  {
    console.log(err);
  });
});

