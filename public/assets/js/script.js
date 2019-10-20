$('.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
        countNum: countTo
    },
        {
            duration: 8000,
            easing: 'swing',
            step: function () {
                $this.text(parseFloat(this.countNum).toFixed(1));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }
        });
});
$('.counter2').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
        countNum: countTo
    },
        {
            duration: 8000,
            easing: 'swing',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }
        });
});