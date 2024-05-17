            $.validator.setDefaults( {
    submitHandler: function () {
       alert( "Enviado!" );
    }
 }); /*establecemos todo default en jquery, cuando el formulario 
 este llenado correctamente le permitira enviarlo para luego enviar la alerta de Enviado*/

 
 
 
 $(document).ready(function(){ 
    $('#validar').validate({
       rules: {
        name: {
             required: true, /*son parametros obligatorios para 'name' en este caso que es obligatorio y que tiene que ser de 5 caracteres*/
             minlength: 5
          },
          apellido: {
            required: true, 
            minlength: 5
         },
         celular: {
            required: true,
            minlength: 8
         },
          comments: {
             required: true
          },
          password: {
             required: true,
             minlength: 5
          },
          confirm_password: {
             required: true,
             minlength: 5,
             equalTo: "#password" /*Esto compara la contrasena con el reingresar contrasena y verifica que sean iguales*/
          },
          email: {
             required: true,
             email: true
          },
          
       },
       messages: {           
        name: {
             required: "Por favor ingresa tu nombre completo", /*esta seccion son mensajes para los errores*/
             minlength: "Tu nombre debe ser de no menos de 5 caracteres"
          },
          apellido: {
            required: "Por favor ingresa tu apellido completo",
            minlength: "Tu apellido debe ser de no menos de 5 caracteres"
         },
         celular: {
            required: "Por favor ingresa tu numero correctamente",
            minlength: "son almenos 8 digitos"
         },
          comments: "Por favor ingresa un comentario",
          password: {
             required: "Por favor ingresa una contraseña",
             minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud"
          },
          confirm_password: {
             required: "Por favor ingresa una contraseña",
             minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud",
             equalTo: "Por favor ingresa la misma contraseña de arriba"
          },
          email: "Por favor ingresa un correo válido",
          agree: "Por favor acepta nuestra política",
          
       },
       errorElement: "em", 
       errorPlacement: function (error, element) {
          error.addClass("help-block");
 
          if (element.prop( "type" ) === "checkbox") { /*checkbock eliminado pero el esle cumple la funcion podria dejarse como 'label'*/
             error.insertAfter(element.parent("label") );
          } else {
             error.insertAfter(element);
          }
       },
       highlight: function ( element, errorClass, validClass ) {
          $( element ).parents( ".col-sm-10" ).addClass( "has-error" ).removeClass( "has-success" ); /*esto cambia el color que daran los 'errores
          por no llenar bien el formulario'*/
       },
       unhighlight: function (element, errorClass, validClass) {
          $( element ).parents( ".col-sm-10" ).addClass( "has-success" ).removeClass( "has-error" );  
       } 
    });
 });





