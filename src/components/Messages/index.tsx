import React from "react";
import { connect } from "react-redux";
import { State } from "../../redux";
import { Message } from "../../models/messages";
import { clearMessages } from "../../redux/actions/message.actions";

interface MessagesProps {
  messages?: Message[];
  clearMessages?: any;
}

const Messages: React.FC<MessagesProps> = ({ messages, clearMessages }) => {
  if (messages)
    return (
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col">
              <h4>Messages:</h4>
            </div>
            <div className="col text-right">
              <button
                className="btn btn-outline-secondary"
                onClick={clearMessages}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {messages.map((message: Message, idx: number) => (
              <li key={idx} className="list-group-item">
                {message}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  else return null;
};

const mapStateToProps = (state: State) => ({
  messages: state.messages,
});

const mapDispatchToProps = {
  clearMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
