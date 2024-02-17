let string = '';
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.value == '='){
            try{

                string = eval(string)
            }
            catch{
                document.querySelector('input').value = 'this is not define'
                console.log('this is not define')
            }
            
            document.querySelector('input').value = string
            return            
        }
     
        if(btn.value == 'AC'){
            string = '';
            document.querySelector('input').value = string

        }
        else{
            
            string += btn.value;
            document.querySelector('input').value = string
        }
    })
})
