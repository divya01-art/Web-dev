const searchInput=document.getElementsByClassName('searchbar');
// Wait for the DOM to load and then set the cursor position
window.onload = () => {
  // Set the cursor position at the end of the pre-filled text
  searchInput.setSelectionRange(20,20);//osition at index 7
  searchInput.focus(); // Ensure the input is focused
};
    const hearts= document.getElementsByClassName("heart");
    hearts.addEventListener('click',()=> {
         hearts.classList.toggle('liked'); // Toggle the 'liked' class
         document.getElementById('tents').addEventListener('change', function() {
          var selectedTent = this.value;
          var optionsDiv = document.getElementById('tent-options');
        
          if (selectedTent) {
            optionsDiv.classList.remove('hidden');
          } else {
            optionsDiv.classList.add('hidden');
          }
        });
    });
  
        // JavaScript function to toggle dropdown visibility
        function toggleDropdown(id) {
            const dropdown = document.getElementById(id);
            dropdown.classList.toggle("show");
        }

        // Close dropdowns when clicking outside
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                const dropdowns = document.querySelectorAll(".dropdown-content");
                dropdowns.forEach(dropdown => dropdown.classList.remove("show"));
            }
        };
  
    
  