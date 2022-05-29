
const dayjs = require('dayjs');
let updateLocale = require('dayjs/plugin/updateLocale');
dayjs.extend(updateLocale);
dayjs.locale('pt-br');
dayjs.updateLocale('pt-br', {
    weekdays: [
        "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
    ]
});

let date = dayjs().locale('pt-br').format("dddd, DD/MM");

export default date;