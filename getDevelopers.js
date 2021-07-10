$(function () {
    $.ajax({
        type: 'get',
        url: 'developers.json',
        dataType: 'json',
        success: function (data) {
            let templateDev = Mustache.render($("#dev-template").html(), {"data": data});
            $("#wrapper").html(templateDev);
        }
    });
})
