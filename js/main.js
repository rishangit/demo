$(document).ready(function () {
    this.header;

    this.constructor = function () {
        this.load_header();
    }

    this.load_header = function () {
        this.header = header({'wrapper':$('#header-wrapper'),'options':{}})
    }
    this.constructor();
})