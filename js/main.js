$(document).ready(function() {

    $('a.Menu').on('click', function() {

        $('a.Menu').find('i').toggleClass('fa-times');
        $(this).parent().prev().toggleClass('hidden')
    });

    $('li.services a').on('click', function() {


        $(this).parent().find($('.servicesBox')).toggleClass('hidden');
    });

    $('li.services .fa-caret-down').on('click', function() {


        $(this).parent().find($('.servicesBox')).toggleClass('hidden');
    });


    if ($('body').width() <= 768) {

        $('.navLinks > li a').on('click', function() {

            $(this).parent().addClass('active').siblings().removeClass('active');
            $(this).parent().addClass('active').siblings().find($('.servicesBox li')).removeClass('active').parent().addClass('hidden')



        })


        $('.navLinks > li .fa-caret-down').on('click', function() {

            $(this).parent().addClass('active').siblings().removeClass('active');
            $(this).parent().addClass('active').siblings().find($('.servicesBox li')).removeClass('active').parent().addClass('hidden')



        });
    }

    $('.Sign .signLinks li').on('click', function() {

        $($(this).data('class')).addClass('active').siblings().removeClass('active');

        $("." + $(this).data('class')).removeClass('hiden').siblings().addClass('hiden');



    });


    $(window).on('load', function() {

        if (window.location.hash == "#signin") {

            window.location.hash == "#signin";
            $("#signin").removeClass('hiden').siblings().addClass('hiden');


        } else if (window.location.hash == "#signup") {

            window.location.hash == "#signup";
            $("#signup").removeClass('hiden').siblings().addClass('hiden');
        }

        /*else {
                   window.location.hash = "#signin";
                   $("#signin").removeClass('hiden').siblings().addClass('hiden');

               }*/

    });
    // create slider of books on mobile screen 

    let rows = $('.books').children().length - 1;

    console.log(rows);




    $('.recentlyStories .fa-chevron-left').on('click', function() {

        if ($('.books .row').eq(0).hasClass('active') === true) {

            console.log($('.books .row').eq(0).hasClass('active'));
            $('.books .row').eq(`${rows}`).addClass('active').siblings().removeClass('active');
            $('.indicators li').eq(`${rows}`).addClass('active').siblings().removeClass('active');


        } else {
            $('.books .row.active').prev().addClass('active').siblings().removeClass('active');
            $('.indicators li.active').prev().addClass('active').siblings().removeClass('active');

        };
        $(this).parent().siblings().find('.row.active').removeClass(['wow', 'animate__animated', 'animate__slideInLeft', 'animate__slideInRight']).addClass(['wow', 'animate__animated', 'animate__slideInRight']).siblings().removeClass('animate__slideInLeft');


    });


    $('.recentlyStories .fa-chevron-right').on('click', function() {


        if ($('.books .row').eq(`${rows}`).hasClass('active') === true) {

            console.log($('.books .row').eq(`${rows}`).hasClass('active'));
            $('.books .row').eq(0).addClass('active').siblings().removeClass('active');
            $('.indicators li').eq(0).addClass('active').siblings().removeClass('active');

        } else {
            $('.books .row.active').next().addClass('active').siblings().removeClass('active');
            $('.indicators li.active').next().addClass('active').siblings().removeClass('active');



        };

        $(this).parent().siblings().find('.row.active').removeClass(['wow', 'animate__animated', 'animate__slideInLeft', 'animate__slideInRight']).addClass(['wow', 'animate__animated', 'animate__slideInLeft']).siblings().removeClass('animate__slideInRight')


    });

    //create fav button 
    var favButton = $("<button><i class='far fa-heart'></i></button>");
    // var favIcon = $('<i></i>');
    //$(favIcon).addClass('far fa-heart');
    $(favButton).css({
        'display': 'inline-flex',
        'font-size': '30px',
        'color': '#DC864E',
        'position': 'absolute',
        'top': '10px',
        'left': '10px',
        'cursor': 'pointer',
        'width': '30px',
        'height': '30px',
        'background': 'transparent',
        'outline': 'none',
        'border': 'none'
    });

    $('.books').find('.book .image .overflow').append(favButton);
    console.log($(favButton));



    for (let i = 0; i < ($('.books').find('.book .image .overflow').length); i++) {

        $('.book').children('.image').children('.overflow').children('i').remove();
        $('.books .book').find('.overflow button i').css('display', 'block');


    }



    for (let index = 0; index < $('.books').children().length; index++) {


        let row = $('.books').children()[index];
        $($('.books').children()[index]).addClass(`${index}`);


        console.log(row);

        // create li based on row numbers 

        let li = $(`<li data-row=${index}></li>`);
        $('.indicators').append(li);


        //change books with scroll 

        $(window).scroll(function() {

            console.log($('.recentlyStories').width());


            if ($('.recentlyStories').width() < 768) {
                $($(row).children()).css('display', 'none');
                $($(row).children()[0]).css('display', 'flex');
                $($(row).children()).css(
                    'width', '220px');


                $($(row).children()).find($('.image')).css('height', '300px');
                $($(row).children()).find($('.overflow a')).css({ 'height': '50px', 'width': '50px', 'font-size': '26px' })

                $($(row).children()).find($('.controls')).css('padding', '0px 9px');

                $($(row).children()).find($('container .controls i')).css('width', '40px');



            } else {

                $($(row).children()).css(
                    'display', 'block');


            }

            $('.indicators li').css('width', `${($('.indicators').width()) / (($('.books').children().length))}`)



        })
        $('.indicators li:first-of-type').addClass('active');


    }



    $('.indicators li').on('click', function() {


        $(this).addClass('active').siblings().removeClass('active');
        $("." + $(this).data('row')).addClass('active').siblings().removeClass('active');

        if ($(this).data('row') == 2) {

            $("." + $(this).data('row')).removeClass(['wow', 'animate__animated', 'animate__slideInRight', 'animate__slideInLeft']).addClass(['wow', 'animate__animated', 'animate__slideInLeft']).siblings().removeClass(['animate__slideInRight']);


        } else if ($(this).data('row') == 0) {
            $("." + $(this).data('row')).removeClass(['wow', 'animate__animated', 'animate__slideInRight', 'animate__slideInLeft']).addClass(['wow', 'animate__animated', 'animate__slideInRight']).siblings().removeClass(['animate__slideInLeft']);

        }
        /* else if (($(this).data('row') == 1)) {

                $("." + $(this).data('row')).removeClass(['wow', 'animate__animated', 'animate__slideInRight', 'animate__slideInLeft']).addClass(['wow', 'animate__animated', 'animate__slideInLeft']).siblings().removeClass(['wow', 'animate__animated', 'animate__slideInRight']);

            } else if (($(this).next().data('row') == 2)) {
                $("." + $(this).data('row')).removeClass(['wow', 'animate__animated', 'animate__slideInLeft', 'animate__slideInRight']).addClass(['wow', 'animate__animated', 'animate__slideInRight']).siblings().removeClass(['wow', 'animate__animated', 'animate__slideInLeft']);

            }
            */


    });


    $('.questionContainer p.question i').on('click', function() {

        $(this).parent().siblings().slideToggle();
        $(this).parent().parent().siblings().find($('p.Answer')).slideUp();
        $(this).parent().parent().siblings().find($('i')).removeClass('fa-sort-up');
        $(this).toggleClass('fa-sort-up');
        $(this).parent().toggleClass('border');
        $(this).parent().parent().siblings().find($('p.question')).removeClass('border');



    });

    $('.translationSec .upload input').on('change', function() {


        let fileName = $(this).val();
        $(this).parent().find('span').text(fileName);


    });

    let fileName = $('.upload input').val();
    console.log(fileName);


    let storyTitle = $('.storyDetail .detail .book h3').text();
    console.log(storyTitle);
    $('.storyDetail .container').find($('h1')).text(`${storyTitle}`);


    $('.book .overflow .fa-heart').on('click', function() {

        $(this).toggleClass('fas');
    });



    //change text of the books
    bookText = $('.slider .book h3');
    console.log(bookText);

    for (let bookTitle of bookText) {


        $(bookTitle).text(`${$(bookTitle).text().slice(0,5)}...`);
        console.log(bookTitle);



    }

    $('.rightProfileBox .upload input').on('change', function() {


        let profileInput = $(this);
        let profilePhotoVal = profileInput.val();
        let profilePhotoList = profilePhotoVal.split("\\");
        profileInput.attr('value', `${profilePhotoVal}`);
        let profilePhoto = profilePhotoList[profilePhotoList.length - 1];
        console.log(profilePhotoList);

        $(this).parent().parent().find('img').attr('src', `${URL.createObjectURL(event.target.files[0])}`);

        $(this).parent().parent().parents('.rightProfileBox').siblings('nav').find('.navIcons img').attr('src', `${URL.createObjectURL(event.target.files[0])}`);

        if ($('body').width() <= 768) {

            $(this).parent().parent().find('img').attr('src', `${URL.createObjectURL(event.target.files[0])}`);

            $(this).parent().parent().parents('.rightProfileBox').siblings('nav').find('.navIcons img').attr('src', `${ URL.createObjectURL(event.target.files[0])}`);

        }
    });





    $('nav .navIcons .userIcon').on('click', function(e) {

        e.stopPropagation();
        e.preventDefault();

        let Box = $('.rightProfileBox');

        Box.slideToggle(1000);
        /*
        if(Box.hasClass('visible')){
                       Box.animate({

                        right: '-300px'},'slow');
                        Box.css('overflow','hidden');
                                        Box.css('display','none');




        } else {
            Box.animate({

                    right: '0px'},'slow');
        }
        */

    });


    $('ul.breadCrumb li.active a').on('click', function(e) {

        e.preventDefault();
        e.stopPropagation();
    });



    for (let b = 0; b < $('.books').children().children().length; b++) {
        let book = $('.books').children().children()[b];

        $(book).find($('.overflow a')).addClass('hvr-ripple-out')

        $(book).find('.rate').addClass('writer');
        $(book).find('ul').remove('ul.rate');

        let writerName = $("<p  class='writerName'> </p>").text('zenab mohamed');
        let writen = $("<span></span>").text('writen by : ');

        $(writerName).prepend(writen);
        $(book).find($('.bookCaption')).append(writerName);


        $(writerName).css({
            'width': '100%',
            'color': '#dc864e',
            'font-size': '13px',
            'font-family': " 'Work Sans', sans-serif",
            'font-weight': '400',
            'text-align': 'center',
            'padding': '2px 0px 10px'
        });

        $(writen).css({
            'color': '#592a20',
            'font-size': '14px',

            'font-weight': '500',

        });

    }

    for (let b = 0; b < $('.allBooks').children().length; b++) {
        let book = $('.allBooks').children()[b];

        $(book).find($('.overflow a')).addClass('hvr-ripple-out')


        $(book).find('.rate').addClass('writer');
        $(book).find('ul').remove('ul.rate');

        let writerName = $("<p  class='writerName'> </p>").text('zenab mohamed');
        let writen = $("<span></span>").text('writen by : ');

        $(writerName).prepend(writen);
        $(book).find($('.bookCaption')).append(writerName);


        $(writerName).css({
            'width': '100%',
            'color': '#dc864e',
            'font-size': '13px',
            'font-family': " 'Work Sans', sans-serif",
            'font-weight': '400',
            'text-align': 'center',
            'padding': '2px 0px 10px'
        });

        $(writen).css({
            'color': '#592a20',
            'font-size': '14px',

            'font-weight': '500',



        });


    }

    for (let b = 0; b < $('.allBooks').children().length; b++) {

        let book = $('.allBooks').children().find($('.overflow'))[b];

        $(book).addClass('hvr-curl-top-right');

    }



    for (let b = 0; b < $('.mostRecently').children().children().length; b++) {
        let book = $('.mostRecently').children().find($('.overflow'))[b];
        $(book).addClass('hvr-curl-top-right');

    }

    //loading screen 
    /*
        let msg = ["Welcome To Hadoota World ", "We Wish for You Amazing Journey With out Books", "Please Waiting Until Loading"];
        let ele = $("#msg");
        let i = 0;
        console.log($(msg)[0]);
        $(ele).text($(msg[0]));
        let interval = setInterval(function() {
            $(ele).text($(msg[++i % msg.length]))
        }, 2000);
    */


    $(window).on('load', function() {

        let msg = [" 🕮 Welcome To Hadoota World ..", " 🕮 We Wish for You Amazing Journey With Our Books ..", "Please Waiting Until Loading ...."];
        let ele = document.getElementById("msg");
        let i = 0;
        ele.innerText = msg[0];
        let interval = setInterval(function() {
            ele.innerText = msg[++i % msg.length];
        }, 1300);





        $('#loader').find($('.loadingBook')).fadeOut(1500, function() {


            $(this).parent().fadeOut(1500, function() {

                $('body').css({ "overflow": "auto" });

                $(this).remove();

            });

        });
    });



    // i want to edit animation of recently stories and animation of the loader for msgbox 

    var translateButton = $('form.translateButton .submit')[0];
    console.log(translateButton);

    $(translateButton).click(function(e) {
        e.preventDefault();

        $(this).parent().parent().parent().siblings('.pageloader').fadeIn(2000, function() {

            $(this).fadeOut(2000);
        });
        $(this).css('cursor', 'no-drop');
        $(this).attr('disabled', true);

    });




    //wow.js'

    $('.ourServices').find('.container').find('.translation').attr('data-wow-offset', `${(($('.ourServices').offset().top - 300))}`);
    $('.ourServices').find('.container').find('.bookshelf').attr('data-wow-offset', `${(($('.ourServices').offset().top -300))}`);
    $('.recentlyStories').attr('data-wow-offset', `${(($('.recentlyStories').offset().top - 10))}`);
    $('.whyus').attr('data-wow-offset', `${(($('.whyUs').offset().top -30))}`);




});

$('.ourServices').find('.container').css('overflow', 'hidden');
$('.whyus').find('.container').css('overflow', 'hidden');
$('.feedback').find('.container').css('overflow', 'hidden');