var followBtnClicked = 0;
$("#follow-button").on("click", function () {
  if (followBtnClicked == 1) {
    $(this).html("+ follow");
    followBtnClicked = 0;
  } else {
    $(this).html("following");
    followBtnClicked = 1;
    alert("恭喜獲得500元購物金！");
  }
});

$(".add-cart").click(function () {
  alert("商品已加入購物車");
});

$("#cloth_1 .count-btn").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#cloth_1  .addResult").val();
  $(this).next("#cloth_1  .addResult").val();
  if (btnType == "add") {
    $("#cloth_1  .addResult").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#cloth_1  .addResult").val(parseInt(inputVal) - 1);
  }
});

$("#cloth_2  .count-btn").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#cloth_2  .addResult").val();
  $(this).next("#cloth_2  .addResult").val();
  if (btnType == "add") {
    $("#cloth_2  .addResult").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#cloth_2  .addResult").val(parseInt(inputVal) - 1);
  }
});

$("#cloth_3  .count-btn").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#cloth_3  .addResult").val();
  $(this).next("#cloth_3  .addResult").val();
  if (btnType == "add") {
    $("#cloth_3  .addResult").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#cloth_3  .addResult").val(parseInt(inputVal) - 1);
  }
});

$("#cloth_4  .count-btn").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#cloth_4  .addResult").val();
  $(this).next("#cloth_4  .addResult").val();
  if (btnType == "add") {
    $("#cloth_4  .addResult").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#cloth_4  .addResult").val(parseInt(inputVal) - 1);
  }
});

$("#cloth_5  .count-btn").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#cloth_5  .addResult").val();
  $(this).next("#cloth_5  .addResult").val();
  if (btnType == "add") {
    $("#cloth_5  .addResult").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#cloth_5  .addResult").val(parseInt(inputVal) - 1);
  }
});

$("#cloth_6  .count-btn").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#cloth_6  .addResult").val();
  $(this).next("#cloth_6  .addResult").val();
  if (btnType == "add") {
    $("#cloth_6  .addResult").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#cloth_6  .addResult").val(parseInt(inputVal) - 1);
  }
});
// function click(block_site) {
//   $(".count-btn").click(function () {
//     var btnType = $(this).attr("data");
//     var inputVal = $(block_site).val();
//     $(this).next(block_site).val();
//     if (btnType == "add") {
//       $(block_site).val(parseInt(inputVal) + 1);
//     } else if (btnType == "minus" && inputVal > 1) {
//       $(block_site).val(parseInt(inputVal) - 1);
//     }
//   });
// }

// click("#cloth_1  .addResult");
// click("#cloth_2  .addResult");
// click("#cloth_3  .addResult");
// click("#cloth_4  .addResult");
// click("#cloth_5  .addResult");
// click("#cloth_6  .addResult");
