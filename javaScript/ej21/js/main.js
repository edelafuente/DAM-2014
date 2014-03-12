window.$ = Element.prototype.$ = function(selector){
    var that = (this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);
    return (elems.length === 1) ? elems[0] : elems;
};

window.onload = function(){
    $('#registro').validar({
        'required' : {
            'error' : 'This field is required',
            'class' : 'error'
        },
        'email' : {
            'error' : 'This email is not correct',
            'class' : 'error'
        },
        'password' : {
            'error' : 'This password is not correct',
            'class' : 'error'
        },
        'mini' : {
            'error' : 'This text is not enough',
            'class' : 'error'
        },
        'check' : {
            'error' : 'Accept the conditions',
            'class' : 'error'
        }
    });
};