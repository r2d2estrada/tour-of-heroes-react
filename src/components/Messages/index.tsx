import React from "react";
import { connect } from "react-redux";
import { State } from "../../redux";
import { Message } from "../../models/messages";

const Messages: React.FC<{ messages?: Message[] }> = ({ messages }) => {
  if (messages)
    return (
      <div className="card">
        <div className="card-body">
          <h4>Messages:</h4>
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

export default connect(mapStateToProps)(Messages);
