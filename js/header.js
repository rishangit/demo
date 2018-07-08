var header = function (params) {

    this.options;
    this.wrapper = params.wrapper;

    $.extend(this.options, params.options)

    this.constructor = function () {
        this.bind_events();
    }

    this.bind_events = function () {
        var self = this;
        // $('.menu-option', this.wrapper).on('mouseenter',function (event) {$(this).addClass('animated pulse')});
        // $('.menu-option', this.wrapper).on('mouseleave',function (event) {$(this).removeClass('animated pulse')});

        // $('#banner').off('click').on('click', function (event) {
        //     $(this).addClass('animated bounceIn');
        //     setTimeout(() => {
        //         $(this).removeClass('animated bounceIn');
        //     }, 200);
        // })
        // $('#currency-wrp', this.wrapper).off('click').on('click', (event)=>{
        //     event.stopPropagation();
        //     $('.dropdown-content', self.wrapper).toggleClass('show');
        //     $(document).on('click',  '*:not( #currency-wrp )', function(){             
        //         $('.dropdown-content', self.wrapper).removeClass('show');
        //     })
        // }) 

        //alert($(this.wrapper).attr('id'));
        $('#menu-icon', this.wrapper).off('click').on('click', function (event) {
            //alert('mobile menu click');
            event.stopPropagation();
            $('.menu-options-wrapper', self.wrapper).toggleClass('show');
            $(document).on('click', '*:not( .menu-options-wrapper)', function () {
                $('.menu-options-wrapper', self.wrapper).removeClass('show');
            })
        })
    }

    this.constructor();
}