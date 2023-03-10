var interns = [
    {
      "first_name": "Иван",
      "last_name": "Иванов",
      "age": 20,
      "speciality": "frontend",
      "course": 2
    },
    {
      "first_name": "Петр",
      "last_name": "Петров",
      "age": 21,
      "speciality": "backend",
      "course": 1
    },
    {
      "first_name": "Мария",
      "last_name": "Иванова",
      "age": 19,
      "speciality": "design",
      "course": 3
    },
    {
      "first_name": "Мария",
      "last_name": "Иванова",
      "age": 19,
      "speciality": "design",
      "course": 3
    },
    {
      "first_name": "Петр",
      "last_name": "Петров",
      "age": 21,
      "speciality": "backend",
      "course": 1
    },
    {
      "first_name": "Мария",
      "last_name": "Иванова",
      "age": 19,
      "speciality": "design",
      "course": 3
    },
    {
      "first_name": "Иван",
      "last_name": "Иванов",
      "age": 20,
      "speciality": "frontend",
      "course": 2
    },
    {
      "first_name": "Петр",
      "last_name": "Петров",
      "age": 21,
      "speciality": "backend",
      "course": 1
    },
    {
      "first_name": "Мария",
      "last_name": "Иванова",
      "age": 19,
      "speciality": "design",
      "course": 3
    },
    {
      "first_name": "Мария",
      "last_name": "Иванова",
      "age": 19,
      "speciality": "design",
      "course": 3
    },
    {
      "first_name": "Петр",
      "last_name": "Петров",
      "age": 21,
      "speciality": "backend",
      "course": 1
    },
    {
      "first_name": "Мария",
      "last_name": "Иванова",
      "age": 19,
      "speciality": "design",
      "course": 3
    },
    {
      "first_name": "Иван",
      "last_name": "Иванов",
      "age": 20,
      "speciality": "frontend",
      "course": 2
    },
    {
      "first_name": "Петр",
      "last_name": "Петров",
      "age": 21,
      "speciality": "backend",
      "course": 1
    },
    {
      "first_name": "Мария",
      "last_name": "Иванова",
      "age": 19,
      "speciality": "design",
      "course": 3
    },
    {
      "first_name": "Мария",
      "last_name": "Иванова",
      "age": 19,
      "speciality": "design",
      "course": 3
    },
    {
      "first_name": "Петр",
      "last_name": "Петров",
      "age": 21,
      "speciality": "backend",
      "course": 1
    },
    {
      "first_name": "Мария",
      "last_name": "Иванова",
      "age": 19,
      "speciality": "design",
      "course": 3
    },
    {
      "first_name": "Иван",
      "last_name": "Иванов",
      "age": 20,
      "speciality": "frontend",
      "course": 2
    },
    {
      "first_name": "Петр",
      "last_name": "Петров",
      "age": 21,
      "speciality": "backend",
      "course": 1
    },
    {
      "first_name": "Мария",
      "last_name": "Иванова",
      "age": 19,
      "speciality": "design",
      "course": 3
    },
    {
      "first_name": "Мария",
      "last_name": "Иванова",
      "age": 19,
      "speciality": "design",
      "course": 3
    },
    {
      "first_name": "Петр",
      "last_name": "Петров",
      "age": 21,
      "speciality": "backend",
      "course": 1
    },
    {
      "first_name": "Мария",
      "last_name": "Иванова",
      "age": 19,
      "speciality": "design",
      "course": 3
    },
  ];
  
  // Функция для загрузки списка стажеров с сервера и его отображения на странице
  function loadInternsList(specialityFilter, courseFilter) {
    // Очистка текущего списка стажеров
    $("#interns_list").empty();
    
    // Фильтрация стажеров
    var filteredInterns = interns;
    if (specialityFilter !== "") {
      filteredInterns = filteredInterns.filter(function(intern) {
        return intern.speciality === specialityFilter;
      });
    }
    if (courseFilter !== "") {
      filteredInterns = filteredInterns.filter(function(intern) {
        return intern.course === parseInt(courseFilter);
      });
    }
  
    // Отображение списка стажеров на странице
    $.each(filteredInterns, function(i, intern) {
      var row = $("<tr>");
      row.append($("<td>").text(intern.first_name));
      row.append($("<td>").text(intern.last_name));
      row.append($("<td>").text(intern.age));
      row.append($("<td>").text(intern.speciality));
      row.append($("<td>").text(intern.course));
      $("#interns_list").append(row);
    });
  }
  
  // Обработчик клика по кнопке фильтрации
  $("#filter_btn").on("click", function() {
    var specialityFilter = $("#speciality_filter").val();
    var courseFilter = $("#course_filter").val();
    loadInternsList(specialityFilter, courseFilter);
  });
  
  // Загрузка списка всех стажеров при первой загрузке страницы
  loadInternsList("", "");
  
  // Обработчик клика по кнопке "Сбросить фильтры"
  $("#reset_btn").click(function() {
    // Сброс значений выбранных фильтров
    $("#speciality_filter").val("");
    $("#course_filter").val("");
    // Загрузка списка всех стажеров без фильтров
    loadInternsList("", "");
});