$(document).ready(()=> {
    $('button').hover(function () {
        var image = "url('" + $(this).attr('my-background') +"')";
        $('body').css(
            {"background-image": image,
            "background-size": "100%",
            "background-repeat": "no-repeat"
        });
    }, function() {
        $('body').css("background-image", 'none')
    });
    $('button').click(function () {
        var image = "url('" + $(this).attr('my-background') +"')";
        $('body').css(
            {"background-image": image,
            "background-size": "100%",
            "background-repeat": "no-repeat"
        });
        $('.menu h2').text("Select Players");
        $('.menu-bottom').html(
            '<select id="left"><option value="" disabled selected>Select</option><option value="donny">Donny</option><option value="leo">Leo</option><option value="mikey">Mikey</option><option value="raphael">Raph</option></select><select id="right"><option value="" disabled selected>Select</option><option value="donny">Donny</option><option value="leo">Leo</option><option value="mikey">Mikey</option><option value="raphael">Raph</option></select><div><button id="go">GO</button></div>'
        );
    });

    $(document).on("change", "#left", function () {
        var ninja = "images/" + $(this).val() + ".png";
        $(".left").attr('src', ninja);
    });
    $(document).on("change", "#right", function () {
        var ninja = "images/" + $(this).val() + ".png";
        $(".right").attr('src', ninja);
    });
    $(document).on("click", "#go", function () {
        var left = $("#left").val();
        var right = $("#right").val();
        if(left == null || right == null) {
            alert("Please choose both players");
        } else {
            $(".menu").hide();
            $("body").prepend("<h1>FIGHT</h1>");
        }

    })
});