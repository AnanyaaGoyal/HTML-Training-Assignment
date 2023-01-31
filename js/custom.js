const actualBtn = document.getElementById('getFile');

const fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function(){
  fileChosen.innerText = this.files[0].name
})

