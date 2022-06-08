function calculaHoras() {
  totalHorasDia = $("#totalHorasDia").val(), horaEntrada = $("#horaEntrada").val(), horaIdaAlmoco = $("#horaIdaAlmoco").val(), horaVoltaAlmoco = $("#horaVoltaAlmoco").val(), horaSaida = $("#horaSaida").val(), $("#diferencaPrimeiroTurno").html(""), $("#tempoRestante").html(""), $("#horaSaidaMinima").html(""), $("#saldoHoras").html(""), possuiValor(horaEntrada) && possuiValor(horaIdaAlmoco) && (diffEntradaAlmoco = diferencaHoras(horaEntrada, horaIdaAlmoco), $("#diferencaPrimeiroTurno").html(diffEntradaAlmoco), possuiValor(totalHorasDia) && (tempoRestante = diferencaHoras(diffEntradaAlmoco, totalHorasDia), $("#tempoRestante").html(tempoRestante), possuiValor(horaVoltaAlmoco) && (horaSaidaCerta = somaHora(horaVoltaAlmoco, tempoRestante), $("#horaSaidaMinima").html(horaSaidaCerta), possuiValor(horaSaida) && (saldoHoras = diferencaHoras(horaSaidaCerta, horaSaida), $("#saldoHoras").html(saldoHoras), isHoraInicialMenorHoraFinal(horaSaida, horaSaidaCerta) && $("#saldoHoras").html("-" + $("#saldoHoras").html())))))
}

function diferencaHoras(a, b) {
  return isHoraInicialMenorHoraFinal(a, b) || (aux = b, b = a, a = aux), hIni = a.split(":"), hFim = b.split(":"), horasTotal = parseInt(hFim[0], 10) - parseInt(hIni[0], 10), minutosTotal = parseInt(hFim[1], 10) - parseInt(hIni[1], 10), minutosTotal < 0 && (minutosTotal += 60, horasTotal -= 1), b = completaZeroEsquerda(horasTotal) + ":" + completaZeroEsquerda(minutosTotal)
}

function somaHora(a, b) {
  return horaIni = a.split(":"), horaSom = b.split(":"), horasTotal = parseInt(horaIni[0], 10) + parseInt(horaSom[0], 10), minutosTotal = parseInt(horaIni[1], 10) + parseInt(horaSom[1], 10), minutosTotal >= 60 && (minutosTotal -= 60, horasTotal += 1), horaFinal = completaZeroEsquerda(horasTotal) + ":" + completaZeroEsquerda(minutosTotal), horaFinal
}

function isHoraInicialMenorHoraFinal(a, b) {
  return horaIni = a.split(":"), horaFim = b.split(":"), hIni = parseInt(horaIni[0], 10), hFim = parseInt(horaFim[0], 10), hIni != hFim ? hIni < hFim : (mIni = parseInt(horaIni[1], 10), mFim = parseInt(horaFim[1], 10), mIni != mFim ? mIni < mFim : void 0)
}

function preencheuHoraCompleta(a) {
  var b = a.replace(/[^0-9:]/g, "");
  return 5 == b.length
}

function isHoraValida(a) {
  var b = new RegExp("^([0-1][0-9]|[2][0-3]):([0-5][0-9])$");
  return null != b.exec(a)
}

function possuiValor(a) {
  return void 0 != a && "" != a
}

function completaZeroEsquerda(a) {
  return a < 10 ? "0" + a : a
}

var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];



$(document).ready(function() {
  if (n == "Friday") {
    $("#totalHorasDia").val("08:00"), $(".hora").mask("99:99"), $(".hora").blur(function() {
      preencheuHoraCompleta($(this).val()) && !isHoraValida($(this).val()) && (alert("Horário inválido! Por favor, informe um horário válido."), $(this).val(""), $(this).focus()), calculaHoras()
    })
  } else {
    $("#totalHorasDia").val("08:48"), $(".hora").mask("99:99"), $(".hora").blur(function() {
      preencheuHoraCompleta($(this).val()) && !isHoraValida($(this).val()) && (alert("Horário inválido! Por favor, informe um horário válido."), $(this).val(""), $(this).focus()), calculaHoras()
    })
  }
});