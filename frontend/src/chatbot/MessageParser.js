  class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state; 
    }

    parse(message) {
      // if(message.toLowerCase().includes('yes'))
      if (message.toLowerCase().includes('hello')) {
        this.actionProvider.handleStudent();
      }
      if(message.toLowerCase().includes('yes')){
        this.actionProvider.handleReschedule();
      }

      if(message.toLowerCase().includes('no')){
        this.actionProvider.handleRejection();
      }

      if(message.toLowerCase().includes('select date')){
        this.actionProvider.handleSelectTime()
      }

      if(message.toLowerCase().includes('confirm')){
        this.actionProvider.handleConfirmation()
      }

      // setTimeout(()=>{
      //   this.actionProvider.handleDateTime();
      // }, "4000");
    }
  }

  export default MessageParser;