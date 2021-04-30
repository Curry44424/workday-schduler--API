

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    console.log(value)
    var time = $(this).parent().attr("id")

    localStorage.setItem(time, value)

  })

  function blockUpdater() {
    var currentHour = moment().hours();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr())
      if (blockHour < currentHour) {
        $(this).addClass("past")
      } else if (blockHour === currentHour) {
        $(this).removeClass('past')
        $(this).addClass("present")
      } else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
      }
    })
  }

blockUpdater()
// var interval = setInterval(blockUpdater, 15000)

$("#9.description").val(localStorage.getItem("9"))
$("#10.description").val(localStorage.getItem("10"))
$("#11.description").val(localStorage.getItem("11"))
$("#12.description").val(localStorage.getItem("12"))
$("#13.description").val(localStorage.getItem("13"))
$("#14.description").val(localStorage.getItem("14"))
$("#15.description").val(localStorage.getItem("15"))
$("#16.description").val(localStorage.getItem("16"))
$("#17.description").val(localStorage.getItem("17"))


$("#currentDay").text(moment().format("dddd, MMMM Do"))
})

