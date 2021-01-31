$(document).ready(function () {
  $('.itemBox').not('.img1').hide('1000');
});

$(document).ready(function () {
  $('.list').click(function () {
    const value = $(this).attr('data-filters');
    if (value == 'all') {
      $('.itemBox').show('1000');
    } else {
      $('.itemBox')
        .not('.' + value)
        .hide('1000');
      $('.itemBox')
        .filter('.' + value)
        .show('1000');
    }
  });

  $('.list').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
  });
});
