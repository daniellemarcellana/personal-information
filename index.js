const formdata = $("#formdata");
const datatable = $("#datatable");

formdata.on('submit', (e) => {
    e.preventDefault();

    db.collection('personal').add({
        lastname: $("#lastname").val(),
        firstname: $("#firstname").val(),
        middlename: $("#middlename").val(),
        age: $("#age").val(),
        sex: $("#sex").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        address: $("#address").val()
    })
    $("#lastname").val("");
    $("#firstname").val("");
    $("#middlename").val("");
    $("#age").val("");
    $("#sex").val("");
    $("#phone").val("");
    $("#email").val("");
    $("#address").val("");
    alert("Are you sure you want to add this record?");
})



function render(doc) {
    datatable.append(`<tr id="${doc.id}"> 
    <td>${doc.data().lastname}</td>
    <td>${doc.data().firstname}</td>
    <td>${doc.data().middlename}</td>
    <td>${doc.data().age}</td>
    <td>${doc.data().sex}</td>
    <td>${doc.data().email}</td>
    <td>${doc.data().phone}</td>
    <td>${doc.data().address}</td>
    </tr>`)
}

db.collection('personal').orderBy('lastname').onSnapshot(snapshot=>{
    let changes=snapshot.docChanges();
    changes.forEach(change=>{
        if(change.type=="added"){
            render(change.doc)
        }
    })
})