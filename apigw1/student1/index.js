

$(document).ready(function () {
    var tabList = dataJSON.tabData

    $.each(tabList, function (index, item) {
        var eachTab = $('<div class="p-2 d-flex align-items-center justify-content-center h-100 px-4 each-link" style="cursor: pointer;" link="' + item.tabname.split(' ').join('_') + '"><p class="text-align-center">' + item.tabname + '</p></div>')

        var eachiframediv = $('<div id="' + item.tabname.split(' ').join('_') + '-loader-iframe-div" class="w-100 h-100 each-iframe" hidden><div class="justify-content-center" id="' + item.tabname.split(' ').join('_') + '-loader-div"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div><div class=" w-100 h-100" id="' + item.tabname.split(' ').join('_') + '-iframe-div"><iframe src="" id="' + item.tabname.split(' ').join('_') + '-iframe"></iframe></div></div>')

        $('#tab-div').append(eachTab)
        $('#iframes-div').append(eachiframediv)
        if(index === 0){
            $('.each-link').addClass('active')
            $('.each-iframe').removeAttr('hidden')
        }
        $('#' + item.tabname.split(' ').join('_') + '-iframe').attr('src', item.tabURL)
        $('#' + item.tabname.split(' ').join('_') + '-iframe').attr('onload', "afterload('#" + item.tabname.split(' ').join('_') + "')")
    })

    $.each(dataJSON.Document,function(index,item){
        var eachContent = $('<div class="p-2"><h5 class="mb-1 font-weight-bold">'+item.heading+'</h5><p class="text-secondary">'+item.content+'</p></div>')

        $('#content-div').append(eachContent)
    })
})

$(document).on('click', '.each-link', function () {
    $('#loader-div').attr('hidden', true)
    $('.each-link').removeClass('active')
    $(this).addClass('active')
    $('.each-iframe').attr('hidden', true)
    $('.each-iframe#' + $(this).attr('link') + '-loader-iframe-div').removeAttr('hidden')
})

function afterload(key) {
    $(key + "-loader-div").attr('hidden', true)
    $(key + "-iframe-div").attr('hidden', false)
}