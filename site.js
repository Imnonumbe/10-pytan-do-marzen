$(document).ready(async () => {
    let qnum = 0;

    function ask(quest) {
        $('#qtitle').text(quest.title);
        if (quest.ans1) {
            $('#qbutton1text').text(quest.ans1);
            $('#qbutton1').show().off('click').click(() => {
                if (quest.subq1) {
                    ask(quest.subq1);
                } else {
                    ask(QUIZDATA.questions[++qnum]);
                }
            });
        } else {
            $('#qbutton1').hide();
        }
        if (quest.ans2) {
            $('#qbutton2text').text(quest.ans2);
            $('#qbutton2').show().off('click').click(() => {
                if (quest.subq2) {
                    ask(quest.subq2);
                } else {
                    ask(QUIZDATA.questions[++qnum]);
                }
            });
        } else {
            $('#qbutton2').hide();
        }
    }

    $('title, #qtitle').text(QUIZDATA.title);
    $('#qbutton1text').text('START');
    $('#qbutton1').click(() => {
        ask(QUIZDATA.questions[0]);
    });
    $('#qbutton2').hide();
});
