(function() {
    'use strict';

    var cmds = document.getElementsByClassName('del');

    for (var i = 0; i < cmds.length; i++) {
        cmds[i].addEventListener('click', function(e) {
            // aダグの動きを抑制(リンクへ飛ぶこと)
            e.preventDefault();
            if (confirm('are you sure?')) {
                document.getElementById('form_' + this.dataset.id).submit();
            }
        });
    }
})();