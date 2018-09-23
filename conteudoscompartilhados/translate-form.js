jQuery(document).ready(function () {

	console.log('Performma Translate Login Form');

	try {
		document.getElementById('um-submit-btn').value = 'Registrar';
	} catch (e) {
	}
	try {
		document.querySelectorAll('.um-button.um-alt')[0].innerText = 'Entrar';
	} catch (e) {
	}

	try {
		document.querySelectorAll('#loginform > p.login-username > label')[0].innerText = 'E-mail';
	} catch (e) {
	}

	try {
		document.querySelectorAll('.um-field-label > label')[3].innerText = "Confirma Senha";
	} catch (e) {
	}

});