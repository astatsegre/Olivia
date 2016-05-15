var formFeedback = document.forms.feedback;
var formSubscribe = documen.forms.subscribe;

if (bowser.msie && bowser.version <= 9) {
    formFeedback.first_name.value = "First Name";
    formFeedback.last_name.value = "Last Name";
    formFeedback.email.value = "Email";
    formFeedback.tel.value = "Tel. Number";
    formFeedback.comments.value = "Comments";
    formSubscribe.email.value = "Enter your e-mail";
}