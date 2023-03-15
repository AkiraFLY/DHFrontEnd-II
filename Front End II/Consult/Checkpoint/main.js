const inputNameRef = document.querySelector('#taskName')
const inputUrlRef = document.querySelector('#url')
const inputDescRef = document.querySelector('#description')
const inputButtonRef = document.querySelector('#createTaskButton')
const taskCardRef = document.querySelector('#taskCards')

var formError = {
  taskName: true,
  url: true,
  description: true

}

function checkFormValidity(){
  
  const formErrorArray = Object.values(formErros)

  const formValidity = formErrorArry.every(item => item === false)

  inputButtonRef.desable =!formValidity


}


function validateInput(inputRef){

  const inputValid = inputRef.checkFormValidity()
  const elementFatherRef = inputRef.parentElement

  if(inputValid){
    elementFatherRef.classList.remove('error_message_container')
  }else{

    elementFatherRef.classList.add('error_message_container')
  }

  formError[inputRef.id] = !inputValid
  checkFormValidity()


}


function newTask(event){
  event.preventDefault()
}


inputNameRef.addEventListener ('keyup', () => validateInput(inputNameRef))
inputUrlRef.addEventListener ('keyup', () => validateInput(inputUrlRef))
inputDescRef.addEventListener ('keyup', (event) => newTask(event))