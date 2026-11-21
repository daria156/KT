const tickets = [
    {title : 'Проектор не включается', room: '203', category: 'Оборудование', done: false},
    {title : 'Не закрывается окно', room: '105', category: 'Аудитория', done: false},
    {title : 'В коридоре не горит свет', room: 'Коридор, 2-й этаж', category: 'Другое', done: true}
]
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const selectCategory = document.getElementById('selectCategory');
const addButton = document.getElementById('addButton');
const message = document.getElementById('message');

const onlyOpen = document.getElementById('onlyOpen');
const filterCategory = document.getElementById('filterCategory');
const ticketList = document.getElementById('ticketList');



function renderTickets() {
   ticketList.innerHTML = ""
       let count = 0;

       if (tickets.length === "") {
        ticketList.textContent = "Заявок пока нет"
        return
       }

       tickets.forEach(function(ticket, index) {
         if (onlyOpen.checked && ticket.done == true) {
            return;
        }
        
        if (filterCategory.value != "" && ticket.category != filterCategory.value) {
            return;
        }

        count++
        let item = document.createElement("div");
        let title = document.createElement("h3");

        title.textContent = ticket.title;
        let room = document.createElement("p");
        room.textContent = "Место: " + ticket.room;

        let category = document.createElement("p");
        category.textContent = "Категория: " + ticket.category;

        let status = document.createElement("p");
       });

    if (ticket.done == true) {
        status.textContent = "Выполнено"
    } else {
        status.textContent = "Открыто"
    }    
} 
    item.append(title);
    item.append(room);
    item.append(category);
    item.append(status);

    if (ticket.done == false) {
         let doneButton = document.createElement("button");
            doneButton.textContent = "Выполнить";

            doneButton.addEventListener("click", function() {
                tickets[index].done = true;
                renderTickets();
            });
                 item.append(doneButton);
    }

     let deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";

        deleteButton.addEventListener("click", function() {
            tickets.splice(index, 1);
            renderTickets();
    
        item.append(deleteButton);

        ticketList.append(item);
     });

    if (count == 0) {
        if (onlyOpen.checked && filterCategory.value == "") {
            ticketList.textContent = "Открытых заявок нет";
        } else {
            ticketList.textContent = "Нет заявок по выбранным фильтрам";
        }
    }

    addButton.addEventListener("click", function() {

    const title = input1.value.trim();
    const room = input2.value.trim();
    const category = selectCategory.value;

    

