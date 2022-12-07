let queueLine = [ "Бат", "Дорж", "Пунцаг", "Готов", "Баяраа", "Болд", "Навчаа", "Гончигсумлай", "Цэцгээ", "Нэргүй", "Бальбийгомбо", "Баатар", "Сүхээ" ];
console.log(queueLine + "");

let place = queueLine.indexOf("Гончигсумлай");
queueLine.splice(place, 0, "egch1", "egch2");
console.log(queueLine.slice(0, 10) + "\n");