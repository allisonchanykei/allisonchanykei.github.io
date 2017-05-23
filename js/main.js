$(document).ready(function() {
    var company = getQueryVariable("company");
    var showLetter = 0 != $('#select-box option[value=' + company + ']').length;
    if (showLetter) {
        $("#CoverLetter").prop("href", "./doc/CoverLetter/" + company + ".pdf");
        $("#CoverLetter").show();
    } else {
        $("#no-comp").show();
        //prevent postback
        if ($("#selectCompany").val()) {
            $("#chooseCompany").show();
        }
        $("#selectCompany").on("change", function() {
            if ($(this).val()) {
                $("#chooseCompany").show();
            } else {
                $("#chooseCompany").hide();
            }
        })
        $("#chooseCompany").on("click", function(e) {
            window.location.href = window.location.href + "?company=" + $("#selectCompany").val();
        })
    }
})

function getQueryVariable(variable) {
    var query = window.location.search.substring(1).toLowerCase();
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}