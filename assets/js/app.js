/*
Descrizione:

Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto,
 formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. 
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, 
il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": 
cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare
 un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente 
(se done era uguale a false, impostare true e viceversa)

*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: "",
      error: null,
      completed: [],
      tasks: ["Learn HTML", "Learn CSS", "Learn JS", "Learn PHP"],
    };
  },
  methods: {
    addTasks() {
      console.log("add");
      console.log(this.newTask);
      console.log(this.newTask.length);

      if (this.newTask.length > 5) {
        this.tasks.unshift(this.newTask);
        this.newTask = "";
        this.error = null;
      } else {
        console.log("you can not");
        this.error = "sorry about it";
      }
    },
    completeTask(i) {
      this.completed.push();
      this.tasks.splice(i, 1);
    },
  },
}).mount("#app");
