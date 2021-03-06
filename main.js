require('./main.less');

var d = document,
    _queryS = d.querySelector.bind(d),
    _chatButtonId = 'naugtur-chat-button';

if (_queryS('#' + _chatButtonId)) {
    throw new Error("Bookmarklet already loaded.");
}

d.body.classList.add('naugtur');

//chat autojoiner
setInterval(function () {
    var input = _queryS('.chat-input[disabled]');
    if (input) {
        input.removeAttribute('disabled');
    }
}, 2000);

var mybt = d.createElement('a');
mybt.setAttribute('id', _chatButtonId);
mybt.setAttribute('class', 'btn btn-medium btn-success');
mybt.setAttribute('title', 'http://piratesofgs.github.io/gs-tweaks/');
mybt.innerHTML = 'Chat';
mybt.addEventListener('click', function () {
    d.body.classList.toggle('naugtur');
    mybt.classList.toggle('btn-success');
});
_queryS('#ocean').appendChild(mybt);
