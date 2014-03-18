(function($){

    //funciones validadoras
    var email = function(ml){

        var mail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        return ml && mail.test(ml);
    };

    var password = function(passwd){

        var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return passwd && pass.test(passwd);
    };

    var required = function(requi){

        var req = /.+/;
        return requi && req.test(requi);
    };

    var mini = function(text){

        var mi = /.{50,}/;
       return text && mi.test(text);

    };
    // final funciones validadoras


    //funciones
    var validarRequerido = function(e){
        if(!required(this.value)){
                llamarErrores(opts.required);
                this.classList.add(opts.required.class);
        }
        else{
            this.classList.remove(opts.required.class);
            errores.pop();
        }
    };

    var validarEmail = function(e){
        if(!email(this.value)){
                llamarErrores(opts.email);
                this.classList.add(opts.email.class);
        }
        else{
            this.classList.remove(opts.email.class);
            errores.pop();
        }
    };

    var validarPassword = function(e){
        if(!password(this.value)){
                llamarErrores(e.data.password);
                this.classList.add(e.data.password.class);
        }
        else{
            this.classList.remove(e.data.password.class);
            errores.pop();
        }
    };

    var validarMini = function(e){
        if(!mini(this.value)){
                llamarErrores(opts.mini);
                this.classList.add(opts.mini.class);
        }
        else{
            this.classList.remove(opts.mini.class);
            errores.pop();
        }
    };

    var validarCheck = function(e){
        if(this.checked ===  false){
                llamarErrores(opts.check);
                this.labels[0].classList.add(opts.check.class);
        }
        else{
            this.labels[0].classList.remove(opts.check.class);
            errores.pop();
        }
    };

    var llamarErrores = function(err){
        if (err) {
            console.log(err.error);
            errores.push(err.error);
        }
        else {
            console.log("error, faltan datos o son incorrectos");
        }
    };
    //final funciones



    $.fn.formValidator = function(options){

        var opts = $.extend({}, $.fn.formValidator.defaults, options);

        return this.filter('form').each(function(){
            var $this = $(this);

            $this.find('input[data-validator=required]').on('keypress', opts, validarRequerido);
            $this.find('input[data-validator=password]').on('keypress', opts,validarPassword);
            $this.find('input[data-validator=email]').on('keypress',validarEmail);
            $this.find('input[data-validator=mini]').on('keypress',validarMini);
            //$this.on('submit', validarSubmit);



        });
    };

    //defaults
    $.fn.formValidator.defaults = {
        'required' : {
            'error' : 'This field is required',
            'class' : 'wrong'
        },
        'email' : {
            'error' : 'This email is not correct',
            'class' : 'wrong'
        },
        'password' : {
            'error' : 'This password is not correct',
            'class' : 'wrong'
        },
        'mini' : {
            'error' : 'This text is not enough',
            'class' : 'wrong'
        },
        'check' : {
            'error' : 'Accept the conditions',
            'class' : 'checkwrong'
        }
    };
    //end of defaults


})(jQuery);

$('form').formValidator();