const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = () => {
  return ["Aku bot NSZ. Siapa nama kamu?", "Hola ${data?.nama}, berapa usia kamu?", "OoO ${data?.usia}, hobi kamu apa?", "Waw sama aku juga ${data?.hobi}, btw punya pacar ngga?", "Ohh ${data?.pacar}, oke udahan dulu ya"];
};

pertanyaan.innerHTML = botSay()[0];

let.usersData = [];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  console.log({ usersData: usersData });
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [1250]);
  usersData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = "Thank u ${usersData[0]}udah main ke NSZ bot";
  jawaban.value = "siap thanks juga!";
}

function botEnd() {
  window.location.reload();
}
