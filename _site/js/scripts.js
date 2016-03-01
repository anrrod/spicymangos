$(".portfolio-modal").on('hidden.bs.modal', function (e) {
    var i = $(this).find("iframe");
    i.attr("src", i.attr("src"));
});