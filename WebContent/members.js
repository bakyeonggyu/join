function infoConfirm(){
	if(document.reg_frm.id.value.length == 0){
		alert("아이디를 입력하세요.");
		reg_frm.id.focus();
		return;
	}
	
	if(document.reg_frm.id.value.length < 4){
		alert("아이디가 너무 짧습니다.");
		reg_frm.id.focus();
		return;
	}
	
	if(document.reg_frm.pw.value.length == 0){
		alert("비밀번호를 입력하세요.");
		reg_frm.pw.focus();
		return;
	}
	
	if(document.reg_frm.pw.value != document.reg_frm.pw_check.value){
		alert("비밀번호를 확인해주세요.");
		reg_frm.pw.focus();
		return;
	}
	
	if(document.reg_frm.name.value.length == 0){
		alert("이름을 입력하세요.");
		reg_frm.name.focus();
		return;
	}
	
	if(document.reg_frm.eMail.value.length == 0){
		alert("이메일을 입력하세요.");
		reg_frm.eMail.focus();
		return;
	}
	
	document.reg_frm.submit();
}

function updateInfoConfirm() {
	if(document.reg_frm.pw.value == ""){
		alert("비밀번호를 입력하세요.");
		document.reg_frm.pw.focus();
		return;
	}
	
	if(document.reg_frm.pw.value != document.reg_frm.pw_check.value){
		alert("비밀번호를 확인해주세요.");
		return;
	}
	
	if(document.reg_frm.eMail.value.length == 0){
		alert("이메일을 입력하세요.");
		reg_frm.eMail.focus();
		return;
	}
	
	document.reg_frm.submit();
}