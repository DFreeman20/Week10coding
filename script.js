/*Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.*/ 

/*
Button should add a table row full of data
Need: First, Last, Favorite Team and number
Get values from form and add row

getElelmentById()
Id's on values
*/

const formButton = document.getElementById("formSubmit")

let number = 1

formButton.addEventListener("click", (event) => {
    event.preventDefault() //prevents page from refreshing
    // variables for the form values
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let favoriteTeam = document.getElementById("favoriteTeam").value

    //tr node to add data
    let newTableRow = document.createElement("tr")

    //this adds a number and it increment with number++ at the end of this code
    let numberNode= document.createElement("td")
        numberNode.innerHTML = number
        newTableRow.append(numberNode)

    //this code adds the first name, similar code was used for last name and favorite team
    let firstNameNode = document.createElement("td")
    firstNameNode.innerHTML = firstName
    newTableRow.append(firstNameNode)

    let lastNameNode = document.createElement("td")
    lastNameNode.innerHTML = lastName
    newTableRow.append(lastNameNode)

    let favoriteTeamNode = document.createElement("td")
    favoriteTeamNode.innerHTML = favoriteTeam
    newTableRow.append(favoriteTeamNode)

    //this code adds a new table row
    document.getElementById("tBody").appendChild(newTableRow)

    //this code sets the text boxes back to blank after pressing the button
    document.getElementById("firstName").value = ""
    document.getElementById("lastName").value = ""
    document.getElementById("favoriteTeam").value = ""

    number++
})