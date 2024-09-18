function generateTable() {
    const rows = document.getElementById("rows").value;
    const columns = document.getElementById("columns").value;
  
    
    if (rows === "" || columns === "" || rows <= 0 || columns <= 0) {
      alert("Please enter valid numbers for both rows and columns.");
      return;
    }
  
    
    const tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = "";
  

    const table = document.createElement("table");
  

    for (let i = 0; i < rows; i++) {
    
      const tr = document.createElement("tr");
  
      
      for (let j = 0; j < columns; j++) {

        const td = document.createElement("td");
  
        
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = `Row ${i+1}, Col ${j+1}`;
  
        
        td.appendChild(input);
  
        
        tr.appendChild(td);
      }
  

      table.appendChild(tr);
    }
  

    tableContainer.appendChild(table);
  }
  