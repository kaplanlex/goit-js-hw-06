class Storage {
    #items; 
  
    constructor(params) {
      
      this.#items = params.items||[]; 
    }
  
    getItems() {
      return this.#items; 
    }
  
    addItem(newItem) {
      this.#items.push(newItem); 
    }
  
    removeItem(itemToRemove) {
      const i = this.#items.indexOf(itemToRemove); 
      if (i !== -1) { 
        this.#items.splice(i, 1); 
      }
    }
  }
  
  const storage = new Storage({ items: ["Nanitoids", "Prolonger", "Antigravitator"] });
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  
  storage.addItem("Droid");
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  
  storage.removeItem("Prolonger");
  console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
  
  storage.removeItem("Scaner"); // Попытка удалить несуществующий товар
  console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
  