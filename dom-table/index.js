const table = document.createElement('table');
table.style.border = '1px solid green'
table.style.width = '500px'
document.body.append(table);

const TABLE_ROWS = 10;
const TABLE_CELLS = 10;

let counter = 1;

for (let i = 1; i <= TABLE_ROWS; i++) {
    const tr = document.createElement('tr');
    table.append(tr);
    for (let i = 1; i <= TABLE_CELLS; i++) {
        const td = document.createElement('td');
        td.style.width = '48px';
        td.style.border = '1px solid green'
        td.innerText = String(counter++);
        td.style.textAlign = 'center';
        tr.append(td);
    }
}