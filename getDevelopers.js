$(function () {
    $.ajax({
        type: 'get',
        url: 'https://sef-global.github.io/dev-welcome-pr/developers.json',
        dataType: 'json',
        success: function (data) {
            let templateDev = Mustache.render($("#dev-template").html(), {"data": data});
            $("#wrapper").html(templateDev);
        }
    });
})
