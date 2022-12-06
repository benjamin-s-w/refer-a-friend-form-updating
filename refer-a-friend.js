window.onload = function () {

  //elements
    let to = 'Friend';
    let from = 'Your friend';
    let typedTo = document.getElementById('nf-field-11');
    let message = document.getElementById('nf-field-8');
    let typedFrom = document.getElementById('nf-field-6');

    //events
    if (typedTo) {
      typedTo.addEventListener('blur', toSwap, false);
    }
    if (typedFrom) {
      typedFrom.addEventListener('blur', fromSwap, false);
    }

    //functions
    function toSwap() {
      to = typedTo.value;
      textSwap(from, to);
    }

    function fromSwap() {
      from = typedFrom.value;
      textSwap(from, to);
    }

    function textSwap(a, b) {
      if (message) {
        message.value = 'Dear ' + b + ', \r\n\r\nI thought of you when I recently had a great experience at my favorite hearing care provider, Family Hearing & Sensory Neural Center. They offer free, no-obligation hearing tests to help people find out if they really have a hearing problem. \r\n\r\nThey are conveniently located in Huntsville and they treat you like you\'re one of the family. Please, consider visiting their website at www.familyhearingcenter.com to set up your appointment whenever you have a chance. \r\n\r\nYou can also call their office directly at (936) 755-4343. \r\n\r\nSincerely, \r\n\r\n' + a;
      }
  }
}
