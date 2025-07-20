document.getElementById('uplo').addEventListener('click', function () {
    document.getElementById('fileInput').click();
  });
  
  document.getElementById('fileInput').addEventListener('change', function (event) {
    const files = event.target.files;
    if (files.length > 0) {
      alert(You selected: ${files[0].name});
      
    }
    
  });
  