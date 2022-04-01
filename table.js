function table() {
    document.getElementById('tbl').style.display = 'table';
    let inp = document.getElementById('inp');
    let table = ""
    for (let i = 0; i < inp.value; i++) {
        table += `<tr>` 
        
      
        for (let j = 0; j < inp.value; j++) {
            let color = i**2 == j**2 || (i + j+1) == inp.value ? 'black' : " "; 
            table += `<td style="background-color:${color}" > ${i} ${j} </td>`;
        }

        table += `<tr/>`
    }

    document.getElementById("tbl").innerHTML = table;

}