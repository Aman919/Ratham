import DateTimePickerWidget from "./widgets/DateTimePickerWidget"
import GotItWidget from "./widgets/gotIt";
import TextMessage from "./widgets/customMessage";
import DatePickers from "./widgets/DatePickers";
import TimePicker from "./widgets/TimePicker";

class ActionProvider { 
  constructor(createChatBotMessage, setStateFunc, createClientMessage, stateRef, createCustomMessage, ...rest) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc; 
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  handleStudent() {
    const message = this.createChatBotMessage(
      <GotItWidget onGotItClick={this.handlePickSlot} />
    );
    this.handleUpdate(message);
  }

  handleReschedule() {
    const message = this.createChatBotMessage(
      <DatePickers />
    )
    this.handleUpdate(message)
  }

  handleRejection(){
    const message = this.createChatBotMessage(
      <TextMessage text={"Ok! Chat End!"} />
    )
    this.handleUpdate(message)
  }

  handleDateTime() {
    const message = this.createChatBotMessage(
      <DateTimePickerWidget />
    );
    this.handleUpdate(message);
  }

  handleSelectTime(){
    const message = this.createChatBotMessage(
      <TimePicker />
    );
    this.handleUpdate(message)
  }

  handleConfirmation(){
    const message = this.createChatBotMessage(
      <TextMessage text={"Rescheduling! You'll receive an email. Thank You!"}/>
    )
    this.handleUpdate(message)
  }

  //now we need to insert this into chatbot state
  handleUpdate(message) {
    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  }
}

export default ActionProvider;